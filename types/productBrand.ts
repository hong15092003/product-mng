export interface ProductBrand {
    product_id: bigint; // Foreign Key referencing product.id
    brand_id: bigint;  // Foreign Key referencing brand.id 
  }