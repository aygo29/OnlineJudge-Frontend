import React from 'react';
import { useSession, signOut, getSession } from 'next-auth/react';

const account = () => {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div>
                <h1>Your Account</h1>
                <p>{session.user.name}</p>
                <img src={session.user.image} alt="" style={{borderRadius: '50px'}}/>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
            </div>
        )
    }
}

export default account

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login'
            }
        }
    }
    return {
        props: { session }
    }
}