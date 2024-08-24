import { Status } from "@/types/status";
import { NextResponse } from "next/server";

export async function GET() {
    // Mô phỏng lấy dữ liệu từ database hoặc API bên ngoài
    const list:Status[] = [
        {
            id: 1,
            status_name: "Active",
        },
        {
            id: 2,
            status_name: "Inactive",
        },
        {
            id: 3,
            status_name: "Pending",
        },
        {
            id: 4,
            status_name: "Deleted",
        },
    ]
    // Trả về dữ liệu dưới dạng JSON
    return NextResponse.json(list);
  }