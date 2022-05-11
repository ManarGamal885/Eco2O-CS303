import {app} from "./Confi";
import {onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} from "firebase/auth";

const authentication = getAuth(app);

// onAuthStateChanged(authentication, (user) => {
//     if (user != null) {
//         console.log("authorized user: ", user);
//         console.log(authentication.currentUser)
//     }
//     console.log('isSignedIn=', isSignedIn())
// });

async function isSignedIn() {
    console.log('from isSignedIn method: ', authentication.currentUser);
    return await authentication.currentUser != null;
}

async function getUserUId() {
    if (authentication.currentUser != null) {
        return authentication.currentUser.uid;
    } else {
        return null;
    }
}

async function getUserToken() {
    if (authentication.currentUser != null) {
        return await authentication.currentUser.getIdToken();
    }
    return null;
}

async function register(email, password,name,usename,confirmpassword,city,state,gender,age,phone) {
   
    await createUserWithEmailAndPassword(authentication, email, password,name,usename,confirmpassword,city,state,gender,age,phone);
   
}

async function login(email, password) {
    console.log('login method with email=', email, ' and password=', password)
    await signInWithEmailAndPassword(authentication, email, password);
}

async function logout() {
    authentication.signOut().then().catch((e) => console.log(e.message));
}

export {register, login, isSignedIn, getUserUId, logout, getUserToken};