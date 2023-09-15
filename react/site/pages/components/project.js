import React, { useState } from 'react';
import Link from 'next/link';
import loopbaanAnkers from '../../src/images/loopbaanAnkers.webp'

const Project = () =>{
    return(
        <section className="projects contentPart">
            <h2 className='projects__title'>My Projects</h2>
            <div className='projects__wrapper'>
                <article className='projects__project'>
                    <img className='project__image' src={loopbaanAnkers}></img>
                    <h3 className='project__title'>Loopbaan ankers quizz</h3>
                    <p className='project__dis'>Vind uit wat jouw loopbaan ankers zijn!</p>
                    <a className='project__link'>Naar de project toe! -{'>'}</a>
                </article>
                <article className='projects__project'>
                    <img className='project__image' src={loopbaanAnkers}></img>
                    <h3 className='project__title'>Yubtub</h3>
                    <p className='project__dis'>Kijk video's via Yubtub!</p>
                    <a className='project__link'>Naar de project toe! -{'>'}</a>
                </article>
                <article className='projects__project'>
                    <img className='project__image' src={loopbaanAnkers}></img>
                    <h3 className='project__title'>Git Avatar Store</h3>
                    <p className='project__dis'>Koop je eigen git avatar</p>
                    <a className='project__link'>Naar de project toe! -{'>'}</a>
                </article>
            </div>
        </section>
    );
}

export default Project
