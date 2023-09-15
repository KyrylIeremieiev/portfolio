import React, {useEffect} from "react";
import { useState, useRef } from "react";
import Link from 'next/link';
import SpinningPlanet from './components/planet';
import MyNavigation from './components/MyNavigation'
import Welcome from "./components/welcome";
import Project from "./components/project";
import AboutMe from "./components/aboutMe";


export default function Home(){
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const submit = () =>{
        fetch('http://localhost:8080/insert', {
        method: 'POST',
        mode: 'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({'name': user, 'expansion':pass})
        });
    }
    return(
        <section className="site">
            <MyNavigation></MyNavigation>
            <main>
                <Welcome></Welcome>
                <Project></Project>
                <AboutMe></AboutMe>
            </main>    
        </section>

        
        );
}
