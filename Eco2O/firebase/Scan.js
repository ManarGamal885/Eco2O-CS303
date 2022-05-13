import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where} from "firebase/firestore";
import {app} from "./Confi";
const firestoreDB = getFirestore(app);
//get from database
async function getBouns() {
    const bounsCol = collection(firestoreDB, "Scan");
    const bounsSnapshot = await getDocs(bounsCol);
    return bounsSnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

//add to database
async function addBouns(bouns) {
    await setDoc(doc(firestoreDB, "Scan", bouns.id), bouns);
}



  
//get the bouns of the user using the id 
 async function getparcodByUserId(id) {
    const usersRef = collection(firestoreDB, "Scan");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

export {getBouns,addBouns,getparcodByUserId};