import { Button } from "../ui/button";

function AdminHeader(setOpen){
    return <header className="flex items-center justify-between px-4">
        <button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 justify-end">
            <button className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow'>
            <LogOut />
            Logout
            </button>
        </div>
    </header>
        
    

}
export default AdminHeader;