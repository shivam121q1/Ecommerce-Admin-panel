import clientPromise from "../../lib/db";
import mongoose from "mongoose";

import { mongooseConnect } from "../../lib/mongoose";
const Product = require("../../models/Product");

export default async function handle(req, res) {
  try {
    console.log(req.method);
    const { method } = req;

    await mongooseConnect();

    if (method === "POST") {
     
        const { title, description, price } = req.body;
        const ProductDoc = await Product.create({
          title,
          description,
          price,
        });

        res.status(200).json({
          success: true,
          message: "Product Added Successfully",
          ProductDoc,
        });
      }
    
    if (method === "GET") {
      console.log(req.query?.id);
      if (req.query?.id) {
        res.json(await Product.findById({ _id: req.query.id }));
      } else {
        const ProductDoc = await Product.find();
        console.log(ProductDoc);

        if (!ProductDoc) {
          res.status(403).json({
            success: false,
            message: "Not able to give data",
          });
        }

        res.status(200).json({
          success: true,
          message: "Product fetched sucessfully",
          ProductDoc,
          // data:Product.find()
        });
      }
    }
    if(method=== "PUT"){
        const {title,description,price,_id} = req.body;

        await Product.updateOne({_id},{title,description,price})

        res.json(true);
    }
    if (method === "DELETE") {
        console.log(req.query?.id);
        if (req.query?.id) {
          res.json(await Product.findByIdAndDelete({ _id: req.query.id }));
        } 
  
         
      }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Not able to fetch data",
    });

    console.log(error);
  }
}
