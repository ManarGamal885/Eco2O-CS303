import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where} from "firebase/firestore";
import {app} from "./Confi";
const firestoreDB = getFirestore(app);


//add to database
async function addSug(sugg) {
    await setDoc(doc(firestoreDB, "Suggestions", sugg.id), sugg);
}


//get the bouns of the user using the id 
 async function getBounsByUserId(id) {
    const usersRef = collection(firestoreDB, "Suggestions");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

export {addSug,getBounsByUserId};