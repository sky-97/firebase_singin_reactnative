import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAguepvGJKDtjE6EW_4o88FYAZiSvk6VUQ",
  authDomain: "react-firebase-c121d.firebaseapp.com",
  databaseURL: "https://react-firebase-c121d.firebaseio.com",
  projectId: "react-firebase-c121d",
  storageBucket: "react-firebase-c121d.appspot.com",
  messagingSenderId: "746055787887",
  appId: "1:746055787887:web:b3026c69a5714cce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => { 
                 console.log(user);
           });
} catch (error) {
      console.log(error.toString(error));
    }
  };
  Login = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.email);
      });
} catch (error) {
      console.log(error.toString(error));
    }
  };
  
render() {
  return (
    <Container>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input autoCapitalize="none" autoCorrect={false}
          onChangeText={email => this.setState({ email })}
           />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button full rounded success onPress={() => this.LogIn(this.state.email, this.state.password)}>
          <Text>Login</Text>
        </Button>

        <Button full rounded succes onPress={() => this.SignUp(this.state.email, this.state.password)}> 
       
        <Text>Signup</Text>
              </Button>
      </Form>
    </Container>
  );
}
}
const styles = StyleSheet.create({
  Container : {
    flex : 1,
    backgroundColor : "#fff",
    alignItems: "center"

  }
})