import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import logo from '../../../assets/imgs/logo.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSigninButtons from '../../components/socialSignInButtons/SocialSigninButtons'
import { useNavigation } from '@react-navigation/native'

function SignInScreen() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 

  const {height} = useWindowDimensions()
  const navigation = useNavigation()

  const onSignInPress = () => {
    navigation.navigate('Home');
  }

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  }

  const onSignUp = () => {
    navigation.navigate('SignUp');
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      <Image source={logo} style={[styles.logo, {height: height*0.4}]} />
      <CustomInput 
        placeholder={"Email"} 
        value={email}
        setValue={setEmail}
            />
      <CustomInput 
      placeholder={"Mot de passe"}
      value={password}
      setValue={setPassword}
      secureTextEntry

      />
      <CustomButton 
      text={'Se connecter'} 
      onPress={onSignInPress}
      type={'PRIMARY'}
      />
      <CustomButton 
      text={'Mot de passe oublié'} 
      onPress={onForgotPasswordPress}
      type={'TERTIARY'}
      />
      <SocialSigninButtons />
      <CustomButton 
      text={'Vous n\'avez pas de compte? Inscrivez-vous'} 
      onPress={onSignUp}
      />
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  logo: {
    width: '100%',
    maxHeight: 300,
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
  }

})


export default SignInScreen