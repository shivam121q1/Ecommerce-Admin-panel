import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return(
    <Layout >
        test
    </Layout>
  )
  
}
