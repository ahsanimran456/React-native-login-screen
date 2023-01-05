
import React from 'react';
import 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <KeyboardAvoidingView style={login.block}>
      <View style={login.block}>
        <View style={{ flex: 1, backgroundColor: 'red', }}>
          <ImageBackground style={{ flex: 1 }} source={require('./Assests/Images/loginback.gif')}>
          </ImageBackground>
        </View>
        <View style={login.inputbox}>
          <View>
            <Text style={login.header} >
              User Login
            </Text>
          </View>
          <View style={login.inputs} >
            <TextInput style={[login.textinputs, login.secondtext]} placeholder={"hello"} />
            <TextInput style={[login.textinputs, login.secondtext]} />
            <TouchableOpacity style={{ marginTop: 50, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#7970FD', width: '20%', borderRadius: 10,}}>
              <Text style={{ color: 'yellow',textAlign:"center",fontWeight:'bold' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
};

const login = StyleSheet.create({
  block: {
    flex: 1,
    color: "black"
  },
  inputbox: {
    backgroundColor: "yellow",
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 2,
  },
  inputs: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: 'center',
    zIndex: -1,

  },

  textinputs: {
    borderBottomWidth: 2,
    borderBottomColor: '#7970FD',
    width: '70%',
    color: "black",
    textDecorationLine: 'none',
    padding: 10,

  },
  secondtext: {
    marginTop: 20,


  },
  header: {
    lineHeight: 84,
    color: '#7970FD',
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  }


});

export default App;
