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
        <section className="projects contentPart" ref={elementRefs.elementA1}>
            <h2 className='projects__title'>Mijn Projecten</h2>
            <div className='projects__wrapper'>
            <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={gitStore}></Image>
                    <p className='project__imageText'>In dit project heb ik een simpel webshop gemaakt waar je avatars kan kopen en aandoen. Dit website is geen echte webshop en maakt gebruik van cookies en een laravel api. Dit is een solo project.
                    <br></br>
                    <br></br>
                    In dit project heb ik geleerd hoe ik nog beter api's met front end verbind
                    </p>
                    </div>
                    <h3 className='project__title'>Git Avatar Store</h3>
                    <p className='project__dis'>Koop je eigen git avatar</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, css, php (laravel)</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 12 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/git-store/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/git-store'  target="_blank">Naar github! -{'>'}</a>
                </article>

            <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Podcast}></Image>
                    <p className='project__imageText'>Dit is de eindopdracht voor 2de jaar studenten in module 7. De bedoeling is om van aflevering naar aflevering te kunnen wisselen en de herhaling nog een keer te bekijken. Dit is een solo project.
                        <br></br>
                        <br></br>
                        In dit project heb ik geleerd hoe ik content kan versprijden in menu's waar de gebruiker door kan navigeren.
                    </p>
                    </div>
                    <h3 className='project__title'>Collection of happiness</h3>
                    <p className='project__dis'>Bekijk de samenvattingen van 'collection of happiness'</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, css, sass</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 25 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/podcast/index.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/Module7-PROG-Eindopdracht'  target="_blank">Naar github! -{'>'}</a>
                </article>

                <article className='projects__project'>
                    <div className='imgWrap borderProject'>
                    <Image className='project__image' src={LoopbaanAnkers}></Image>
                    <p className='project__imageText'>Vind uit wat jouw loopbaan ankers zijn! Dit formulier is gemaakt met de bijdrage van Frits Bien, Ian Schaafma en mijzelf. De design en Styling voor dit formulier is gemaakt door Ian Schaafma en de logica door mijzelf. Dit is een puur front-end project gemaakt voor Doesburg Coaching.
                        <br></br>
                        <br></br>
                        In dit project heb ik geleerd hoe ik beter met logica en heel veel code moet omgaan.
                    </p>

                    </div>
                    <h3 className='project__title'>Loopbaan ankers quizz</h3>
                    <p className='project__dis'>Klik op de plaatje voor meer info</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, scss, css</p>
                    <p className='project__dis'>Groep: Ian Schaafma, Frits Bien, Kyryl Ieremieiev.</p>
                    <p className='project__dis'>Duur: 37 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/Web-M7/public/vlba.html' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/Web-M7' target='_blank'>Naar github! -{'>'}</a>
                </article>
                <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Cookie}></Image>
                    <p className='project__imageText'>Cookie klikker is een web applicatie standaard voor de tweede jaars MA studenten. In dit project heb ik een functioneel cookie klikker gemaakt dat door middel van cookies score kan opslaan. Dit is een solo project. Ik heb hiervan geleerd hoe ik cookies moet gebruiken.
                    <br></br>
                        <br></br>
                        In dit project heb ik geleerd wat cookies eigenlijk zijn en hoe ik ze kan gebruiken.
                    </p>
                    </div>
                    <h3 className='project__title'>Cookie Clicker</h3>
                    <p className='project__dis'>Speel cookie clicker!</p>
                    <p className='project__dis'>Talen gebruikt: Javascript, html, scss, css</p>
                    <p className='project__dis'>Groep: Solo project</p>
                    <p className='project__dis'>Duur: 8 dagen</p>
                    <a className='project__link' href='https://kyryl.dev/projects/cookie_clicker/' target='_blank'>Naar de project toe! -{'>'}</a>
                    <a className='project__link' href='https://github.com/KyrylIeremieiev/cookie-clicker' target='_blank'>Naar github! -{'>'}</a>
                </article>

                <article className='projects__project'>
                    <div className='imgWrap'>
                    <Image className='project__image' src={Banky}></Image>
                    <p className='project__imageText'>In dit project heb ik een kleine front end applicatie gebouwd met het thema 'bank applicatie'. U kunt hier van rekening naar rekening verwisselen en zelfs uw tegoed en transacties blurren. Dit is een solo project.
                    <br></br>
                        <br></br>
                        In dit project heb ik geleerd how ik gebruik van grid kan gebruiken.
                    </p>
                    </div>
                    <h3 className='project__title'>Banky</h3>
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
                </article>
                
            </div>
        </section>
    );
});


export default Project
