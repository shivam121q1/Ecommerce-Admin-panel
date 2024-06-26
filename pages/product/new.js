import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export default function New() {

  return(
    <Layout>
      <h1>New Product</h1>
      <ProductForm />
    </Layout>
  )
  
}
