"use client";
import InputField from "@/components/inputs/input_field";
import InputDropdown from "@/components/inputs/input_dropdown";
import ButtonRound from "@/components/buttons/button_round";
import Table from "@/components/tables/table";
import Add from "@/app/product/add";
import { Category } from "@/types/category";
import { useEffect, useState } from "react";


const titles = ['id','cate_code','cate_name']


export default function Page() {

    const [cateSearch, setCateSearch] = useState<string>("");
    const [list, setList] = useState<Category[]>([]);
    // ...
    useEffect(() => {
        const fetchList = async () => {
            const response = await fetch('/api/category');
            const jsonList = await response.json();
            setList(jsonList);
        };

        fetchList();

    }, []);


    const handleSearchChange = (event: HTMLInputElement) => {
        setCateSearch(event.value);
    };

    const search = () => {
        return list.filter((cate) => {
            const cateName = cate.cate_name.toLowerCase();
            const cateSearchKey = cateSearch.toLowerCase();
            return (
                cateName.includes(cateSearchKey)
            );
        })
    }

    return (
        <>
            <div className="flex flex-col gap-5 p-10 ">
                <h1 className=" text-3xl font-bold mb-3">Category</h1>
                <div className="flex flex-row gap-4 items-end">
                    <InputField label="Category Name" fn={handleSearchChange} />
                    <ButtonRound label="search" fn={() => {
                    }} />

                </div>

                <div className="mt-10 flex gap-5">
                    <ButtonRound label={"Add Category"} fn={() => {
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