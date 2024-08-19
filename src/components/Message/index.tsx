import React from 'react'
import './Message.scss'

interface Props {
    id: number;
    author: string;
    message: string;
    profileImage: string;
    className?: string;
}
export const Message: React.FC<Props> = ({id, author, message, profileImage, className}) => {
    return (
        <div className={`message ${className ? className : ''}`}>
            <div className="message__avatar"><img src={profileImage} alt="" /></div>
            <div className="message__content">
                <div className="message__autor">{author}</div>
                <span>{message}</span>
            </div>
        </div>
    )
}
