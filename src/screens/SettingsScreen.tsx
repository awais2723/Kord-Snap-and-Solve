import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { doSignOut } from '@/firebase/auth';
import { useAuth } from '@/context';
import styles from '@/src/styles';

type Props = object;

const SettingsScreen: React.FC<Props> = (_props: Props) => {
  const { resetAuth } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleConfirmLogout = async () => {
    setIsModalVisible(false);
    await doSignOut();
    resetAuth();
    router.push('/login');
  };

  return (
    <View className="flex flex-col h-full bg-gray-100 p-4">
      <TouchableOpacity
        style={styles.shadow}
        className="border-2 bg-primary border-gray-300 rounded-md py-2 flex flex-row justify-center items-center"
        onPress={() => setIsModalVisible(true)}>
        <Feather name="log-out" size={24} color="#fff" />
        <Text className="text-center text-white font-bold text-xl ml-2">Logout</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View className="flex items-center justify-center h-full">
          <View className="bg-white rounded-2xl p-4" style={styles.shadow}>
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Are you sure you want to logout?
            </Text>
            <View className="flex flex-row justify-end gap-x-4">
              <TouchableOpacity
                className="bg-red-600 py-2 px-4 rounded-md"
                onPress={handleConfirmLogout}>
                <Text className="text-white text-center">Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-gray-300 py-2 px-4 rounded-md text-center"
                onPress={() => setIsModalVisible(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;
