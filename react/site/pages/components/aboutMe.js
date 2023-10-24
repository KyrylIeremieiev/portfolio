import React, { useState } from 'react';
import Image from 'next/image';
import AboutImg from '../../public/images/about.jpg'

const AboutMe = () =>{
    return(
        <section className='aboutMe' id='about'>
            {/* <article className='aboutMe__article'>
                <h2 className='aboutMe__title'>
                    About me:
                </h2>
                <p className='aboutMe__p'>
                    Hallo, mijn naam is Kyryl Ieremieiev. 
                    Ik ben 18 jaar oud en ik woon in Hoofddorp. 
                    Ik ben in 2022 begonnen aan code toen ik bij Media College Amsterdam Software development begon te studeren.
                    Sindsdien is code schrijven een passie van mij geworden.
                    Ik ben een grote fan van het leren van nieuwe dingen en hoop in de toekomst aan grote projecten mee te doen.
                </p>
            </article>
            <figure className='aboutMe__figure'>
                <div className='aboutMe__img' ></div>
            </figure> */}

            <article className='aboutMe__article'>
            <p className='aboutMe__title'>About Me</p>
            <p className='aboutMe__p'>
                    Hallo, mijn naam is Kyryl Ieremieiev. 
                    Ik ben 18 jaar oud en ik woon in Hoofddorp. 
                    Ik ben in 2022 begonnen aan code toen ik bij Media College Amsterdam Software development begon te studeren.
                    Sindsdien is code schrijven een passie van mij geworden.
                    Ik ben een grote fan van het leren van nieuwe dingen en hoop in de toekomst aan grote projecten mee te doen.
                </p>
            </article>
            <figure className='aboutMe__figure'>
                <div className='aboutMe__img' ></div>
            </figure>
        </section>
    );
}

export default AboutMe