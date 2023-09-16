import React, { useState } from 'react';
import Image from 'next/image';
import Css from '../../src/images/CSS-3-01.svg'
import Html from '../../src/images/HTML-5-logo-vector-01.svg'
import Intellij from '../../src/images/Intellij-Idea-01.svg'
import Mysql from '../../src/images/MySQL-01.svg'
import Php from '../../src/images/PHP-01.svg'
import Py from '../../src/images/Python-01.svg'
import ReactImg from '../../src/images/React-01.svg'
import Sass from '../../src/images/Sass-01.svg'
import Js from '../../src/images/JS.svg'

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
