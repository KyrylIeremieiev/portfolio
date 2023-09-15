import React, { useState } from 'react';
import SpinningPlanet from './planet';

const Welcome = () =>{
    return(
        <section className="welcome contentPart">
            <article className="welcome__wrapper">
                <h1 className="welcome__title">Welcome to my Portfolio</h1>
                <p className="welcome__text">My name is Kyryl Ieremieiev,</p>
                <p className="welcome__text">I am an aspiring fullstack webdeveloper!</p>
                <button className="welcome__button">CV</button>
            </article>
            <div className="Planet">
                <SpinningPlanet/>
            </div>
        </section>
    );
}

export default Welcome
