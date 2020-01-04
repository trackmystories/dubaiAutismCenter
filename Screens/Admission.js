import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image, Text,TextInput,StyleSheet } from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import { createStackNavigator } from 'react-navigation-stack'

import Icon from '@expo/vector-icons/Ionicons';


class AdmissionPage extends Component {

    render() {
        return (

                    <ScrollView>



                    <View>


          <View>

          <Text style={{color:'black', marginTop: 20, marginBottom: 6, textAlign: 'center'}}>Admission Process</Text>

          <View>
          <Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 1:  Book an appointment</Text>
          </View>

          <View>
          <Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-contact' style={{marginRight:5, color : 'green',fontSize: 15}}/> 2:  Meet our Admission Coordinator</Text>
          </View>


          <View>
          <Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-cash' style={{marginRight:5, color : 'green',fontSize: 15}}/> 3: Registration form /Autism Assessment Reports / required documents</Text>
          </View>

          <View>
          <Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-hand' style={{marginRight:5, color : 'green',fontSize: 15}}/> 4: Receive Acceptance Letter</Text>
          </View>


          <View>
          <Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-analytics' style={{marginRight:5, color : 'green',fontSize: 15}}/> 5: Payment of Tuition Fees</Text>
          </View>
            <View style={{borderTopColor:"green",  marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <Text style={{paddingHorizontal: 20, fontSize: 12}}>For Admissions, please contact the clinic coordinator:</Text>
          <View style={{paddingHorizontal: 10, width:200 ,marginTop: 20, flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/h.jpg')}/>

          </View>

          <View style={{marginLeft: 15, marginTop: 5}} >

          <Text style={{marginTop: 5, marginBottom: 5, fontSize: 15}}>Mrs. Hala Hassouneh</Text>
          <Text style={{marginTop: 5, marginBottom: 5, fontSize: 10}}><Icon name='md-call' style={{marginRight:5, color : 'green',fontSize: 10}}/>  +971 4 39 86 862 (210)</Text>
          <Text style={{marginTop: 5, marginBottom: 5, fontSize: 10}}>hala@dubaiautismcenter.ae</Text>

          </View>

          </View>

          </View>



          </View>


          <View style={{paddingHorizontal: 20}}>


          <TextInput placeholder="name" clearButtonMode={'always'} onChangeText={() => this.setState({})} style={styles.card2}>
          </TextInput>

          <TextInput placeholder="email" clearButtonMode={'always'} onChangeText={() => this.setState({})} style={styles.card2}>
          </TextInput>

          <TextInput placeholder="number" clearButtonMode={'always'} onChangeText={() => this.setState({})} style={styles.card2}>
          </TextInput>

          <TextInput placeholder="message" clearButtonMode={'always'} onChangeText={() => this.setState({})} style={styles.card3}>
          </TextInput>


                          <TouchableOpacity
                          style={{ alignItems : 'center', backgroundColor: 'grey', marginTop:20, marginBottom: 10,  padding : 5, width: 100, height: 30}}>
                          <Text style={{color: 'white'}}>Submit</Text>
                          </TouchableOpacity>

          </View>


                    </View>



                    </ScrollView>
        )
    }
}



    const Admission  = createStackNavigator ({
      AdmissionPage: {
        screen :  AdmissionPage,
      },
      },
      {
        mode: 'modal',
           headerMode: 'none',
      }
    );

  export default Admission;


  const styles = StyleSheet.create({

card2: { borderWidth: 0.3, width: 300, height: 30, padding: 10, marginTop: 10,marginBottom: 10,backgroundColor:'white', borderColor: 'grey'},
card3: {borderWidth: 0.3, width: 300, height: 40, padding: 10, marginTop: 10, marginBottom: 10, borderColor: 'grey'},

});
