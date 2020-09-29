import React, { Component } from 'react';
import { Image, Text, Alert, Button, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/src/styles/colors';

export interface LoginState {
  email?: any,
  username: string,
  password: string
}

export default class Login extends Component<{}, LoginState> {
  
  constructor(props: any) {

    super(props);
    
    this.state = {
      username: '',
      password: '',
    };

  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }
  
  onLogin() {

    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);

  }

  render() {

    return (
      <View style={styles.container}>
      <Image 
        resizeMode='contain'
        source={require('../assets/images/icon.png')}
        style={{ alignSelf: 'center', height: 100, marginBottom: 15, marginTop: 60, width: 100 }}
      />
      <Text style={styles.titletext}>Please provide your login details</Text>
        <TextInput
          autoCapitalize='none'
          keyboardType='email-address'
          value={this.state.username}
          onChangeText={(username: string) => this.setState({ username })}
          label='Email'
          style={styles.input}
          theme={{colors: {text: 'black', primary: 'green'}}}
        />
        <TextInput
          autoCapitalize='none'
          value={this.state.password}
          onChangeText={(password: string) => this.setState({ password })}
          label='Password'
          secureTextEntry={true}
          style={styles.input}
          theme={{colors: {text: 'black', primary: 'green'}}}
        />
        
        <Button
          title={'Login'}
          onPress={this.onLogin.bind(this)}
        />
        <Text style={styles.signuptext}>New to Clear Do? Tap here to get started!</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303030',
  },
  input: {
    width: 350,
    height: 55,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  titletext: {
    color: '#FFFFFF',
    width: 250,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    marginBottom: 10,
  },
  signuptext: {
    color: '#FFFFFF',
    width: 350,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 10,
  }
});