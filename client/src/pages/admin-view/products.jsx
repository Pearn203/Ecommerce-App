import { Fragment,useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/components/config";

const initialFormData = {
    image: null,
    title: '',
    description : '',
    category: '',
    brand: '',
    price: "",
    salePrice: '',
    totalStock:''
}
function AdminProducts(){
    const [openCreateProductsDialog,setOpenCreateProdcutsDialog ] = useState(flase)
    const [formData,setFormData] = useState(initialFormData)


function onSubmit() {

}
    return <Fragment>
        <div className="mb-5  w-full flex justify-end">
        <Button onClick={()=> setOpenCreateProdcutsDialog(true)}> Add new Product</Button>
        </div>
       <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
        <Sheet open={openCreateProductsDialog} onOpenChange={()=> {
            setOpenCreateProdcutsDialog(false)
        }}>
            <SheetContent side='right' className="overflow-auto"> 
                <SheetHeader>
                    <SheetTitle>Add New Product</SheetTitle>
                </SheetHeader>
                <div className="py-6">
                    <CommonForm 
                    onSubmit={onSubmit} 
                    formData={formData} 
                    setFormData={setFormData} 
                    buttonText='Add' 
                    formControls={addProductFormElements}></CommonForm>
                </div>
            </SheetContent>
        </Sheet>
    </Fragment>
}
export default AdminProducts;