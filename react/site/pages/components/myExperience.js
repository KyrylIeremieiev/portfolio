import React, { useState } from 'react';
import Image from 'next/image';
import Css from '../../public/images/CSS-3-01.svg'
import Html from '../../public/images/HTML-5-logo-vector-01.svg'
import Intellij from '../../public/images/Intellij-Idea-01.svg'
import Mysql from '../../public/images/MySQL-01.svg'
import Php from '../../public/images/PHP-01.svg'
import Py from '../../public/images/Python-01.svg'
import ReactImg from '../../public/images/React-01.svg'
import Sass from '../../public/images/Sass-01.svg'
import Js from '../../public/images/JS.svg'

const MyExp = () =>{
    return(
        <section className="exp contentPart">
            <h2 className='exp__title'>My Experience</h2>
            <div className='exp__wrapper'>
                <div className='exp__img'>
                <Image src={ Html } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ Css } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ Sass } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ Js } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ ReactImg } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ Php } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ Py } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ Mysql } className='exp__img'></Image>
                </div>
                <div className='exp__img'>
                <Image src={ Intellij } className='exp__img'></Image>
                </div>
            </div>
        </section>
    );
}

export default MyExp
