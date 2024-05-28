import { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = object;

class HeaderContent extends Component<Props> {
  navigation = useNavigation();

  render() {
    return (
      <View className="bg-primary flex flex-row justify-between items-center pt-10 pb-2 px-3 ">
        <TouchableOpacity
          onPress={() => this.navigation.dispatch(DrawerActions.toggleDrawer())}
          className="m-2">
          <FontAwesome name="bars" color="white" size={18} />
        </TouchableOpacity>
        <View className="flex flex-col justify-center items-center">
          <Text className="text-[18px] font-medium text-white text-center">Kord Snap & Solve</Text>
        </View>
        <Image
          className="rounded-full w-10 h-10"
          source={require('../../../assets/images/big_logo.jpeg')}
        />
      </View>
    );
  }
}

export default HeaderContent;
