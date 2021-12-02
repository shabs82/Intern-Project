import {Product} from "../../product/shared/model/product";

export class SelectedProductOrderModel {
  id?: number;
  productId: number;
  product: Product;
  quantity: number;
  orderId?: number;
  userId: number;
  subTotalPrice: number;
}
