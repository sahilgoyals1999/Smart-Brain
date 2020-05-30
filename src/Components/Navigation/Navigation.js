import React from 'react'

export default function Navigation({onRouteChange,isSignedIn}) {
		if (isSignedIn) {
			return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p onClick={ () => onRouteChange('SignOut')}className='f3 link pointer dim black underline pa3'>Sign Out</p>
		</nav>
	);
	}  else {
		return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p onClick={ () => onRouteChange('SignIn')}className='f3 link pointer dim black underline pa3'>Sign In</p>
			<p onClick={ () => onRouteChange('Register')}className='f3 link pointer dim black underline pa3'>Register</p>
		</nav>
	);
	}
}