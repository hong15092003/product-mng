export interface SubCategory {
  id: number; // Primary Key, auto-incrementing
  sub_cate_code: string; // varchar(20)
  sub_cate_name: string; // varchar(50)
  cate_id: number; // Foreign Key referencing category.id
}