import React, { useEffect, useState } from 'react'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";

const Start = () => {

    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
        fetch("/resumeData.json")
            .then((res) => res.json())
            .then((data) => {
                setResumeData(data);
            });
    }, []);

    return (
        <>
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Portfolio data={resumeData.portfolio} />
            <Testimonials data={resumeData.testimonials} />
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
        </>
    )
}

export default Start
