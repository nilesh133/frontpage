import React from 'react';
import "../css/Publisher.css";
import publisher from "../images/publisher.png";
import Games from "../components/Games";
const Pubisher = () => {
    return (
        <div className='publisher'>
            <div className='publisher__heading'>
                PUBLISHERS
            </div>
            <div className='publisher__image'>
                <img src={publisher} alt="" />
            </div>
            <div className='publisher__content'>
                <Games
                    heading="COUNTER STRIKE"
                    background="#1060FF"
                />
                <Games
                    heading="COUNTER STRIKE"
                    background="#FFC612"
                />
                <Games
                    heading="COUNTER STRIKE"
                    background="#1060FF"
                />
                <Games
                    heading="RIOT GAMES"
                    background="#FFC612"
                />
            </div>
        </div>
    )
}

export default Pubisher