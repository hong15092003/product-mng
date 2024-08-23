import InputField from "@/components/inputs/input_field";
import InputDropdown from "@/components/inputs/input_dropdown";
import ButtonRound from "@/components/buttons/button_round";
import TableProduct from "@/components/tables/table_product";


function handleClick() {
    console.log('Button clicked');
}
export default function Index(){
    return(
        <div className="flex flex-col gap-5 p-10">
            <h1 className="text-2xl font-bold text-center mb-5">Welcome to the Home Page Product</h1>
            <div className="flex flex-row gap-4 items-end">
                <InputField label="Product Name" fn={() => {
                }}/>
                <InputField label="Price" fn={() => {
                }}/>
                <InputDropdown label="Brand"/>
                <InputDropdown label="Category"/>
                <InputDropdown label="Status"/>
                <ButtonRound label="search" fn={handleClick}/>
            </div>

            <div className="mt-20 flex">
                <ButtonRound label={"Add Product"} fn={() => {
                }}/>
            </div>

            <TableProduct/>
        </div>
    )
}