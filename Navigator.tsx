import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/home';
import { ProfileScreen } from './screens/profile';
import { Header } from './components/common';
import { SignupScreen, LoginScreen } from './screens/sign';
import { useState } from 'react';

const SignStack = createStackNavigator();
const SignStackScreen = () => {

  return (
    <SignStack.Navigator screenOptions={{
      header: (props) => <Header headerProps={props} />,
    }}>
      <SignStack.Screen name="Login" component={LoginScreen} />
      <SignStack.Screen
        name="Signup"
        component={SignupScreen}
      />
    </SignStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{
      header: (props) => <Header headerProps={props} />,
    }}>
    <HomeStack.Screen name="Main" component={HomeScreen} />
  </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={{
      header: (props) => <Header headerProps={props} />,
    }}>
    <ProfileStack.Screen name="Main" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const BottomTab = createBottomTabNavigator();
const Navigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <BottomTab.Navigator>
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
