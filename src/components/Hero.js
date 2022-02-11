import React from 'react';
import Logo from "./Logo";
import hero from "../images/hero.png";
import "../css/Hero.css"
const Hero = () => {
    return (
        <div className='hero__section'>
            <div className='hero__intro'>
                <Logo/>
                <p>GG One (esports) operates a fully formatted and structured competitive gaming program in high schools and colleges in parallel to the academic curriculum with the objective.
                </p>
                <p>GG One (esports) operates a fully formatted and structured competitive gaming program in high schools and colleges in parallel to the academic curriculum with the objective.
                </p>
            </div>
            <div className='hero__image'>
                <img src={hero} alt="" />
            </div>
            <div className='hero__btn'>
                JOIN US
            </div>
        </div>
    )
}

export default Hero