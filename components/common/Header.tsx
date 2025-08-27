import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons/';
import { StackNavigationProp } from '@react-navigation/stack';

const Header = ({
  mode,
  navigation,
}: {
  mode?: 'onlyBack' | 'none';
  navigation?: StackNavigationProp<any, string, undefined> | undefined;
}) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: top }]}>
      {mode === 'onlyBack' && (
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default Header;
