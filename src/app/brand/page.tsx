"use client";
import { useEffect, useState } from 'react';

import InputField from "@/components/inputs/input_field";
import ButtonRound from "@/components/buttons/button_round";
import Table from "@/components/tables/table";
import { Brand } from "@/types/brand";
import { title } from 'process';




const titles = ['id', 'brand_name']

export default function Page() {
    const [brandSearch, setBrandSearch] = useState<string>("");
    const [list, setList] = useState<Brand[]>([]);
    // ...
    useEffect(() => {
        const fetchList = async () => {
            const response = await fetch('/api/brand');
            const jsonList = await response.json();
            setList(jsonList);
        };

        fetchList();

    }, []);

    const handleSearchChange = (event: HTMLInputElement) => {
        setBrandSearch(event.value);
    };

    const search = () => {
        return list.filter((brand) => {
            const brandName = brand.brand_name.toLowerCase();
            const brandSearchKey = brandSearch.toLowerCase();
            return (
                brandName.includes(brandSearchKey)
            );
        })


    }


    return (
        <>
            <div className="flex flex-col gap-5 p-10 ">
                <h1 className="text-3xl font-bold mb-3">Brand</h1>
                <div className="flex flex-row gap-4 items-end">
                    <InputField label="Brand Name" fn={handleSearchChange} />

                </div>

                <div className="mt-10 flex gap-5">
                    <ButtonRound label={"Add Brand"} fn={() => {
                    }} />
                </div>
                <Table list={search()} titles={titles} />
            </div>
            {/*<div tabIndex={-1} className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">*/}
            {/*    <Add/>*/}
            {/*</div>*/}
        </>

    )
}