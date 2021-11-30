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

  constructor() { }

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

  removeFromCart(product: Product) {
    debugger;
    const selectedProductsOrders = this.loadOrderedProducts();
    const currentOrderedProduct = this.loadOrderedProducts().find(p => p.product!.id === product.id);

  }
}
