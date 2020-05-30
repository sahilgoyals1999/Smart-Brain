import React from 'react'
import Tilt from 'react-tilt'
import "./Logo.css";
import brain from './brain.png';

export default function Logo() {
	return (
		<div className="pl3">
		 <Tilt className="Tilt br2 shadow-4 pa4" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner">
           <img alt='logo' src={brain} />
           </div>
          </Tilt>
		</div>
	)
}