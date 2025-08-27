import type { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type TabParamList = {
  Home: undefined;
  Profile: undefined;
}

export type TabNavigationProps = BottomTabNavigationProp<TabParamList>


type SignStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type SignStackScreenProps = StackNavigationProp<SignStackParamList>;

type HomeStackParamList = {
  Main: undefined;
};

export type HomeStackScreenProps = StackNavigationProp<HomeStackParamList>;

type ProfileStackParamList = {
  Main: undefined;
};

export type ProfileStackScreenProps = StackNavigationProp<ProfileStackParamList>;
