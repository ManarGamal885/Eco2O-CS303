import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where ,updateDoc} from "firebase/firestore";
import {app} from "./Confi";
const firestoreDB = getFirestore(app);
//get from database
async function getBouns() {
    const bounsCol = collection(firestoreDB, "Bouns");
    const bounsSnapshot = await getDocs(bounsCol);
    return bounsSnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

//add to database
async function addBouns(bouns) {
    await setDoc(doc(firestoreDB, "Bouns", bouns.id), bouns);
}

async function updateBouns(bouns) {
    await updateDoc(doc(firestoreDB, "Bouns", bouns.id), bouns);
}
//edit  in database
async function editBouns(city) {
    console.log("at editCity", city);
    await setDoc(doc(db, "Bouns", city.id), city);
  }

// //delete from database
//   async function deleteBouns(id) {
//     try {
//       await deleteDoc(doc(db, "Bouns", id));
//       console.log("Document deleted with ID: ", id);
//     } catch (error) {
//       console.error("Error deleting document: ", error);
//     }
//   }


//get the bouns of the user using the id 
 async function getBounsByUserId(id) {
    console.log( "get bouns by user id",id)
    const usersRef = collection(firestoreDB, "Bouns");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
    console.log( "here doc",doc)
        return {id: doc.id, ...doc.data() };
    });
}

//Update Username
async function UpdateUsername(username) {
    await setDoc(doc(firestoreDB, "Users", username.id), username);
}

export {getBouns,addBouns,editBouns,getBounsByUserId, UpdateUsername,updateBouns};