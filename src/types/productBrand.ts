export interface ProductBrand {
  product_id: number; // Foreign Key referencing product.id
  brand_id: number;  // Foreign Key referencing brand.id 
}