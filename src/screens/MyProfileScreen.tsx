import { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { AuthContext, AuthContextType } from '@/context';
import styles from '@/src/styles';

type Props = object;

class MyProfileScreen extends Component<Props> {
  static contextType = AuthContext;
  declare context: AuthContextType;

  render() {
    const { currentUser } = this.context;

    return (
      <View className="bg-sky-50 flex flex-col flex-1 pt-10">
        <View className="w-full h-20 p-2 flex-row items-center">
          <TouchableOpacity>
            <Image
              source={require('../assets/images/profilePlaceholder.jpg')}
              className="w-14 h-14 rounded-full"
            />
          </TouchableOpacity>
          <Text className="text-black font-bold text-xl ml-4 capitalize">
            {currentUser?.displayName}
          </Text>
          <View className=" w-18 ml-auto mr-2 flex-row items-center border-2 border-primary rounded-md p-1">
            <Text className="text-black font-bold text-lg mr-2">10</Text>
            <Image source={require('../assets/images/gem.png')} className="w-6 h-6" />
          </View>
        </View>

        <View className="flex-1 items-center">
          <View style={styles.shadow} className="w-11/12 h-48 mt-5">
            <Image
              source={require('../assets/images/premiumPicture.jpg')}
              className="w-full h-full rounded-2xl shadow-2xl"
            />
            <TouchableOpacity className="bg-yellow-300 absolute bottom-3 w-48 h-8 rounded-2xl justify-center items-center self-center">
              <Text className="text-black font-bold text-lg">Upgrade to Premium</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default MyProfileScreen;
