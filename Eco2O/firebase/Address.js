import { 
    addDoc, 
    collection, 
    getDocs, 
    getFirestore, 
    setDoc, 
    doc, 
    query, 
    where,
    onSnapshot,
    deleteDoc,
 } from "firebase/firestore";
import { app } from "./Confi";
const firestoreDB = getFirestore(app);
//get from database
async function getAddress() {
    const addressCol = collection(firestoreDB, "Address");
    const addressSnapshot = await getDocs(addressCol);
    return addressSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
}

//add to database
async function addAddress(addres) {
    await addDoc(collection(firestoreDB, "Address"), addres);
}


//delete from database
async function deleteAdress(id) {
        await deleteDoc(doc(firestoreDB, "Address", id));
     }


//get the bouns of the user using the id 
async function getAddressByUserId(id) {
    const usersRef = collection(firestoreDB, "Address");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        console.log("here doc", doc)
        return { id: doc.id, ...doc.data() };
    });
}
function subscribe(callback) {
    const unsubscribe = onSnapshot(
      query(collection(firestoreDB, "Address")),
      (snapshot) => {
        const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        snapshot.docChanges().forEach((change) => {
          // console.log("changes", change, snapshot.metadata);
          if (callback) callback({ change, snapshot });
        });
        // console.log(source, " data: ", snapshot.data());
      }
    );
    return unsubscribe;
  }
export { getAddress,deleteAdress, addAddress,subscribe, getAddressByUserId };