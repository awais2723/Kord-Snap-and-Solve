import { View, TouchableOpacity, Image, Text } from 'react-native';

import profile from '../assets/images/profilePlaceholder.jpg';
import gem from '../assets/images/gem.png';
import premium from '../assets/images/premiumPicture.jpg';

const MyProfileScreen = () => (
  <View className="bg-sky-50 flex flex-col flex-1 ">
    <View className=" w-full h-[90px]  p-2 flex-row ">
      <TouchableOpacity>
        <Image source={profile} className="w-[70px] h-[70px] rounded-full" />
      </TouchableOpacity>
      <Text className="text-black font-bold text-2xl ml-[25px] mt-[15px]">Awais</Text>
      <View className=" w-[95px] h-[50] rounded-md ml-[130]  mt-2 p-[2]  flex-row  justify-center items-center border-2  border-primary">
        <Text className="text-black font-bold text-2xl mr-[10] ">10</Text>
        <Image source={gem} className="w-[30px] h-[30px] rounded-full" />
      </View>
    </View>

    <View className="flex-1 ">
      <View className=" justify-center items-center  w-full h-[240px]">
        <Image
          source={premium}
          className="w-[370px] h-[230px] rounded-2xl drop-shadow-2xl mt-5"></Image>
        <TouchableOpacity className=" bg-yellow-300 absolute bottom-5 w-[200px] h-[40] rounded-2xl justify-center items-center">
          <Text className="text-black font-bold text-xl">Upgrade to Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default MyProfileScreen;
