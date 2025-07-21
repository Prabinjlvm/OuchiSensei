import react from "react";
import Navigation from "./Components/StudentHeader";
import CompanyProfile from "./Components/company";
import StFooter from "./Components/StFooter";



export default function CompanyProfilePage(){


    return(
        <>
        <Navigation/>
        <CompanyProfile/>
        <StFooter/>
        </>
    )
}