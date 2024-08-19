import React from 'react'
import './CreateMessage.scss'
import {set, ref} from 'firebase/database'
import {db, auth} from '../../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import shortid from 'shortid'

const CreateMessage: React.FC = () => {
    const [msg, setMsg] = React.useState('')
    const [user, loading, error] = useAuthState(auth)
    const [isEmpty, setisEmpty] = React.useState(false)

    React.useEffect( () => {
        if(!msg) setisEmpty(true)
        else setisEmpty(false)
    }, [msg])

    console.log(user)

    const createNewMessage = () => {
        if(!msg) return 
        if(!user) return

        set(ref(db, 'messages/' + shortid.generate() ), {
            id: user.uid,
            author: user.displayName,
            message: msg,
            profileImage: user.photoURL,
        })
    }

    return (
        <div className='create-msg'>
            <input value={msg} onChange={ (e) => setMsg(e.target.value)} type="text" placeholder="Отправить сообщение" />
            <button onClick={createNewMessage} ><img src={ isEmpty ? '/plane.svg' : '/plane-green.svg'} alt="plane" /></button>
        </div>
    )
}

export default CreateMessage
