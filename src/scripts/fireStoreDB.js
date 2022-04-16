// packages
import { collection, getDocs } from "firebase/firestore";

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
