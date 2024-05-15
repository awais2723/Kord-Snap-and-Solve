import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';

type TabBarIcon = {
  focused: boolean;
  color: string;
  size: number;
};

const HomeIcon = ({ focused, color, size }: TabBarIcon) => (
  <FontAwesome size={focused ? size + 15 : size + 8} name="home" color={color} />
);

const historyIcon = ({ focused, color, size }: TabBarIcon) => (
  <MaterialIcons size={focused ? size + 10 : size + 8} name="history" color={color} />
);

const MeIcon = ({ focused, color, size }: TabBarIcon) => (
  <AntDesign size={focused ? size + 7 : size} name="meh" color={color} />
);
const tutor = ({ focused, color, size }: TabBarIcon) => (
  <Ionicons size={focused ? size + 7 : size} name="chatbox" color={color} />
);

const TabLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#6844EE',
      tabBarLabelStyle: {
        fontSize: 15,
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
          backgroundColor: 'white',
          borderRadius: 10,
          borderTopColor: 'transparent',
          height: 58,
          width: '95%',
          left: '2%',
          right: '2%',
        },
      }}
    />
    <Tabs.Screen
      name="askMe"
      options={{
        tabBarLabel: 'Ask Me',
        tabBarIcon: tutor,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          backgroundColor: 'white',
          borderRadius: 10,
          borderTopColor: 'transparent',
          height: 58,
          width: '95%',
          left: '2.5%',
          right: '2.5%',
        },
      }}
    />

    <Tabs.Screen
      name="history"
      options={{
        tabBarLabel: 'History',
        tabBarIcon: historyIcon,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          backgroundColor: 'white',
          borderRadius: 10,
          borderTopColor: 'transparent',
          height: 58,
          width: '95%',
          left: '2.5%',
          right: '2.5%',
        },
      }}
    />
    <Tabs.Screen
      name="myProfile"
      options={{
        tabBarLabel: 'Me',
        tabBarIcon: MeIcon,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          backgroundColor: 'white',
          borderRadius: 10,
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
