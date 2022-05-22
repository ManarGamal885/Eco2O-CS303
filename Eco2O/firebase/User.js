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
  updateDoc,
} from "firebase/firestore";
import { app } from "./Confi";
import { getBouns } from "./Bouns";

const firestoreDB = getFirestore(app);

async function getUserswithbouns() {
  let users = await getUsers();
  let finalbouns = await getBouns();
  // console.log("this is bouns" ,bouns)
  // console.log("this is user" ,users)
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < finalbouns.length; j++) {
      if (users[i].id == finalbouns[j].id) {
        console.log("user======", finalbouns[i], "bons=====", finalbouns[j]);
        users[i].finalbouns = finalbouns[j].finalbouns;
      }
    }
  }
  console.log("this is userkkkkkkkkkkkkkkkkkkkkkkkkkk***", users);
  return users;
}

async function getUsers() {
  const usersCol = collection(firestoreDB, "Users");
  const userSnapshot = await getDocs(usersCol);
  return userSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
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
    return { id: doc.id, ...doc.data() };
  });
}

function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(firestoreDB, "Users")),
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

async function deleteUser(id) {
  await deleteDoc(doc(firestoreDB, "Users", id));
}

export {
  getUsers,
  addUser,
  subscribe,
  deleteUser,
  getUserswithbouns,
  updateUser,
};
