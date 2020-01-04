import React, { Component } from 'react';
import { Text,TextInput, View, StyleSheet, ScrollView, Image, Button, TouchableOpacity, Platform} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './Home'
import Expo from 'expo';



class WelcomePage extends Component  {



        render (){



        return (
          <View style={styles.container}>

            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
              <View style={styles.welcomeContainer}>
              <Image
              source={{ "url": "https://www.dubaiautismcenter.ae/wp-content/uploads/2018/09/logo_64.png"}}
              style={styles.welcomeImage}
              />
              </View>

              <View style={{justifyContent: "center", alignItems: "center", padding: 10}}>


              <Text style={{fontSize:10}}>Welcome to Dubai Autism Center</Text>




              <Text style={{textAlign:'center',fontSize:10, marginTop:40}} >Founded in 2001, Dubai Autism Center is the largest, most innovative, and comprehensive nonprofit organization in the United Arab Emirates serving children with Autism Spectrum Disorders.</Text>

              </View>
              <View style={{ justifyContent: "center"}}>

                            <View style={{paddingHorizontal: 20, marginTop: 8, justifyContent: 'center', alignItems: 'center'}}>


                           <View style={styles.nameContainer}>
                           <TextInput
                           placeholder="Email"
                           onChangeText={(email) => this.setState({email})}
                           autoCorrect={false}
                           autoCaptilization={false}
                           style={styles.card}
                           >
                           </TextInput>
                           </View>


                           <View style={styles.nameContainer}>
                           <TextInput
                           placeholder="Password"
                           secureTextEntry={true}
                           onChangeText={(password) => this.setState({password})}
                           autoCorrect={false}
                           autoCaptilization={false}
                           style={styles.card}
                           >
                           </TextInput>



                           <TouchableOpacity
                           onPress={() => this.props.navigation.navigate('Dashboard')}
                           style={{
                             alignItems : 'center',
                             backgroundColor: 'grey',
                             marginTop:20,
                             marginBottom: 10,
                             padding : 5,
                             width: 100, height: 30}}>
                           <Text style={{color: 'white'}}>sign in</Text>
                           </TouchableOpacity>




                           <TouchableOpacity
                           onPress={() => this.props.navigation.navigate('Dashboard')}
                           style={{
                             alignItems : 'center',
                             backgroundColor: 'grey',
                             marginTop:20,
                             marginBottom: 10,
                             padding : 5,
                             width: 100, height: 30}}>
                           <Text style={{color: 'white'}}>sign up</Text>
                           </TouchableOpacity>


                           </View>
                           </View>





                          <View style={{marginTop: 10}}>

                          <Button
                          title="Login as guest"
                          color="#3b5998"
                          accessibilityLabel="Continue as Login"
                          onPress={() => this.props.navigation.navigate('Dashboard')}
                          />
                          </View>




                          </View>



                        </ScrollView>


                      </View>
                );
              }
            }

            const styles = StyleSheet.create({

              container: {
                flex: 1,
                backgroundColor: '#fff',
              },
              contentContainer: {
                paddingTop: 30,
              },
              welcomeContainer: {
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 20,
              },
              welcomeImage: {
                width: 50,
                height: 50,
                resizeMode: 'contain',
                marginTop: 3,
                marginLeft: -10,
              },
              Button: {
                alignItems : 'center',
                backgroundColor: 'grey',
                padding : 10,
                width: 150,
              },
              nameContainer: {
                flex: 1,
                padding:10,
                width :200,
                alignItems: 'center'
              },
              card: {
                borderWidth: 0.5,
                borderRadius: 1,
                width: 380,
                height: 40,
                padding: 10,
                borderColor: 'grey'
            }
            })



            const  Welcome = createStackNavigator({
            WelcomePage: { screen: WelcomePage},
            Home: { screen: Home},
            },{ mode: 'modal', headerMode: ''});


            export default createAppContainer(Welcome);
