import { Brand } from "@/types/brand";
import { NextResponse } from "next/server";

export async function GET() {
    // Mô phỏng lấy dữ liệu từ database hoặc API bên ngoài
    const list: Brand[] = [
        {
            id: 1,
            brand_name: "Apple",
        },
        {
            id: 2,
            brand_name: "Samsung",
        },
        {
            id: 3,
            brand_name: "Xiaomi",
        },
        {
            id: 4,
            brand_name: "Oppo",
        },
        {
            id: 5,
            brand_name: "Vivo",
        },
        {
            id: 6,
            brand_name: "Nokia",
        },
        {
            id: 7,
            brand_name: "Sony",
        },
        {
            id: 8,
            brand_name: "LG",
        },
        {
            id: 9,
            brand_name: "HTC",
        },
        {
            id: 10,
            brand_name: "Asus",
        },
        {
            id: 11,
            brand_name: "HP",
        },
        {
            id: 12,
            brand_name: "Dell",
        },
        {
            id: 13,
            brand_name: "Lenovo",
        },
        {
            id: 14,
            brand_name: "Acer",
        },
        {
            id: 15,
            brand_name: "MSI",
        },
    ]
    // Trả về dữ liệu dưới dạng JSON
    return NextResponse.json(list);
  }