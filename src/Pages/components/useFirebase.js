import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const useFirebase = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
const [signInWithGoogle] = useSignInWithGoogle(auth);
const [signInWithGithub] = useSignInWithGithub(auth);
const [user, loading] = useAuthState(auth);
    
const handleEmailInput = (event) => {
    setEmail(event.target.value);
}
    
const handlePasswordInput = (event) => {
    setPassword(event.target.value);
}
    
const handleConfirmPasswordInput = (event) => {
    setConfirmPassword(event.target.value);
}

const handleSignUpForm = (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
        return;
    }
    createUserWithEmailAndPassword(email, password)
}

const handleSignInForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
}

const handleGoogleSignIn = () => {
    signInWithGoogle();
}

const handleGithubSignIn = () => {
    signInWithGithub();
}

const handleSignOut= () => {
    signOut(auth)
}


    return {
        user,
        loading,
        handleEmailInput,
        handlePasswordInput,
        handleConfirmPasswordInput,
        handleSignUpForm,
        handleSignInForm,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignOut
    };
};

export default useFirebase;