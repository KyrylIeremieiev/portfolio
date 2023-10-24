import Image from 'next/image';
import Link from 'next/link';
import LoopbaanAnkers from '../../public/images/doesburgTumb.webp'
import gitStore from '../../public/images/gitStore.png'
import Cookie from '../../public/images/cookieClicker.jpeg'
import Banky from '../../public/images/banky.png'
import Podcast from '../../public/images/podcast.png'
import Colorpicker from '../../public/images/colorpicker.png'
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
        <section className="projects contentPart" ref={elementRefs.elementA1}id='projects'>
            <h2 className='projects__title' >Mijn Projecten</h2>
            <div className='projects__wrapper'>
            <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={gitStore}></Image>
                    <figure className='project__imageText'>
                        <article className='project__text'>
                            <h3 className='project__title'>Koop je eigen git avatar</h3>
                            <div className='project__disWrap'>
                                <p className='project__dis dis'>Een simpele webshop met de thema van github.</p>
                                <p className='project__dis'>Talen: Javascript, html, css, php (laravel)</p>
                                <p className='project__dis'>Groep: Solo project</p>
                                <p className='project__dis'>Duur: 12 dagen</p>
                            </div>
                        </article>
                        <ul className='project__links'>
                            <li>
                                <a className='project__link' href='https://kyryl.dev/projects/git-store/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                            </li>
                            <li>
                                <a className='project__link' href='https://github.com/KyrylIeremieiev/git-store'  target="_blank">Naar github! -{'>'}</a> 
                            </li>
                        </ul>
                    </figure>
                    </div>
{/*                     <h3 className='project__title'>Git Avatar Store</h3>
                    <p className='project__dis'>Koop je eigen git avatar</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, css, php (laravel)</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 12 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/git-store/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/git-store'  target="_blank">Naar github! -{'>'}</a> */}
                </article>

            <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Podcast}></Image>
                       <figure className='project__imageText'>
                        <article className='project__text'>
                            <h3 className='project__title'>Collection of Happiness</h3>
                            <div className='project__disWrap'>
                            <p className='project__dis'>Bekijk de samenvattingen van 'collection of happiness'</p>
                            <p className='project__dis'>Talen gebruikt: Javascript, html, css, sass</p>
                            <p className='project__dis'>Groep: Solo project</p>
                            <p className='project__dis'>Duur: 25 dagen</p>
                            </div>
                        </article>
                        <ul className='project__links'>
                            <li>
                            <a className='project__link' href='https://kyryl.dev/projects/podcast/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                            </li>
                            <li>
                            <a className='project__link' href='https://github.com/KyrylIeremieiev/Module7-PROG-Eindopdracht'  target="_blank">Naar github! -{'>'}</a>
                            </li>
                        </ul>
                    </figure>
                
                    </div>
{/*                     <h3 className='project__title'>Collection of happiness</h3>
                    <p className='project__dis'>Bekijk de samenvattingen van 'collection of happiness'</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, css, sass</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 25 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/podcast/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/Module7-PROG-Eindopdracht'  target="_blank">Naar github! -{'>'}</a> */}
                </article>

                <article className='projects__project'>
                    <div className='imgWrap borderProject'>
                    <Image className='project__image' src={LoopbaanAnkers}></Image>
                    <figure className='project__imageText'>
                        <article className='project__text'>
                            <h3 className='project__title'>DoesBurg Coaching</h3>
                            <div className='project__disWrap'>
                                <p className='project__dis'>Klik op de plaatje voor meer info</p>
                                <p className='project__dis'>Talen gebruikt: Javascript, html, scss, css</p>
                                <p className='project__dis'>Groep: Ian Schaafma, Frits Bien, Kyryl Ieremieiev.</p>
                                <p className='project__dis'>Duur: 37 dagen</p>
                            </div>
                        </article>
                        <ul className='project__links'>
                            <li>
                            <a className='project__link' href='https://kyryl.dev/projects/Web-M7/public/vlba.html' target='_blank'>Naar de project toe! -{'>'}</a>
                            </li>
                            <li>
                            <a className='project__link' href='https://github.com/KyrylIeremieiev/Web-M7' target='_blank'>Naar github! -{'>'}</a>
                            </li>
                        </ul>
                    </figure>
                    

                    </div>
{/*                     <h3 className='project__title'>Loopbaan ankers quizz</h3>
                    <p className='project__dis'>Klik op de plaatje voor meer info</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, scss, css</p>
                    <p className='project__dis'>Groep: Ian Schaafma, Frits Bien, Kyryl Ieremieiev.</p>
                    <p className='project__dis'>Duur: 37 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/Web-M7/public/vlba.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/Web-M7' target='_blank'>Naar github! -{'>'}</a> */}
                </article>
                <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Cookie}></Image>
                    <figure className='project__imageText'>
                        <article className='project__text'>
                            <h3 className='project__title'>Cookie Clicker</h3>
                            <div className='project__disWrap'>
                                <p className='project__dis'>Speel cookie clicker!</p>
                                <p className='project__dis'>Talen gebruikt: Javascript, html, scss, css</p>
                                <p className='project__dis'>Groep: Solo project</p>
                                <p className='project__dis'>Duur: 8 dagen</p>
                            </div>
                        </article>
                        <ul className='project__links'>
                            <li>
                                <a className='project__link' href='https://kyryl.dev/projects/cookie_clicker/' target='_blank'>Naar de project toe! -{'>'}</a>
                            </li>
                            <li>
                                <a className='project__link' href='https://github.com/KyrylIeremieiev/cookie-clicker' target='_blank'>Naar github! -{'>'}</a>
                            </li>
                        </ul>
                    </figure>
                    </div>
{/*                     <h3 className='project__title'>Cookie Clicker</h3>
                    <p className='project__dis'>Speel cookie clicker!</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, scss, css</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 8 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/cookie_clicker/' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/cookie-clicker' target='_blank'>Naar github! -{'>'}</a> */}
                </article>

                {/* <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Banky}></Image>
                    <p className='project__imageText'>In dit project heb ik een kleine front end applicatie gebouwd met het thema 'bank applicatie'. U kunt hier van rekening naar rekening verwisselen en zelfs uw tegoed en transacties blurren. Dit is een solo project.
                    <br></br>
                        <br></br>
                        In dit project heb ik geleerd how ik gebruik van grid kan gebruiken.
                    </p>
                    </div>
{/*                     <h3 className='project__title'>Banky</h3>
                    <p className='project__dis'>Uw eigen bank applicatie!</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, css, sass</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 12 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/banky_version2/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/banky--recovery'  target="_blank">Naar github! -{'>'}</a> 
                </article>

                <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Colorpicker}></Image>
                    <p className='project__imageText'>Soms lukt het even niet om op een mooie kleur te komen. Geen probleem, met color picker kunt u een 100 opties het perfecte kleur vinden. De kleuren zijn random, dus elke keer is uniek! Dit is een solo project.
                    <br></br>
                        <br></br>
                        In dit project heb ik geleerd hoe ik kleuren kan genereren met js en wat voor interacties tussen de gebruiker en de website kan creeren.
                    </p>
                    </div>
                     <h3 className='project__title'>Color Picker!</h3>
                    <p className='project__dis'>Voor als u een mooie kleur moet vinden</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, css, sass</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 5 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/color-picker/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/colorpicker--recover'  target="_blank">Naar github! -{'>'}</a> 
                </article> */}
                
            </div>
        </section>
    );
});


export default Project
