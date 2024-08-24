import { Product } from "@/types/product";
import { NextResponse } from "next/server";



export async function GET() {
    // Mô phỏng lấy dữ liệu từ database hoặc API bên ngoài
    const list: Product[] = [
        {
            id: 1,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 2,
            product_name: "MacBook Pro 16",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 3,
            product_name: "MacBook Pro 18",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 16,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 5,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 6,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 7,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 8,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 9,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 10,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 11,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 12,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 13,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 14,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
        {
            id: 15,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: 2999,
            origin_price: 3999,
            description: "This is a good product",
            subcate_id: 1,
            status_id: 1
        },
    
    
    ]
  
    // Trả về dữ liệu dưới dạng JSON
    return NextResponse.json(list);
  }

