import React, {useEffect} from "react";
import { useState, useRef } from "react";
import MyNavigation from './components/MyNavigation'
import Welcome from "./components/welcome";
import Project from "./components/project";
import AboutMe from "./components/aboutMe";
import { Helmet } from 'react-helmet';

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
        <div>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
            </Helmet>
            <section className="site" style={{ fontFamily: 'Ubuntu, sans-serif'}}>
                <MyNavigation></MyNavigation>
                <main>
                    <Welcome></Welcome>
                    <Project></Project>
                    <AboutMe></AboutMe>
                </main>    
            </section>
        </div>
        
    );
}
