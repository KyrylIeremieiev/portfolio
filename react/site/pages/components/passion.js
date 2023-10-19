import React from 'react'

const Passion = () =>{
    return(
        <section className='passion contentPart'>
            <h2 className='passion__title'>My Hobbies</h2>
            <div className='passion__wrapper'>
                <article className='passion__card coding'>
                    <h3 className='passion__cardTitle'>Coding/Programming</h3>
                    <p className='passion__dis'>Ik hou van code schrijven, je leert elke dag iets nieuws!</p>
                </article>
                <article className='passion__card bjj'>
                    <h3 className='passion__titleTitle'>Brazilian Jiu-Jutsu</h3>
                    <p className='passion__dis'>Voor een fullcontactsport is het extreem veilig. Bovendien leer je elke les die je bijwoont iets nieuws!</p>
                </article>
                <article className='passion__card poe'>
                    <h3 className='passion__titleTitle'>RPG's</h3>
                    <p className='passion__dis'>Wanneer ik wat vrije tijd heb, speel ik games. Vooral rpg's</p>
                </article>  
            </div>
            
        </section>
    );
}

export default Passion