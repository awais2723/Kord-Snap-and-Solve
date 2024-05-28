/* This file sets up a context using the Firebase SDK for managing and accessing
data from a Firebase collection throughout the application. The context
(`FirebaseContext`) includes the fetched data, a method to fetch data, and
the loading state of the data fetching process. Here's a breakdown of what
each part is doing: */
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { getData } from '@/firebase/db';

type DataType = {
  id: string;
  name: string;
};

export type FirebaseContextType = {
  data: DataType[];
  fetchData: () => Promise<void>;
  loading: boolean;
};

export const FirebaseContext = createContext<FirebaseContextType>({
  data: [],
  fetchData: async () => {},
  loading: false,
});

export const useFirebase = () => useContext(FirebaseContext);

type Props = {
  children: ReactNode;
};

const FirebaseProvider: React.FC<Props> = ({ children }: Props) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    //! Get Data From Firebase Collection
    // const storedData = await getData("test");
    const storedData: DataType[] = []; // Replace with actual fetched data
    setData(storedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const values: FirebaseContextType = {
    data,
    fetchData,
    loading,
  };

  return <FirebaseContext.Provider value={values}>{children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
