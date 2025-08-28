import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import type { SignStackScreenProps, } from '../../types';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  const stackNav = useNavigation<SignStackScreenProps>();

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { marginTop: 100 }]}>
        <Text style={styles.label}>아이디</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <TouchableOpacity
        style={styles.button}
        // onPress={test}
      >
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>아이디 찾기</Text>
        <View style={styles.separator} />
        <Text style={styles.linkText}>비밀번호 찾기</Text>
        <View style={styles.separator} />
        <Text
          onPress={() => stackNav.navigate('Signup')}
          style={styles.linkText}
        >
          회원가입
        </Text>
      </View>
    </View>
  );
}

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
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  linkText: {
    // color: '#6A49E9',
    color: 'gray',
    fontWeight: 'bold',
  },
  separator: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
});
