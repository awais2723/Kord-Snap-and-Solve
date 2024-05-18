import React, { useState } from 'react';
import { router } from 'expo-router';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'; // Import createUserWithEmailAndPassword from firebase/auth

import { auth } from '@/firebase/config';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    router.push('/login');
  };
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      Alert.alert('Verification Email Sent', 'Please check your email to verify your account.');
      router.push('/home');
    } catch (error) {
      Alert.alert('Error', 'Failed to sign up. Please try again.');
    }
  };

  return (
    <View className=" flex-1 justify-around">
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Image className="w-35 h-40 mb-10" source={require('../assets/images/logo.png')} />
        </View>
        <View className="px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-lg font-bold text-violet-700 leading-9">Name</Text>
            <TextInput
              placeholder="Enter Name"
              value={name}
              onChangeText={setName}
              className="border-2  border-violet-700 rounded-md px-4 py-2 "
            />
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
              className="border-2 text-gray-700 border-violet-700 rounded-md px-4 py-2 mb-12"
            />
            <TouchableOpacity
              className="border-2 bg-violet-700  border-gray-300 rounded-md mt-10 py-2"
              onPress={handleSignup}>
              <Text className="text-center text-white font-bold  text-xl ">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center mt-10">
          <Text className=" font-bold text-xl">Have an account?</Text>
          <TouchableOpacity className="  pl-2" onPress={handleLogin}>
            <Text className="text-center text-violet-700 font-bold  text-xl ">Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;
