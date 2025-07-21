import React, { useEffect, useState } from 'react';
import Navigation from "./Components/StudentHeader";
import CourseFlow from "./Components/CourseFlow";
import StFooter from "./Components/StFooter";



export default function CourseFlowPage() {

    return (
        <>
            <Navigation />
            <CourseFlow />
            <StFooter />
        </>
    )
}