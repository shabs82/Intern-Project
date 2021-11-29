import { Injectable } from '@angular/core';
import {Product} from "../../product/shared/model/product";
import {SelectedProductOrderModel} from "./selected-product-order.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

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

  removeFromCart(id: number | undefined) {
    localStorage.removeItem('selectedProductOrders');
  }
}
