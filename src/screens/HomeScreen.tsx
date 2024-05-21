import React, { useState, useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';

import { styles } from '@/src/styles';

const HomeScreen: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts: string[] = ['Physics', 'Chemistry', 'Biology', 'Maths'];
  const translateYAnimExit = useState(new Animated.Value(0))[0];
  const translateXAnimEnter = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate the exiting text up
      Animated.timing(translateYAnimExit, {
        toValue: -30,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        // Reset the value once the animation completes
        translateYAnimExit.setValue(0);
        // Change the text index
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        // Animate the entering text in from the side quickly
        Animated.timing(translateXAnimEnter, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start(() => {
          // After the entering text animation completes, wait for 2 seconds and start the cycle again
          setTimeout(() => {
            Animated.timing(translateXAnimEnter, {
              toValue: -10, // Move the entering text back to the initial position
              duration: 0,
              useNativeDriver: true,
            }).start();
          }, 3000);
        });
      });
    }, 4000); // Wait for 4 seconds before starting the next cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 bg-white">
      <View
        style={styles.shadow}
        className="h-[260px] bg-primary rounded-b-lg  flex-row pt-10 border-black">
        <View className="bg-primary w-[180px]">
          <Image source={require('../assets/images/thinking.png')} className="w-full h-[310px]" />
        </View>
        <View className="bg-primary flex-1 items-center">
          <Text className="mt-10 text-white font-bold text-xl">What You want to Solve?</Text>

          <View className="bg-primary  w-50 h-18 mt-2 ">
            {/* <Animated.Text
            style={{
              marginTop: 10,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 40,
              transform: [{ translateY: translateYAnimExit }],
            }}>
            {texts[currentTextIndex]}
          </Animated.Text> */}

            <Animated.Text
              style={{
                marginTop: 10,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 40,
                transform: [{ translateX: translateXAnimEnter }],
              }}>
              {texts[(currentTextIndex + 1) % texts.length]}
            </Animated.Text>
          </View>
        </View>
      </View>

      <View className="bg-sky-50 flex-1 items-center pt-5">
        <TouchableOpacity onPress={() => router.push('/ScanQuestion')}>
          <View
            style={styles.shadow}
            className="w-[380px] h-[70px] bg-white rounded-[16px] flex-row mt-12 justify-center items-center">
            <MaterialCommunityIcons
              name="text-recognition"
              size={50}
              color="#6844EE"
              // style={{ marginRight: 35 }}
            />

            <Text className="text-center text-3xl text-gray-900 font-bold ml-[35px]">
              Scan Question
            </Text>
            <MaterialIcons name="navigate-next" size={60} color="#6844EE" />
          </View>
        </TouchableOpacity>

        <View
          style={styles.shadow}
          className="w-[380px] h-[70px] bg-white rounded-[16px] flex-row mt-10 justify-center items-center">
          <View
            // style={styles.shadow}
            className=" w-10 h-[70px] mr-10 justify-center items-center border-red-900">
            <MaterialCommunityIcons name="math-integral" size={50} color="#6844EE" />

            {/* <View className=" bg-black-700 w-20 h-[70px]  justify-center items-center">
              <Ionicons name="scan-sharp" size={50} color="#6844EE"  />
              </View> */}
          </View>

          <Text className="text-center text-3xl text-gray-900 font-bold ">Scan Equation</Text>
          <MaterialIcons name="navigate-next" size={60} color="#6844EE" />
        </View>

        <View
          style={styles.shadow}
          className="w-[380px] h-[70px] bg-white rounded-[16px] flex-row  drop-shadow-xl mt-10 justify-center items-center">
          <MaterialCommunityIcons name="math-norm-box" size={50} color="#6844EE" />

          <Text className="text-center text-3xl text-gray-900 font-bold ml-[35px] ">
            Type Equation
          </Text>
          <MaterialIcons name="navigate-next" size={60} color="#6844EE" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
