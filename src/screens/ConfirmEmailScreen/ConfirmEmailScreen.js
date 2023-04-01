import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import logo from '../../../assets/imgs/logo.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSigninButtons from '../../components/socialSignInButtons/SocialSigninButtons'

function ConfirmEmailScreen() {
  const [code, setCode] = useState('') 
  
  const {height} = useWindowDimensions()

  const onConfirmPress = () => {
    console.warn('Confirm')
  }
  
  const onResendCodePress = () => {
    console.warn('Resend code')
  }

  const OnSigninPress = () => {
    console.warn('Sign in')
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      <Image source={logo} style={[styles.logo, {height: height*0.3}]} />
      <Text style={styles.title}>
        Confirmer votre adresse email
      </Text>
      <CustomInput
        placeholder={"Code de confirmation"}
        value={code}
        setValue={setCode}
        
      />
      <CustomButton 
      text={'Confirmer'} 
      onPress={onConfirmPress}
      type={'PRIMARY'}
      bgColor={'#FF914D'}
      />
      <CustomButton 
      text={'Renvoyer le code'} 
      onPress={onResendCodePress}
      type={'SECONDARY'}
      fgColor={'#FF914D'}
      bdColor={'#FF914D'}
      />
      <CustomButton 
      text={'Retour à la connexion'} 
      onPress={OnSigninPress}
      type={'TERCIARY'}
      fgColor={'gray'}
      />  
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    maxHeight: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 5,
  },
  text: {
    color: 'gray',
    marginHorizontal: 10,
  },
  link: {
    color: '#f14688',
  }

})


export default ConfirmEmailScreen