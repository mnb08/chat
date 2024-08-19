import React from 'react'
import './AuthWithGoogle.scss'
import { auth } from '../../firebase/config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const AuthWithGoogle = () => {

	const handleGoogleAuth = () => {
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider)
			.then( result => {
				console.log(result)
			}) 
	} 


    return (
		<button className='auth' onClick={ handleGoogleAuth }>
			<img src="/google-logo.png" alt="google logo" />
			<span>
				Войти с помошью Google
			</span>
		</button>
    )
}
