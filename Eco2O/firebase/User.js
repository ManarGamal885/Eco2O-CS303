import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where, updateDoc} from "firebase/firestore";
import {app} from "./Confi";

const firestoreDB = getFirestore(app);


async function getUsers() {
    const usersCol = collection(firestoreDB, "Users");
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}


async function addUser(user) {
    await setDoc(doc(firestoreDB, "Users", user.id), user);
}
async function updateUser(user) {
    await updateDoc(doc(firestoreDB, "Users", user.id), user);
}
export async function getUserById(id) {
    const usersRef = collection(firestoreDB, "Users");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}


export {getUsers, addUser, updateUser};