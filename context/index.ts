/* This code snippet is exporting Contexts from different files in a TypeScript project. Each line is
exporting a default provider from a specific file using the `export { default as ProviderName }
from 'filePath';` syntax. */
export { default as AuthProvider } from '@/context/AuthContext';
export { default as FirebaseProvider } from '@/context/FirebaseContext';
export * from '@/context/AuthContext';
export * from '@/context/FirebaseContext';
