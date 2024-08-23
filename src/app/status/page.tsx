import InputField from "@/components/inputs/input_field";
import InputDropdown from "@/components/inputs/input_dropdown";
import ButtonRound from "@/components/buttons/button_round";
import TableProduct from "@/components/tables/table_product";
import Add from "@/app/product/add";




export default function Page() {

    return (
        <>
            <div className="flex flex-col gap-5 p-10 ">
                <h1 className=" text-3xl font-bold mb-3">Status</h1>
                <div className="flex flex-row gap-4 items-end">
                    <InputField label="Status Name" fn={() => {
                    }} />
                    <ButtonRound label="search" fn={() => {
                    }} />

                </div>

                <div className="mt-10 flex gap-5">
                    <ButtonRound label={"Add Status"} fn={() => {
                    }} />
                </div>
                <TableProduct />
            </div>
            {/*<div tabIndex={-1} className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">*/}
            {/*    <Add/>*/}
            {/*</div>*/}
        </>

    )
}