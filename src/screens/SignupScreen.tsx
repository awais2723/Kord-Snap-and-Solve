import React, { useState } from 'react';
import { router } from 'expo-router';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // console.log(email, password);
    router.push('/login');
  };
  const handleSignup = async () => {
    // console.log(email, password);
    router.push('/signup');
  };

  return (
    <View className="bg-violet-700  flex-1 justify-around">
      <SafeAreaView className="flex">
        <View className="flex-row justify-center">
          <Image className="w-35 h-40 mb-10" source={require('../assets/images/logo.jpeg')} />
        </View>
        <View className="px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-white font-bold text-1xl ml-4">Name</Text>
            <TextInput
              placeholder="Enter Name"
              value={email}
              onChangeText={setEmail}
              className="border-2 bg-gray-300 text-gray-700 border-gray-300 rounded-md px-4 py-2"
            />
            <Text className="text-white font-bold text-1xl ml-4">Email Address</Text>
            <TextInput
              placeholder="Enter Email"
              value={email}
              onChangeText={setEmail}
              className="border-2 bg-gray-300 text-gray-700 border-gray-300 rounded-md px-4 py-2"
            />
            <Text className="text-white font-bold text-1xl ml-4">Password</Text>
            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              className="border-2 bg-gray-300 text-gray-700 border-gray-300 rounded-md px-4 py-2 mb-12"
            />
            <TouchableOpacity
              className="border-2 bg-yellow-500 text-gray-700 border-gray-300 rounded-md mt-10 py-2"
              onPress={handleSignup}>
              <Text className="text-center font-bold  text-xl ">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center mt-5">
          <Text className="text-white font-bold text-xl">Have an account?</Text>
          <TouchableOpacity className="  pl-2" onPress={handleLogin}>
            <Text className="text-center text-yellow-500 font-bold  text-xl ">Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;
