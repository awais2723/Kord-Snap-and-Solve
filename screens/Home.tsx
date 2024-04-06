import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Card from "@/components/Card";

type Props = {};

const Home: React.FC<Props> = (props: Props) => {
  return (
    <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
      <StatusBar style="light" />
      <Card />
    </View>
  );
};

export default Home;
