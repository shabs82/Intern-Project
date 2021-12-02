import { Injectable } from '@angular/core';
import {Product} from "../../product/shared/model/product";
import {SelectedProductOrderModel} from "./selected-product-order.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private totalPriceSubject = new BehaviorSubject<number>(this.getTotalPrice(this.loadOrderedProducts()));
  totalPrice$ = this.totalPriceSubject.asObservable();
  selectedProductOrders: SelectedProductOrderModel[] = [];

  constructor() {
    this.selectedProductOrders = this.loadOrderedProducts();
  }

  addToCart(product: Product) {
    const currentSelectedProductOrder = this.selectedProductOrders.find(ol => ol.product?.id === product.id);
    if (currentSelectedProductOrder) {
      currentSelectedProductOrder.quantity++;
    } else {
      const newSelectedProductOrder = new SelectedProductOrderModel();
      newSelectedProductOrder.productId = product.id;
      newSelectedProductOrder.product = product;
      newSelectedProductOrder.quantity = 1;
      this.selectedProductOrders.push(newSelectedProductOrder);
    }
    this.saveChanges();
  }

  saveChanges(): void {
    localStorage.setItem('selectedProductOrders', JSON.stringify(this.selectedProductOrders));
  }

  getTotalPrice(selectedProduct: SelectedProductOrderModel[]): number {
    let totalPrice = 0;
    for (const orderedProduct of selectedProduct) {
      totalPrice += orderedProduct.quantity * orderedProduct.product!.price;
    }
    return totalPrice;
  }

  loadOrderedProducts(): SelectedProductOrderModel[] {
    return JSON.parse(<string>localStorage.getItem('selectedProductOrders'));
  }

  removeWholeProductFromCart(product: Product) {
    const currentOrderedProduct = this.selectedProductOrders.find(p => p.product!.id === product.id);
      this.selectedProductOrders.forEach((orderLine: SelectedProductOrderModel, index) => {
        if (orderLine === currentOrderedProduct) {
          this.selectedProductOrders.splice(index, 1);
        }
      });
    this.saveChanges();
  }

  removeOneQuantityOfSelectedProductFromCart(product: Product) {
    const currentOrderedProduct = this.selectedProductOrders.find(p => p.product!.id === product.id);
    if (currentOrderedProduct!.quantity > 1) {
      currentOrderedProduct!.quantity--;
    } else {
      this.selectedProductOrders.forEach((orderLine: SelectedProductOrderModel, index) => {
        if (orderLine === currentOrderedProduct) {
          this.selectedProductOrders.splice(index, 1);
        }
      });
    }
    this.saveChanges();
  }

  addOneQuantityOfSelectedProductToCart(product: Product) {
    
  }
}
