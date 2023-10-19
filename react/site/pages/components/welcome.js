import React, { useState } from 'react';
import SpinningPlanet from './planet';

const Welcome = () =>{
    return(
        <section className="welcome contentPart section">
            <article className="welcome__wrapper">
                <h1 className="welcome__title">Welcome to my Portfolio</h1>
                <p className="welcome__text">Mijn naam is Kyryl Ieremieiev,</p>
                <p className="welcome__text">Ik ben een ambitieuze fullstack webdeveloper!</p>
            </article>
            <div className="Planet">
                <SpinningPlanet/>
            </div>
        </section>
    );
}

export default Welcome
