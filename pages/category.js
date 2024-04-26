import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Category() {

   const [name,setName] = useState("");
   const [categories,setCategories]= useState([]);
   const [parentCategory,setParentCategory] = useState("");

   async function saveCategory(ev){
    ev.preventDefault();
    console.log(name,parentCategory)
    
    await axios.post('/api/categories',{name,parentCategory});
    setName('');
    fetchCategories();
   }

   function fetchCategories(){
    axios.get('/api/categories').then(result=>{
      setCategories(result.data);
    })

   }

   useEffect(()=>{
    fetchCategories();
   },[])

  return (
    <Layout>
      <h1>Add New Category</h1>
      <form className="flex gap-4">
        <div className="flex gap-1 flex-grow">
          <input
            type="text"
            placeholder={"Category name"}
            onChange={(ev) => setName(ev.target.value)}
            value={name}
          />
          <select
            onChange={(ev) => setParentCategory(ev.target.value)}
            value={parentCategory}
          >
            <option value="">No parent category</option>
            {categories.length > 0 &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <button onClick={saveCategory} className="btn-primary w-2/3 ">Save</button>
      </form>

       <table className="basic">
        <thead>
          <tr>
            <td>Category</td>
            <td>Parent Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.length >0 && categories.map(category=>(
            <tr key={category._id}>
              <td>{category.name}</td>
              {/* {console.log(category)} */}
              <td>{category?.parent?.name}</td>
              <td>
                <Link href={"/category"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                  Edit
                </Link>
                <Link href={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  Delete
                </Link>
              </td>
            </tr>
          )) }
        </tbody>
       </table>
    </Layout>
  );
}
