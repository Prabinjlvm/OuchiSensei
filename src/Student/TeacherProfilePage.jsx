import react from "react";
import TeacherProfile from "./Components/TeacherProfile";
import Navigation from "./Components/StudentHeader";
import StFooter from "./Components/StFooter";



export default function TeacherProfilePage(){
    return(
        <>
        <Navigation/>
        <TeacherProfile/>
        <StFooter/>
        </>
    )
}
