import React from 'react'
import ButtonRound from "@/components/buttons/button_round";
import { describe } from 'node:test';

export default function TableProduct() {
const Products =[
    {
        product_name:"MacBook Pro 17",
        color:"Black",
        quantity:10,
        sell_price:"$2999",
        original_price:"$3999",
        describe:"This is a good product",
        subcate_id:"1",
        status_id:"1"
    },
    
] 

const Titles = ()=>{
    let titles = Object.keys(Products[0])
    let titleRename = titles.map((title,index) => {
        title = title.replace("_"," ")
        return title
    })
    return titleRename
}

    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            STT
                        </th>
                      { Titles().map((title,index) =>
                        (
                            <th key={index} scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                            {title}
                                <a title={title.toString()} href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
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
                    {Products.map((product,index)=> (
                            <tr key = {index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {index+1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {product.product_name}
                            </th>
                            <td className="px-6 py-4">
                               {product.color}
                            </td>
                            <td className="px-6 py-4">
                                {product.quantity}
                            </td>
                            <td className="px-6 py-4">
                                {product.sell_price}
                            </td>
                            <td className="px-6 py-4">
                                {product.original_price}
                            </td>
                            <td className="px-6 py-4">
                                {product.describe}
                            </td>
                            <td className="px-6 py-4">
                                {product.subcate_id}
                            </td>
                            <td className="px-6 py-4">
                                {product.status_id}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <ButtonRound label={"Edit"} fn={()=>{}}/>
                                <ButtonRound label={"Delete"} fn={()=>{}}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="m-5 flex flex-row justify-between">
                <ButtonRound label={"<- Previous"} fn={()=>{}}/>
                <ButtonRound label={"Next ->"} fn={()=>{}}/>
            </div>
        </div>

    )
}
