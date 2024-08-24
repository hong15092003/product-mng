"use client";

import InputField from "@/components/inputs/input_field";
import ButtonRound from "@/components/buttons/button_round";
import Table from "@/components/tables/table";
import Add from "@/app/product/add";
import { Status } from "@/types/status";
import { useEffect, useState } from "react";




const titles = ['id','status_name']

export default function Page() {
    const [statusSearch, setStatusSearch] = useState<string>("");
    const [list, setList] = useState<Status[]>([]);
    // ...
    useEffect(() => {
        const fetchList = async () => {
            const response = await fetch('/api/status');
            const jsonList = await response.json();
            setList(jsonList);
        };

        fetchList();

    }, []);

    const handleSearchChange = (event: HTMLInputElement) => {
        setStatusSearch(event.value);
    };

    const search = () => {
        return list.filter((status) => {
            const statusName = status.status_name.toLowerCase();
            const statusSearchKey = statusSearch.toLowerCase();
            return (
                statusName.includes(statusSearchKey)
            );
        })
    }

    return (
        <>
            <div className="flex flex-col gap-5 p-10 ">
                <h1 className=" text-3xl font-bold mb-3">Status</h1>
                <div className="flex flex-row gap-4 items-end">
                    <InputField label="Status Name" fn={handleSearchChange} />
                    <ButtonRound label="search" fn={() => {
                    }} />

                </div>

                <div className="mt-10 flex gap-5">
                    <ButtonRound label={"Add Status"} fn={() => {
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