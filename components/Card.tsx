import React from "react";
import { Text, View } from "react-native";

type Props = {};

const Card: React.FC<Props> = (props: Props) => {
  return (
    <View>
      <Text className="text-red-500 text-[18px] px-4 text-center">
        Open up /app/index.tsx to start working on your app!
      </Text>
    </View>
  );
};

export default Card;
