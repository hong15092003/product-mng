import React, { useState } from 'react';
import ButtonRound from "@/components/buttons/button_round";


export default function Table() {
    const products = [
        {
            id: 1,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 2,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 3,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 4,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 5,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 6,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 7,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 8,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 9,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 10,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 11,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 12,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 13,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 14,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },
        {
            id: 15,
            product_name: "MacBook Pro 17",
            color: "Black",
            quantity: 10,
            sell_price: "$2999",
            original_price: "$3999",
            describe: "This is a good product",
            subcate_id: "1",
            status_id: "1"
        },


    ]

    const key: Array<string> = ["id", 'product_name', 'color', 'quantity', 'sell_price', 'original_price'];
    const titles = () => {
        return key.map((title, index) => {

            return title.replace('_', ' ')


        })
    }

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const handleNextPage = () => {
        if (currentPage < Math.ceil(products.length / rowsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedProducts = products.slice(startIndex, startIndex + rowsPerPage);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md rounded-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {titles().map((title, index) => (
                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {title}
                                </th>
                            ))}
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {selectedProducts.map((product, index) => (
                            <tr key={index}>
                                {key.map((title, index) => (
                                    <td key={index} className={`${title.includes('name') && 'text-white'} px-6 py-4 `}>
                                        {(product as any)[title]}
                                    </td>
                                ))}
                                <td className="px-6 py-4 text-right">
                                    <ButtonRound label={"Detail"} fn={() => {
                                        console.log(product)
                                    }} />
                                    <ButtonRound label={"Edit"} fn={() => { }} />
                                    <ButtonRound label={"Delete"} fn={() => { }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row justify-between items-center">
                <ButtonRound label={"<- Previous"} fn={handlePreviousPage} />
                <span className="text-gray-400 cursor-default">Page {currentPage}</span>
                <ButtonRound label={"Next ->"} fn={handleNextPage} />
            </div>
        </>
    );
}
