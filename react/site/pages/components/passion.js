import React from 'react'

const Passion = () =>{
    return(
        <section className='passion'>
            <h2 className='passion__title'>My Hobbies</h2>
            <div className='passion__wrapper'>
                <article className='passion__card coding'>
                    <h3 className='passion__title'>Coding/Programming</h3>
                    <p className='passion__dis'>I like coding, its a way for me to constantly learn new things.</p>
                </article>
                <article className='passion__card bjj'>
                    <h3 className='passion__title'>Brazilian Jui-Jutsu</h3>
                    <p className='passion__dis'>For a fullcontact sport, its extremely save. You also learn something new each lesson you attend!</p>
                </article>
                <article className='passion__card poe'>
                    <h3 className='passion__title'>RPG's</h3>
                    <p className='passion__dis'>I like to play rpgs whenever I'm not busy.</p>
                </article>  
            </div>
            
        </section>
    );
}

export default Passion