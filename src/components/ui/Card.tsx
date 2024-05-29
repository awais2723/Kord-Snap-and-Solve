/**
 * The Card component is a simple React component that displays a text message in a View component.
 */
import { Component } from 'react';
import { Text, View } from 'react-native';

type Props = {
  text: string;
};

class Card extends Component<Props> {
  render() {
    const { text } = this.props;
    return (
      <View>
        <Text className="text-red-500 text-[18px] px-4 text-center">{text}</Text>
      </View>
    );
  }
}

export default Card;
