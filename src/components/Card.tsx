/**
 * The Card component is a simple React component that displays a text message in a View component.
 */
import { Text, View } from 'react-native';

const Card = () => (
  <View>
    <Text className="text-red-500 text-[18px] px-4 text-center">
      Open up /app/index.tsx to start working on your app!
    </Text>
  </View>
);

export default Card;
