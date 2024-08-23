import React from 'react'
import ButtonRound from "@/components/buttons/button_round";

export default function Table() {
    const Titles: Array<string> = ["Product Name", "Brand Name", "Subcategory", "Price", "Status"]
    const Products = [
        {
            name: "MacBook Pro 17",
            brand: "Apple",
            subcategory: "Laptop",
            price: "$2999",
            status: "Active"
        },
        {
            name: "MacBook Pro 17",
            brand: "Apple",
            subcategory: "Laptop",
            price: "$2999",
            status: "Active"
        },
        {
            name: "MacBook Pro 17",
            brand: "Apple",
            subcategory: "Laptop",
            price: "$2999",
            status: "Active"
        },
        {
            name: "MacBook Pro 17",
            brand: "Apple",
            subcategory: "Laptop",
            price: "$2999",
            status: "Active"
        },

    ]

    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            STT
                        </th>
                        {Titles.map((title, index) =>
                        (
                            <th key={index} scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    {title}
                                    <a title={title} href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg></a>
                                </div>
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3 text-right">
                            Function
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index + 1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>
                            <td className="px-6 py-4">
                                {product.brand}
                            </td>
                            <td className="px-6 py-4">
                                {product.subcategory}
                            </td>
                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            <td className="px-6 py-4">
                                <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-800">
                                    {product.status}
                                </p>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <ButtonRound label={"Edit"} fn={() => { }} />
                                <ButtonRound label={"Delete"} fn={() => { }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="m-5 flex flex-row justify-between">
                <ButtonRound label={"<- Previous"} fn={() => { }} />
                <ButtonRound label={"Next ->"} fn={() => { }} />
            </div>
        </div>

    )
}
