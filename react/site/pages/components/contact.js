import React from 'react'
import contact from '../../public/images/contactPicture.png'

const Passion = () =>{
    return(
        <section className='contact' id='contact'>
            <article className='contact__article'>
                <h2 className='contact__title'>Contact Me</h2>
                <a className='contact__contact' href="mailto:kyrylo.ieremieiev@gmail.com">kyrylo.ieremieiev@gmail.com</a>
                <a className='contact__contact' href='https://github.com/KyrylIeremieiev' target='_blank'>GitHub - @KyrylIeremieiev</a>
                <a className='contact__contact' href='https://www.linkedin.com/in/kyrylo-ieremieiev-7b0986291/' target='_blank'>Linkedin - @kyrylo-ieremieiev</a>
                <a className='contact__contact' href='tel:+31 6 16604351'>+31 6 16604351</a>
            </article>
        </section>
    );
}

export default Passion