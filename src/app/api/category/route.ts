import { Category } from "@/types/category";
import { NextResponse } from "next/server";

export async function GET() {
    // Mô phỏng lấy dữ liệu từ database hoặc API bên ngoài

    const list: Category[] = [
        {
            id: 1,
            cate_code: "C001",
            cate_name: "Laptop",
        },
        {
            id: 1,
            cate_code: "C002",
            cate_name: "Phone",
        },
        {
            id: 1,
            cate_code: "C003",
            cate_name: "Tablet",
        },
    ]
    // Trả về dữ liệu dưới dạng JSON
    return NextResponse.json(list);
}