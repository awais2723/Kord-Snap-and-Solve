import { useState, useEffect } from 'react';
import * as Network from 'expo-network';

const useNetworkStatus = (): Network.NetworkState => {
  const [netwrokInfo, setnetwrokInfo] = useState<Network.NetworkState>();

  useEffect(() => {
    const checkNetworkStatus = async () => {
      const networkState = await Network.getNetworkStateAsync();
      setnetwrokInfo(networkState);
    };
    checkNetworkStatus();
  }, []);

  return { ...netwrokInfo };
};

export default useNetworkStatus;
