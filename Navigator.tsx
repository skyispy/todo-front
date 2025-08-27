import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import Header from './components/common/Header';
import LoginScreen from './screens/sign/LoginScreen';
import SignupScreen from './screens/sign/SignupScreen';
import { useState } from 'react';

const SignStack = createStackNavigator();
const SignStackScreen = () => {

  return (
    <SignStack.Navigator>
      <SignStack.Screen name="Login" component={LoginScreen} />
      <SignStack.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          header: () => <Header mode="onlyBack" navigation={navigation} />,
        })}
      />
    </SignStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Main" component={HomeScreen} />
  </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="Main" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const BottomTab = createBottomTabNavigator();
const Navigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <BottomTab.Navigator screenOptions={{ header: () => <Header /> }}>
          <BottomTab.Screen name="Home" component={HomeStackScreen} />
          <BottomTab.Screen name="Profile" component={ProfileStackScreen} />
        </BottomTab.Navigator>
      ) : (
        <SignStackScreen />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
