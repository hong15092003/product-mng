"use client";
import InputField from "@/components/inputs/input_field";
import InputDropdown from "@/components/inputs/input_dropdown";
import ButtonRound from "@/components/buttons/button_round";
import Table from "@/components/tables/table";
import Add from "@/app/product/add";




export default function Page() {

    return (
        <>
            <div className="flex flex-col gap-5 p-10 ">
                <h1 className=" text-3xl font-bold mb-3">Dashboard</h1>
                <div className="flex flex-row gap-4 items-end">
                    <InputField label="Product Name" fn={() => {
                    }} />
                    <InputField label="Price" fn={() => {
                    }} />
                    <InputDropdown label="Brand" />
                    <InputDropdown label="Category" />
                    <InputDropdown label="Status" />
                    <ButtonRound label="search" fn={() => {
                    }} />

                </div>

                <div className="mt-10 flex gap-5">
                    <ButtonRound label={"Add Product"} fn={() => {
                    }} />
                    <ButtonRound label={"Add Brand"} fn={() => {
                    }} />
                    <ButtonRound label={"Add Category"} fn={() => {
                    }} />
                    <ButtonRound label={"Add Status"} fn={() => {
                    }} />
                </div>
                {/* <Table /> */}
            </div>
            {/*<div tabIndex={-1} className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">*/}
            {/*    <Add/>*/}
            {/*</div>*/}
        </>

    )
}