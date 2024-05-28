import { useState } from 'react';
import { Link, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import { doSignInWithEmailAndPassword, getErrorMessage } from '@/firebase/auth';

type Props = object;

const LoginScreen: React.FC<Props> = (_props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ success: string; error: string }>({
    success: '',
    error: '',
  });

  const handleLogin = async () => {
    if (loading) {
      return;
    }
    if (email === '' || password === '') {
      setMessage({ success: '', error: 'Both fields are required' });
      setTimeout(() => setMessage({ success: '', error: '' }), 3000);
      return;
    }
    setLoading(true);
    setShowPassword(false);
    try {
      await doSignInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setMessage({ success: 'Login Successfully', error: '' });
      setTimeout(() => router.replace('/home'), 2000);
    } catch (error: any) {
      setMessage({ success: '', error: getErrorMessage(error.code) });
      setShowPassword(true);
    }
    setLoading(false);
    setTimeout(() => setMessage({ success: '', error: '' }), 3000);
  };

  return (
    <View className="flex-1 justify-around">
      <View className="flex flex-row justify-center">
        <Image className="w-35 h-40 mb-10" source={require('../../assets/images/logo.png')} />
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
          {message.success !== '' && <Text className="text-green-500 my-2">{message.success}</Text>}
          {message.error !== '' && <Text className="text-red-500 my-2">{message.error}</Text>}
          <TouchableOpacity className="flex items-end mb-12 ">
            <Text className="text-violet-700 font-bold text-xl">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-2 bg-violet-700 text-gray-700 border-gray-300 rounded-md px-4 py-2"
            onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text className="text-center font-bold text-white text-xl ">Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row justify-center mt-5">
        <Text className=" font-bold text-xl"> Don&apos;t have an account?</Text>
        <Link href="/signup" asChild className="pl-2">
          <Text className="text-center text-violet-700 font-bold  text-xl ">Signup</Text>
        </Link>
      </View>
    </View>
  );
};
export default LoginScreen;
