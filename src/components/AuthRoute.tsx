import React, { useEffect } from 'react';
import { View } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';

type AuthRouteProps = {
  children: React.ReactNode;
};

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  // const navigation = useNavigation();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const unsubscribe = auth().onAuthStateChanged(user => {
    // setLoading(false);
    // if (!user) {
    // console.log('User not authenticated, redirecting to login.');
    // navigation.navigate('/');
    // }
    // });
    // return () => unsubscribe();
  }, []);

  // if (loading) return <Text>Loading...</Text>;

  return <View>{children}</View>;
};

export default AuthRoute;
