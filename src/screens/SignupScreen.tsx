import { useState } from 'react';
import { Link, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { doCreateUserWithEmailAndPassword, getErrorMessage } from '@/firebase/auth';

type Props = object;

const SignupScreen: React.FC<Props> = (_props: Props) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ success: string; error: string }>({
    success: '',
    error: '',
  });

  const handleSignup = async () => {
    if (loading) {
      return;
    }
    if (username === '' || email === '' || password === '') {
      setMessage({ success: '', error: 'All fields are required' });
      setTimeout(() => setMessage({ success: '', error: '' }), 3000);
      return;
    }
    setLoading(true);
    setShowPassword(false);
    try {
      await doCreateUserWithEmailAndPassword(username, email, password);
      setUsername('');
      setEmail('');
      setPassword('');
      setMessage({ success: 'Registered Successfully', error: '' });
      setTimeout(() => router.push('/home'), 2000);
    } catch (error: any) {
      setMessage({ success: '', error: getErrorMessage(error.code) });
      setShowPassword(true);
    }
    setLoading(false);
    setTimeout(() => setMessage({ success: '', error: '' }), 3000);
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
              value={username}
              onChangeText={setUsername}
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
            <View className="relative">
              <TextInput
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                className="border-2 text-gray-700 border-violet-700 rounded-md px-4 py-2 mb-4"
              />
              <TouchableOpacity
                className="absolute right-0 top-[18%] mr-3"
                onPress={() => setShowPassword(!showPassword)}>
                <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            {message.success !== '' && (
              <Text className="text-green-500 my-2">{message.success}</Text>
            )}
            {message.error !== '' && <Text className="text-red-500 my-2">{message.error}</Text>}
            <TouchableOpacity
              className="border-2 bg-violet-700 border-gray-300 rounded-md py-2"
              onPress={handleSignup}>
              {loading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text className="text-center text-white font-bold text-xl">Sign up</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center mt-10">
          <Text className=" font-bold text-xl">Have an account?</Text>
          <Link href="/login" asChild className="pl-2">
            <Text className="text-center text-violet-700 font-bold  text-xl ">Login</Text>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;
