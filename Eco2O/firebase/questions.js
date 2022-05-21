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

async function getQuestion() {
    const questionCol = collection(firestoreDB, "Questions");
    const questionSnapshot = await getDocs(questionCol);
    return questionSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
}

//add to database
async function setQuestion(addres) {
    await setDoc(collection(firestoreDB, "Questions"), addres);
}
async function addQuestion(addres) {
    await addDoc(collection(firestoreDB, "Questions"), addres);
}

//delete from database
async function deleteQuestion(id) {
        await deleteDoc(doc(firestoreDB, "Questions", id));
     }


//get the bouns of the user using the id 

function subscribe(callback) {
    const unsubscribe = onSnapshot(
      query(collection(firestoreDB, "Questions")),
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

export { getQuestion,addQuestion, deleteQuestion,subscribe,setQuestion};