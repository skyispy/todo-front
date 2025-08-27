import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SignStackScreenProps } from '../../types';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const stackNav = useNavigation<SignStackScreenProps>();
  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.inputContainer, { marginTop: 100 }]}>
          <Text style={styles.label}>아이디</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>비밀번호</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>비밀번호 확인</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => stackNav.navigate('Login')}
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#6A49E9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignupScreen;
