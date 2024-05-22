/* Setting up a Database using the Firebase SDK. Here's a breakdown of what
each part is doing: */
import { getDocs, collection, doc, deleteDoc, updateDoc, addDoc } from 'firebase/firestore';

import { db } from '@/firebase/config';

export const getData = async (collectionName: string) =>
  await getDocs(collection(db, collectionName)).then(querySnapshot =>
    querySnapshot.docs.map(dc => ({ ...dc.data(), id: dc.id }))
  );

export const addItem = async (collectionName: string, data: any) =>
  await addDoc(collection(db, collectionName), data);

export const updateItem = async (collectionName: string, uid: string, data: any) => {
  const itemRef = doc(db, collectionName, uid);
  return await updateDoc(itemRef, data);
};

export const deleteItem = async (collectionName: string, uid: string) => {
  const itemRef = doc(db, collectionName, uid);
  return await deleteDoc(itemRef);
};
