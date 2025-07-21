import react from "react";
import Navigation from "./Components/StudentHeader";
import TermsOfUse from "./Components/Terms";
import StFooter from "./Components/StFooter";
import PrivacyPolicy from "./Components/Privacy";


export default function PrivacyPolicyPage(){



    return(
        <>
        <Navigation/>
        <PrivacyPolicy/>
        <StFooter/>
        </>
    )
}