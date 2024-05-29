import { Component } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';

import styles from '@/src/styles';

type Props = object;

type State = {
  currentTextIndex: number;
  translateYAnimExit: Animated.Value;
  translateXAnimEnter: Animated.Value;
};

class HomeScreen extends Component<Props, State> {
  texts: string[] = ['Physics', 'Chemistry', 'Biology', 'Maths'];
  intervalId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      currentTextIndex: 0,
      translateYAnimExit: new Animated.Value(0),
      translateXAnimEnter: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.startExitAnimation();
    }, 4000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startExitAnimation = () => {
    const { translateYAnimExit } = this.state;
    Animated.timing(translateYAnimExit, {
      toValue: -30,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      translateYAnimExit.setValue(0);
      this.setState(
        prevState => ({
          currentTextIndex: (prevState.currentTextIndex + 1) % this.texts.length,
        }),
        this.startEnterAnimation
      );
    });
  };

  startEnterAnimation = () => {
    const { translateXAnimEnter } = this.state;
    Animated.timing(translateXAnimEnter, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(translateXAnimEnter, {
          toValue: -10,
          duration: 0,
          useNativeDriver: true,
        }).start();
      }, 3000);
    });
  };

  render() {
    const { currentTextIndex, translateXAnimEnter } = this.state;

    const styles2 = StyleSheet.create({
      AnimatedTax: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        transform: [{ translateX: translateXAnimEnter }],
      },
    });

    return (
      <View className="flex-1 bg-white">
        <View
          style={styles.shadow}
          className="w-full h-64 bg-primary rounded-b-xl flex-row pt-4 border-2">
          <Image source={require('../assets/images/thinking.png')} className="w-5/12 h-80 mt-5" />
          <View className="bg-primary w-7/12 items-center rounded-b-xl pt-10">
            <Text className="text-white font-bold text-2xl max-w-full">
              What You want to Solve?
            </Text>
            <View className="bg-primary w-50 h-18 mt-2">
              <Animated.Text style={styles2.AnimatedTax}>
                {this.texts[(currentTextIndex + 1) % this.texts.length]}
              </Animated.Text>
            </View>
          </View>
        </View>
        <View className="bg-sky-50 flex-1 items-center pt-5">
          <TouchableOpacity
            style={styles.shadow}
            className="w-11/12 h-18 bg-white rounded-lg flex-row mt-12 justify-center items-center"
            onPress={() => router.push('/scanQuestion')}>
            <MaterialCommunityIcons name="text-recognition" size={45} color="#6844EE" />
            <Text className="text-center text-2xl text-gray-900 font-bold ml-8">Scan Question</Text>
            <MaterialIcons name="navigate-next" size={50} color="#6844EE" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shadow}
            className="w-11/12 h-18 bg-white rounded-lg flex-row mt-12 justify-center items-center"
            onPress={() => router.push('/scanQuestion')}>
            <MaterialCommunityIcons name="math-integral" size={45} color="#6844EE" />
            <Text className="text-center text-2xl text-gray-900 font-bold ml-8">Scan Equation</Text>
            <MaterialIcons name="navigate-next" size={50} color="#6844EE" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.shadow}
            className="w-11/12 h-18 bg-white rounded-lg flex-row mt-12 justify-center items-center"
            onPress={() => router.push('/typeEquation')}>
            <MaterialCommunityIcons name="math-norm-box" size={45} color="#6844EE" />
            <Text className="text-center text-2xl text-gray-900 font-bold ml-8">Type Equation</Text>
            <MaterialIcons name="navigate-next" size={50} color="#6844EE" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
