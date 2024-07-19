import { Link, useSearchParams } from "react-router-dom";
import { Info, Plus } from "phosphor-react";


import { Header } from "../components/header/header";
import Footer from "../components/footer/footer";
import Filter from "../components/filtre/filtre";




export const Users = () => {
  return (
    <>
    <Header/>
    <Filter />
    <Footer/>
    </>
  )};


