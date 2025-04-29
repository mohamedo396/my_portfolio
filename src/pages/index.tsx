import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Index=()=>{
    useEffect(()=>{
        if(window.location.hash){
            const id=window.location.hash.substring(1);
            const element=document.getElementById(id);
            if(element){
                element.scrollIntoView({behavior:'smooth'});
            }
        }
        document.title="Mohamed El Amrani | Full Stack Developer";

    },[]);


    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Hero/>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Index;