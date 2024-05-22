import { View, Text } from 'react-native';

const labelViewStyle = 'ml-6 py-2 -my-2 rounded-3xl bg-black-700';
const labelTextStyle = 'text-white text-center';

export const HomeLabel = () => (
  <View className={labelViewStyle}>
    <Text className={labelTextStyle}>Home</Text>
  </View>
);

export const AccountLabel = () => (
  <View className={labelViewStyle}>
    <Text className={labelTextStyle}>Account</Text>
  </View>
);

export const SettingsLabel = () => (
  <View className={labelViewStyle}>
    <Text className={labelTextStyle}>Settings</Text>
  </View>
);
