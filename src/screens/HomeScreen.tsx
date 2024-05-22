import { useState, useEffect } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';

import styles from '@/src/styles';

type Props = object;

const HomeScreen: React.FC<Props> = (_props: Props) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const texts: string[] = ['Physics', 'Chemistry', 'Biology', 'Maths'];
  const translateYAnimExit = useState(new Animated.Value(0))[0];
  const translateXAnimEnter = useState(new Animated.Value(0))[0];

  const styles2 = StyleSheet.create({
    AnimatedTax: {
      marginTop: 10,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 40,
      transform: [{ translateX: translateXAnimEnter }],
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(translateYAnimExit, {
        toValue: -30,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        translateYAnimExit.setValue(0);
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
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
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length, translateXAnimEnter, translateYAnimExit]);

  return (
    <View className="flex-1 bg-white">
      <View
        style={styles.shadow}
        className=" w-full h-64 bg-primary rounded-b-xl flex-row pt-4 border-2">
        <Image source={require('../assets/images/thinking.png')} className="w-5/12 h-80 mt-5 " />
        <View className="bg-primary w-7/12 items-center rounded-b-xl pt-10">
          <Text className=" text-white font-bold text-2xl max-w-full">What You want to Solve?</Text>
          <View className="bg-primary w-50 h-18 mt-2">
            <Animated.Text style={styles2.AnimatedTax}>
              {texts[(currentTextIndex + 1) % texts.length]}
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
};

export default HomeScreen;
