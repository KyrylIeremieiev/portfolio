import React, { useState } from 'react';

const AboutMe = () =>{
    return(
        <section className='aboutMe'>
            <article className='aboutMe__article'>
                <h2 className='aboutMe__title'>
                    About me:
                </h2>
                <p className='aboutMe__p'>
                    Hallo, mijn naam is Kyryl Ieremieiev. 
                    Ik ben 18 jaar oud en ik woon in Hoofddorp. 
                    Ik ben in 2022 begonnen aan aan code toen ik bij Media College Amsterdam Software development begon te studeren.
                    Sinds dan is code schrijven een passie van mij geworden.
                    Ik ben een grote fan van het leren van nieuwe dingen en hoop in de toekomst aan grote projecten mee te doen.
                </p>
            </article>
            <figure className='aboutMe__figure'>
                <img></img>
            </figure>
        </section>
    );
}

export default AboutMe