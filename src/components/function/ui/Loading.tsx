/**
 * The Loading component is a simple React component that displays loading.
 */
import { ActivityIndicator, View } from 'react-native';

type Props = object;

const Loading: React.FC<Props> = (_props: Props) => (
  <View className="flex-1 justify-around">
    <ActivityIndicator size="large" color="blue" />
  </View>
);

export default Loading;
