export interface Product{
  id: number;
  name: string;
  productCode: string;
  variant?: string;
  price: number;
  availability: number;
  description: string;
  skuCode: string;
  genderId?: number;
  brandId?: number;
  secondaryCategoryId?: number;


}
