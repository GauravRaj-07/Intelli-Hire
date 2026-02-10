
import { useEffect } from 'react';
import './App.css'
import { SignedOut, SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/health`)
  //     .then(res => res.json())
  //     .then(data => console.log("Backend says:", data))
  //     .catch(err => console.error("Backend error:", err));
  // }, []);
  

  return (
    <>
      <h1>Welcome to IntelliHire</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>
      <UserButton />
    </>
  );
}

export default App;
