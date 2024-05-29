import { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import { Text, Modal, View, TouchableOpacity } from 'react-native';

import { AuthRouteProvider } from '@/providers';
import useNetworkStatus from '@/src/hooks/useNetworkStatus';
import styles from '@/src/styles';

export default function RouteLayout() {
  const { isConnected, type, isInternetReachable } = useNetworkStatus();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  useEffect(() => {
    if (isConnected && type && isInternetReachable) {
      setIsModalVisible(true);
    }
  }, [isConnected, type, isInternetReachable]);

  return (
    <AuthRouteProvider>
      <Slot />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View className="flex items-center justify-center h-full">
          <View className="bg-white rounded-2xl p-4" style={styles.shadow}>
            <Text className="text-2xl underline text-center font-bold text-gray-800 mb-4">
              Cutom Hook
            </Text>
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Network Coonected: {isConnected ? 'Yes' : 'No'}
            </Text>
            <Text className="text-xl font-bold text-gray-800 mb-4">Type: {type}</Text>
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Reachable: {isInternetReachable ? 'Yes' : 'No'}
            </Text>
            <View className="flex flex-row justify-end gap-x-4">
              <TouchableOpacity
                className="bg-gray-300 py-2 px-4 rounded-md text-center"
                onPress={() => setIsModalVisible(false)}>
                <Text>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </AuthRouteProvider>
  );
}
