import React, { useState } from 'react';
import { router } from 'expo-router';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { signInWithEmailAndPassword } from 'firebase/auth';

//import { auth } from '../firebaseConfig';

// const navigation = useNavigation();

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    router.push('/home');
    // try {
    //   const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //   console.log('user data,', userCredential.user);
    //   // Navigate to the next screen on successful login
    // } catch (error) {
    //   console.log('error in code');
    // }
  };
  const handleSignup = async () => {
    // console.log(email, password);
    router.push('/signup');
  };
  return (
    <View className="#FFFFFF  flex-1 justify-around">
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Image className="w-35 h-40 mb-10" source={require('../assets/images/logo.png')} />
        </View>
        <View className="px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-lg font-bold text-violet-700 leading-9">Email Address</Text>
            <TextInput
              placeholder="Enter Email"
              value={email}
              onChangeText={setEmail}
              className="border-2 text-gray-700 border-violet-700 rounded-md px-4 py-2"
            />
            <Text className="text-lg font-bold text-violet-700 leading-9">Password</Text>
            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              className="border-2 text-gray-700 border-violet-700 rounded-md px-4 py-2 mb-4"
            />
            <TouchableOpacity className="flex items-end mb-12 ">
              <Text className="text-violet-700 font-bold text-xl">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border-2 bg-violet-700 text-gray-700 border-gray-300 rounded-md px-4 py-2"
              onPress={handleLogin}>
              <Text className="text-center font-bold text-white text-xl ">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center space-x-12 mt-10">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/images/google.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/images/facebook.png')} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-5">
          <Text className=" font-bold text-xl"> Don&apos;t have an account?</Text>
          <TouchableOpacity className="  pl-2" onPress={handleSignup}>
            <Text className="text-center text-violet-700 font-bold  text-xl ">Signup</Text>
          </TouchableOpacity>
          {/* <Link
              href="/(auth)/signup"
              push
              asChild
              className="py-3 bg-yellow-300 mx-700 rounded text-white font-bold">
              <Button title="Sign up" />
            </Link> */}
        </View>
      </SafeAreaView>
    </View>
  );
};
export default LoginScreen;
