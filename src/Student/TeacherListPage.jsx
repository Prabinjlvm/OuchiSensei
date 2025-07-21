import react from "react";
import TeacherList from "./Components/TeacherList";
import StFooter from "./Components/StFooter";
import Navigation from "./Components/StudentHeader";

export default function TeacherListPage(){
    return(
        <>
        <Navigation/>
        <TeacherList/>
        <StFooter/>
        </>
    )
}

