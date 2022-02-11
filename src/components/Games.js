import React from 'react';
import "../css/Games.css";

const Games = ({heading, background}) => {
  return (
    <div className='games' style = {{background: background}}>
        <h1>{heading}</h1>
        <p>We’re all about collaboration. We trust each other to make great things. And it’s our responsibility to create an environment that helps you do your best work: balancing time spent together with time to do your own thing. Come by, you’ll see what we mean.</p>
    </div>
  )
}

export default Games