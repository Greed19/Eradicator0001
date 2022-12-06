import React from "react";
import styles from './project.module.scss';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import ContactBar from "./components/ContactBar/contactBar";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Experience from "./components/Experience/experience";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";

const Project01 = () => {

    // contenteditable = "true"
    return (
        <main className={styles.main_container}>
            <Navbar/> 
            <ContactBar/>
            <section className={styles.components_container}>
            <Home/>
            <About/>
            <Experience/>
            <Work/>
            <Contact/>
            <Footer/>        
            </section>
        </main>
    )
}
export default Project01;
