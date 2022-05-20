import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where} from "firebase/firestore";
import {app} from "./Confi";
const firestoreDB = getFirestore(app);
//get from database
async function getAddress() {
    const addressCol = collection(firestoreDB, "Address");
    const addressSnapshot = await getDocs(addressCol);
    return addressSnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

//add to database
async function addAddress(addres) {
    await setDoc(doc(firestoreDB, "Address", addres.id), addres);
}
//edit  in database
// async function editBouns(city) {
//     console.log("at editCity", city);
//     await setDoc(doc(db, "Bouns", city.id), city);
//   }

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
 async function getAddressByUserId(id) {
    console.log( "get bouns by user id",id)
    const usersRef = collection(firestoreDB, "Bouns");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
    console.log( "here doc",doc)
        return {id: doc.id, ...doc.data() };
    });
}

export {getAddress,addAddress,getAddressByUserId};