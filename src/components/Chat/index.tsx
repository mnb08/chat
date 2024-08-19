import React from 'react'
import './Chat.scss'
import { Message } from '../Message'
import CreateMessage from '../CreateMessage'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/config'

export const Chat = () => {
    const [user, loading, error] = useAuthState(auth)


    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__avatar"><img src={`${user?.photoURL}`} alt="" /></div>
                <span>{user?.displayName}</span>
            </div>

            <div className="chat__messages">
                <Message id={1} author="Amanbai" message="Hi, how are you?" profileImage="https://i.ebayimg.com/images/g/zo4AAOSwYP5i4RDY/s-l1200.jpg" />
                <Message id={1} className={'me'}author="Amanbai" message="Hi, how are you?" profileImage="https://i.ebayimg.com/images/g/zo4AAOSwYP5i4RDY/s-l1200.jpg" />
                <Message id={1} author="Amanbai" message="Hi, how are you?" profileImage="https://i.ebayimg.com/images/g/zo4AAOSwYP5i4RDY/s-l1200.jpg" />
            </div>

            <CreateMessage />
        </div>
    )
}

