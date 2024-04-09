import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HeaderContent = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-gray-800 flex flex-row justify-between items-center pt-10 pb-2 px-3">
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        className="m-2">
        <FontAwesome name="bars" color="white" size={18} />
      </TouchableOpacity>
      <View className="flex flex-col justify-center items-center">
        <Text className="text-[16px] font-medium text-white text-center">Kord Snap & Solve</Text>
        <Text className="text-[10px] font-bold text-white text-center">Hello World</Text>
      </View>
      <Image
        className="rounded-full w-10 h-10"
        source={require('@/src/assets/images/favicon.png')}
      />
    </View>
  );
};

export default HeaderContent;
