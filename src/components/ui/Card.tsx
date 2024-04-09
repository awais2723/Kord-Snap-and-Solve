/**
 * The Card component is a simple React component that displays a text message in a View component.
 */
import { Text, View } from 'react-native';

type Props = {
  text: string;
};

const Card: React.FC<Props> = ({ text }: Props) => (
  <View>
    <Text className="text-red-500 text-[18px] px-4 text-center">{text}</Text>
  </View>
);

export default Card;
