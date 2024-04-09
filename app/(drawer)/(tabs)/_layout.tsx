import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type TabBarIcon = {
  focused: boolean;
  color: string;
  size: number;
};

const HomeIcon = ({ focused, color, size }: TabBarIcon) => (
  <FontAwesome size={focused ? size + 5 : size} name="home" color={color} />
);

const SettingsIcon = ({ focused, color, size }: TabBarIcon) => (
  <FontAwesome size={focused ? size + 3 : size} name="camera" color={color} />
);

const TabLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#f2f2f2',
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
      },
    }}>
    <Tabs.Screen
      name="home"
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: HomeIcon,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          backgroundColor: '#1f2937',
          borderRadius: 20,
          borderTopColor: 'transparent',
          height: 58,
          width: '95%',
          left: '2.5%',
          right: '2.5%',
        },
      }}
    />
    <Tabs.Screen
      name="scan"
      options={{
        tabBarLabel: 'Scan',
        tabBarIcon: SettingsIcon,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          backgroundColor: '#1f2937',
          borderRadius: 20,
          borderTopColor: 'transparent',
          height: 58,
          width: '95%',
          left: '2.5%',
          right: '2.5%',
        },
      }}
    />
  </Tabs>
);

export default TabLayout;
