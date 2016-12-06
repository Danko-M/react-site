import React from 'react';

export default function IconMonitor({height}) {   
  return (
		<svg version="1.1" className="IconMonitor" xmlns="http://www.w3.org/2000/svg" width="32px" height={height} viewBox="0 0 32 26" >
			<rect x="5" y="5" fill="none" stroke="#FFB647" strokeWidth="2" strokeMiterlimit="10" width="22" height="12"/>
			<line fill="none" stroke="#FFB647" strokeWidth="2" strokeMiterlimit="10" x1="10" y1="25" x2="22" y2="25"/>
			<polyline fill="none" stroke="#FFB647" strokeWidth="2" strokeMiterlimit="10" points="13,21 1,21 1,1 31,1 31,21 19,21 "/>
			<rect x="15.063" y="20" fill="#FFB647" width="2" height="2"/>
		</svg>
  )
}