// packages
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// project file
import { fireStoreDB } from "./connectToFirebase";

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

  return document.data();
}
