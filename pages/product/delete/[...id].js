import axios from "axios";
import { useRouter } from "next/router";

export default function Delete(){

       const router = useRouter();

       const {id} = router.query;

       const deleteProduct= async()=>{

        await axios.delete(`/api/product?id=${id}`)
        router.push("/product")

       }


       function goBack(){
        router.push("/product");
       }
    return(
        <div>
            <h1>Do you really want to delete ?</h1>
            <button onClick={deleteProduct}>Yes</button>
            <button onClick={goBack}>No</button>
        </div>
    )
}