import { useState } from "react";
import Layout from "./Layout";
import { useRouter } from "next/router";
import axios from "axios";

export default function ProductForm({
    _id,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice
}) {
  const [title, seTitle] = useState(existingTitle ||"");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [image, setImage] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);

  const router = useRouter();

  const SaveData = async (ev) => {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
    };
    if(_id){
        await axios.put(`/api/product`,{...data,_id});
        setGoToProducts(true);
        
    }else{

        await axios.post("/api/product", data);
        setGoToProducts(true);
        
    }
    
  };
  if (goToProducts) {
    router.push("/product");
  }

  return (
    
      <div className="ml-2 flex flex-col ">
        <form onSubmit={SaveData} className="flex flex-col gap-6">
        
          <label>Product Name</label>
          <input
            type="text"
            placeholder="product name"
            value={title}
            onChange={(ev) => seTitle(ev.target.value)}
          ></input>
          <label>Description</label>
          <textarea
            placeholder="description"
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          ></textarea>

          {/* <label className="">Upload Image</label>
        <input type="file"></input> */}

          <label>Price(in Rupees)</label>
          <input
            placeholder="Enter Price"
            type="text"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          ></input>

          <button type="submit" className="btn-primary mt-6">
            Save
          </button>
        </form>
      </div>
   
  );
}
