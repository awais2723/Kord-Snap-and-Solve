/* Setting up Storage using the Firebase SDK. Here's a breakdown of what
each part is doing: */
import { v4 as uuid } from 'uuid';
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
  deleteObject,
} from 'node_modules/firebase/storage';

import { storage } from '@/firebase/config';

export const uploadFile = async (file: Blob | Uint8Array | ArrayBuffer) => {
  if (!file) {
    return null;
  }
  const imageRef = storageRef(storage, `files/${uuid()}`);
  try {
    const snapshot = await uploadBytes(imageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteFile = async (url: string) => {
  try {
    const ref = storageRef(storage, url);
    const deleted = await deleteObject(ref);
    return deleted;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
