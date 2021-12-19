import { Injectable } from '@angular/core';
import {Product} from "../../product/shared/model/product";
import {SelectedProductOrderModel} from "./selected-product-order.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  calTotalPrice  = (selectedProducts: SelectedProductOrderModel[]) : number => {
    let totalPrice = 0;
    if(selectedProducts != null){
      for (const orderedProduct of selectedProducts) {
        totalPrice += orderedProduct.quantity * orderedProduct.product!.price;
      }
    }

    return totalPrice;
  }

  public totalPriceSubject = new BehaviorSubject<number>(this.calTotalPrice(this.loadOrderedProducts()));
  totalPrice$ = this.totalPriceSubject.asObservable();

  public quantitySubject = new BehaviorSubject<number>(this.getTotalQuantity(this.loadOrderedProducts()));
  quantity$ = this.quantitySubject.asObservable();

  selectedProductOrders: SelectedProductOrderModel[] = [];

  constructor() {
    this.selectedProductOrders = this.loadOrderedProducts();
  }

  setTotalPrice(totalPrice: number): void {
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    this.totalPriceSubject.next(JSON.parse(<string>localStorage.getItem('totalPrice')));
  }

  setCartCount(quantity: number): void {
    localStorage.setItem('quantity', JSON.stringify(quantity));
    this.quantitySubject.next(JSON.parse(<string>localStorage.getItem('quantity')));
  }

  addToCart(product: Product) {
    debugger;
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
    this.setCartCount(this.getTotalQuantity(this.loadOrderedProducts()));
    this.setTotalPrice(this.getTotalPrice(this.loadOrderedProducts()));
  }


  getTotalPrice(selectedProducts: SelectedProductOrderModel[]): number {
    let totalPrice = 0;
    for (const orderedProduct of selectedProducts) {
      totalPrice += orderedProduct.quantity * orderedProduct.product!.price;
    }
    return totalPrice;
  }

  getTotalQuantity(selectedProducts: SelectedProductOrderModel[]): number {
    let q = 0;
    if(selectedProducts != null){
      for (const orderedProduct of selectedProducts) {
        q += orderedProduct.quantity;
      }
    }

    return q;
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
}
