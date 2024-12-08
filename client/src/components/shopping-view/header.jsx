import { logoutUser } from "@/store/auth-slice";
import { useDispatch } from "react-redux";

function ShoppingHeader(){
  
    const dispatch = useDispatch();

   
    function logout() {
    console.log("log out success");
    dispatch(logoutUser())
    

   }
    return(
        <div> 
            <button onClick={logout}>
                logout
            </button>
            
            
            Shopping view Header</div>
    );
}
export default ShoppingHeader;