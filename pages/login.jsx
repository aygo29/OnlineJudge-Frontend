import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>You are now logged in</h1>
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not logged in</p>
        <button onClick={()=>signIn()}>Sign in</button>
      </div>
    );
  }
};

export default login;
