export interface Product {
  id: number; // Primary Key, auto-incrementing
  subcate_id: number; // Foreign Key referencing sub_category.id
  product_name: string; // varchar(100)
  color: string; // varchar(50)
  quantity: number;
  sell_price: number; // double
  origin_price: number; // double
  description: string; // varchar(1000)
  status_id: number; // Foreign Key referencing status.id
}
