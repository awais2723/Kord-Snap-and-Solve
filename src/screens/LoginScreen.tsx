import { Component } from 'react';
import { Link, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import { doSignInWithEmailAndPassword, getErrorMessage } from '@/firebase/auth';

type Props = object;

type State = {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  message: { success: string; error: string };
};

class LoginScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      loading: false,
      message: { success: '', error: '' },
    };
  }

  handleLogin = async () => {
    const { email, password, loading } = this.state;
    if (loading) {
      return;
    }
    if (email === '' || password === '') {
      this.setState({ message: { success: '', error: 'Both fields are required' } });
      setTimeout(() => this.setState({ message: { success: '', error: '' } }), 3000);
      return;
    }
    this.setState({ loading: true, showPassword: false });
    try {
      await doSignInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
        message: { success: 'Login Successfully', error: '' },
      });
      setTimeout(() => router.replace('/home'), 2000);
    } catch (error: any) {
      this.setState({
        message: { success: '', error: getErrorMessage(error.code) },
        showPassword: true,
      });
    }
    this.setState({ loading: false });
    setTimeout(() => this.setState({ message: { success: '', error: '' } }), 3000);
  };

  render() {
    const { email, password, showPassword, loading, message } = this.state;

    return (
      <View className="flex-1 justify-around">
        <View className="flex flex-row justify-center">
          <Image className="w-35 h-40 mb-10" source={require('../assets/images/logo.png')} />
        </View>
        <View className="px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-lg font-bold text-violet-700 leading-9">Email Address</Text>
            <TextInput
              placeholder="Enter Email"
              value={email}
              onChangeText={text => this.setState({ email: text })}
              className="border-2 text-gray-700 border-violet-700 rounded-md px-4 py-2"
            />
            <Text className="text-lg font-bold text-violet-700 leading-9">Password</Text>
            <View className="relative">
              <TextInput
                placeholder="Enter Password"
                value={password}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                className="border-2 text-gray-700 border-violet-700 rounded-md px-4 py-2 mb-4"
              />
              <TouchableOpacity
                className="absolute right-0 top-[18%] mr-3"
                onPress={() => this.setState({ showPassword: !showPassword })}>
                <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            {message.success !== '' && (
              <Text className="text-green-500 my-2">{message.success}</Text>
            )}
            {message.error !== '' && <Text className="text-red-500 my-2">{message.error}</Text>}
            <TouchableOpacity className="flex items-end mb-12 ">
              <Text className="text-violet-700 font-bold text-xl">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border-2 bg-violet-700 text-gray-700 border-gray-300 rounded-md px-4 py-2"
              onPress={this.handleLogin}>
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
  }
}

export default LoginScreen;
