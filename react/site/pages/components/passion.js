import React from 'react'
import Image from 'next/image';
import Bjj from '../../src/images/bjj.jpeg'
import coding from '../../src/images/codingStockImg.jpeg'
import poe from '../../src/images/poeImg.webp'

const Passion = () =>{
    return(
        <section className='passion'>
            <h2 className='passion__title'>My Hobbies</h2>
            <div className='passion__wrapper'>
                <article className='passion__card'>
                    <div className='passion__banner'><Image src={ coding }></Image></div>
                    <h3 className='passion__title'>Coding/Programming</h3>
                    <p className='passion__dis'>I like coding, its a way for me to constantly learn new things.</p>
                </article>
                <article className='passion__card'>
                    <div className='passion__banner'><Image src={ Bjj }></Image></div>
                    <h3 className='passion__title'>Brazilian Jui-Jutsu</h3>
                    <p className='passion__dis'>For a fullcontact sport, its extremely save. You also learn something new each lesson you attend!</p>
                </article>
                <article className='passion__card'>
                    <div className='passion__banner'><Image src={ poe }></Image></div>
                    <h3 className='passion__title'>RPG's</h3>
                    <p className='passion__dis'>I like to play rpgs whenever I'm not busy.</p>
                </article>  
            </div>
            
        </section>
    );
}

export default Passion