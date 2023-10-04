import Image from 'next/image';
import Link from 'next/link';
import LoopbaanAnkers from '../../public/images/loopbaanAnkers.webp'
import gitStore from '../../public/images/gitStore.png'
import Cookie from '../../public/images/cookieClicker.jpeg'
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const Project = forwardRef((props, ref) => {
    const elementRefs = {
        elementA1: useRef(null),    
      };
    
      // Expose the elementRefs to the parent component using useImperativeHandle
      useImperativeHandle(ref, () => ({
        elementRefs,
      }));
    return(
        <section className="projects contentPart" ref={elementRefs.elementA1}>
            <h2 className='projects__title'>My Projects</h2>
            <div className='projects__wrapper'>
                <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={LoopbaanAnkers}></Image>
                    </div>
                    <h3 className='project__title'>Loopbaan ankers quizz</h3>
                    <p className='project__dis'>Vind uit wat jouw loopbaan ankers zijn!</p>
                    <a className='project__link'>Naar de project toe! -{'>'}</a>
                    <a className='project__link'>Naar github! -{'>'}</a>
                </article>
                <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Cookie}></Image>
                    </div>
                    <h3 className='project__title'>Cookie Clicker</h3>
                    <p className='project__dis'>Kijk video's via Yubtub!</p>
                    <a className='project__link'>Naar de project toe! -{'>'}</a>
                    <a className='project__link'>Naar github! -{'>'}</a>
                </article>
                <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={gitStore}></Image>
                    </div>
                    <h3 className='project__title'>Git Avatar Store</h3>
                    <p className='project__dis'>Koop je eigen git avatar</p>
                    <a className='project__link'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/git-store'  target="_blank">Naar github! -{'>'}</a>
                </article>
                
            </div>
        </section>
    );
});


export default Project
