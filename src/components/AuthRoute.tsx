import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setLoading(false);
      if (!user) {
        console.log('User not authenticated, redirecting to login.');
        navigation.navigate('LoginScreen');
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return <View>{children}</View>;
};

export default AuthRoute;
