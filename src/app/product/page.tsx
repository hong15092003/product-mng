"use client";
import React, { useEffect, useState } from 'react';

import InputField from "@/components/inputs/input_field";
import ButtonRound from "@/components/buttons/button_round";
import Table from "@/components/tables/table";
import Add from "@/app/product/add";

import { Product } from "@/types/product";



const key: Array<string> = ["id", 'product_name', 'color', 'quantity', 'sell_price', 'origin_price'];



// ...

export default function Page() {
    const [list, setList] = useState<Product[]>([]);
    // ...
    useEffect(() => {
        const fetchList = async () => {
            const response = await fetch('/api/products');
            const jsonList = await response.json();
            setList(jsonList);
        };

        fetchList();

    }, []);

    const [productSearch, setProductSearch] = useState("");
    const [priceSearch, setPriceSearch] = useState("");



    const handleProductSearchChange = (event: HTMLInputElement) => {
        setProductSearch(event.value);
    };

    const handlePriceSearchChange = (event: HTMLInputElement) => {
        setPriceSearch(event.value);
    };

    const search = () => {
        return list.filter((product) => {
            const productName = product.product_name.toLowerCase();
            const productPrice = product.sell_price.toString().toLowerCase();
            const productSearchKey = productSearch.toLowerCase();
            const priceSearchKey = priceSearch.toLowerCase();
            return (
                productName.includes(productSearchKey) &&
                productPrice.includes(priceSearchKey)
            );
        })

    }


    return (
        <>
            <div className="flex flex-col gap-5 p-10 ">
                <h1 className=" text-3xl font-bold mb-3">Product</h1>
                <div className="flex flex-row gap-4 items-end">
                    <InputField label="Product Name" fn={handleProductSearchChange} />
                    <InputField label="Price" type={'number'} fn={handlePriceSearchChange} />

                </div>

                <div className="mt-10 flex gap-5">
                    <ButtonRound label={"Add Product"} fn={() => {
                    }} />
                </div>
                <Table list={search()} titles={key} />
            </div>
            {/* <div tabIndex={-1} className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
                <Add />
            </div> */}
        </>

    )
}