import React, { useState, useEffect, use } from 'react';
import ButtonRound from "@/components/buttons/button_round";


export default function Table({ list, titles }: { list: Array<any>, titles: Array<string> }) {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;


    const titlesRemap = () => {
        return titles.map((title, index) => {

            return title.replace('_', ' ')


        })
    }


    const sortList = () => {
        return list
    }





    const handleNextPage = () => {
        if (currentPage < Math.ceil(sortList().length / rowsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const selectedProducts = sortList().slice(startIndex, startIndex + rowsPerPage);


    return (
        <>
            <div className="relative overflow-x-auto shadow-md rounded-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {titlesRemap().map((title, index) => (
                                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex flex-row">
                                        {title}
                                    </div>
                                </th>
                            ))}
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {selectedProducts.length === 0 && (
                            <tr>
                                <td colSpan={titles.length + 1} className="text-center py-4">No data found</td>
                            </tr>
                        )}
                        {selectedProducts.map((product, index) => (
                            <tr key={index}>
                                {titles.map((title, index) => (
                                    <td key={index} className={`${title.includes('name') && 'text-white'} px-6 py-4 `}>
                                        {(product as any)[title]}{title.includes('price') && '$'}
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
