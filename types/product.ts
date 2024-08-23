export interface Product {
    id: bigint; // Primary Key, auto-incrementing
    subcate_id: bigint; // Foreign Key referencing sub_category.id
    produce_name: string; // varchar(100)
    color: string; // varchar(50)
    quantity: bigint; 
    sell_price: number; // double
    origin_price: number; // double
    description: string; // varchar(1000)
    status_id: bigint; // Foreign Key referencing status.id
  }
  