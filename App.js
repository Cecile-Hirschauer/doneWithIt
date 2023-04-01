import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

// import SignInScreen from './src/screens/SigninScreen';
import SignUpScreen from './src/screens/SigninUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/forgotPasswordScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <ForgotPasswordScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});
