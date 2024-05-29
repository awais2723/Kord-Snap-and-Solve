import { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { doCreateUserWithEmailAndPassword, getErrorMessage } from '@/firebase/auth';

type Props = object;

type State = {
  username: string;
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  message: { success: string; error: string };
};

class SignupScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      showPassword: false,
      loading: false,
      message: { success: '', error: '' },
    };
  }

  handleSignup = async () => {
    const { username, email, password, loading } = this.state;
    if (loading) {
      return;
    }
    if (username === '' || email === '' || password === '') {
      this.setState({ message: { success: '', error: 'All fields are required' } });
      setTimeout(() => this.setState({ message: { success: '', error: '' } }), 3000);
      return;
    }
    this.setState({ loading: true, showPassword: false });
    try {
      await doCreateUserWithEmailAndPassword(username, email, password);
      this.setState({
        username: '',
        email: '',
        password: '',
        message: { success: 'Registered Successfully', error: '' },
      });
      setTimeout(() => router.push('/home'), 2000);
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
    const { username, email, password, showPassword, loading, message } = this.state;

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
                onChangeText={text => this.setState({ username: text })}
                className="border-2  border-violet-700 rounded-md px-4 py-2 "
              />
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
              <TouchableOpacity
                className="border-2 bg-violet-700 border-gray-300 rounded-md py-2"
                onPress={this.handleSignup}>
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
              <Text className="text-center text-violet-700 font-bold text-xl">Login</Text>
            </Link>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default SignupScreen;
