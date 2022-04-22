// packages
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

// project file
import { fireStoreDB } from "./connectToFirebase";

// Read
export async function getCollection(path) {
  const collectionPath = collection(fireStoreDB, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}

export async function getDocument(path, docId) {
  const documentPath = doc(fireStoreDB, path, docId);
  const document = await getDoc(documentPath);

  return {
    id: document.id,
    ...document.data(),
  };
}

// Create

export async function addDocument(path, data) {
  const docPath = collection(fireStoreDB, path);
  const newDocument = await addDoc(docPath, data);

  return newDocument.id;
}
