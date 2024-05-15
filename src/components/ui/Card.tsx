/**
 * The Card component is a simple React component that displays a text message in a View component.
 */
import { Text, View } from 'react-native';

type Props = {
  text: string;
};

const Card: React.FC<Props> = ({ text }: Props) => (
  <View>
    <Text className=" text-white text-bold text-4xl text-center">{text}</Text>
  </View>
);

export default Card;
