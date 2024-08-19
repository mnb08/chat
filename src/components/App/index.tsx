import { AuthWithGoogle } from '../AuthWithGoogle'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/config'
import { Chat } from '../Chat'



export const App: React.FC = () => {
    const [user, loading, error] = useAuthState(auth)

    return (
        <div className='main'>
            {
               user == null ? <AuthWithGoogle /> : <Chat />
            }
        </div>
    )
}


