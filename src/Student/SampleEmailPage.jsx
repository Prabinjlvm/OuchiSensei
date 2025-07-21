import react, { useEffect, useState } from "react";
import Navigation from "./Components/StudentHeader";
import StFooter from "./Components/StFooter";
import SampleEmail from "./Components/SampleEmail";



export default function SampleEmailPage(){

    return  (
        <>
        <Navigation/>
        <SampleEmail/>
        <StFooter/>
        </>
    )
}