import React, {useEffect} from "react";
import { useState, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import Link from 'next/link';
import SpinningPlanet from './planet';

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
            <button 
                className="header__button"
                id="header__button"
                onClick={()=>{

                }}
            >
                button
            </button>

            <header className="header">
                <ul className="header__nav">
                    <li className="header__navItem">Projects</li>
                    <li className="header__navItem">Skills</li>
                    <li className="header__navItem">About me</li>
                    <li className="header__navItem">CV</li>
                    <li className="header__navItem">Contact</li>
                </ul>
            </header>

            <main>
            <section className="welcome contentPart">
                <article className="welcome__wrapper">
                    <h1 className="welcome__title">Welcome to my Portfolio</h1>
                    <p className="welcome__text">My name is Kyryl Ieremieiev,</p>
                    <p className="welcome__text">I am an aspiring fullstack webdeveloper!</p>
                    <button className="welcome__button">CV</button>
                </article>
                <div className="App">
                    <SpinningPlanet/>
                </div>
            </section>
            
            <section className="projects contentPart solar">
                <h2 className="projects__title">Projects</h2>
                <ul className="projects__list">
                    <li className="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                    <li class="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                    <li class="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                    <li class="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                    <li class="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                    <li class="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                    <li class="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                    <li class="projects__item">
                        <figcaption className="projects__name">Test Project 1</figcaption>
                    </li>
                </ul>
            </section>
    
            <section className="about contentPart lunar">
                <article className="about__profile">
                    <h2 className="about__title">About Me</h2>
                    <section className="about__wrapper">
                        <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi cum hic quas voluptatem dicta, porro aliquid incidunt obcaecati rem expedita quam sint illum non laborum veritatis ducimus voluptatum sed dolore.
                        Consequatur ipsa, quis accusamus est earum aliquam, vel laboriosam eos aut, esse quasi accusantium eius pariatur fugiat. Sint deserunt fugiat quisquam soluta, nisi mollitia omnis dolore sit quibusdam dicta vel!</p>
                    </section>
                </article>
            </section>
    
            <section className="contact contentPart">
            </section>
            </main>    
        </section>

        
        );
}
