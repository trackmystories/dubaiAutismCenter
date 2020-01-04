import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image, Text,TextInput,StyleSheet } from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import { createStackNavigator } from 'react-navigation-stack'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import Icon from '@expo/vector-icons/Ionicons';
import Diagnosis from './Diagnosis'
import Admission from './Admission'
import Assessment from './Assessment'
import News from './News'
import Calender from './Calender'
import Testimonials from './Testimonials'
import Chairman from './Chairman'

let datesWhitelist = [
  {
    start: moment(),
    end: moment().add(3, 'days'), // total 4 days enabled
  },
];
let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled

class HomePage extends Component {

    render() {
        return (
          <SafeAreaView>

          <ScrollView>

          <ViewPager style={{ height :250, width : null, resizeMode: 'contain', borderRadius : 2}}  initialPage={0}>
          <View key="1">
          <Image style={{ height :250, width : null, resizeMode: 'contain', borderRadius : 2}} source={require('../assets/Slide1.jpg')}/>
          </View>
          <View key="2">
          <Image style={{ height :250, width : null, resizeMode: 'contain', borderRadius : 2}} source={require('../assets/Slide2.jpg')}/>
          </View>
          <View key="3">
          <Image style={{ height :250, width : null, resizeMode: 'contain', borderRadius : 2}} source={require('../assets/Slide3.jpg')}/>
          </View>
          </ViewPager>





          <View>
          <Text style={{color:'black', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>Welcome to Dubai Autism Center</Text>
          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>Founded in 2001, Dubai Autism Center is the largest, most innovative, and comprehensive nonprofit organization in the United Arab Emirates serving children with Autism Spectrum Disorders.</Text>
          </View>




          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <Text style={{color:'black', marginTop: 20, marginBottom: 6, textAlign: 'center'}}>NEWS</Text>
          </View>

          <ScrollView style={{ marginTop: 15, paddingHorizontal : 10}} horizontal={true}>

          <View style={{ marginRight:10, backgroundColor: "white", borderRadius: 10, height :180, width : 150}}>
          <Image style={{ borderRadius: 10, height :150, width : 150, resizeMode: 'contain', borderRadius : 2}} source={require('../assets/1.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8 }}>DAC’s Clinic announces the provision of 25 assessment tools</Text>
          </View>

          <View style={{ marginRight:10, backgroundColor: "white", borderRadius: 10, height :180, width : 150}}>
          <Image style={{ borderRadius: 10, height :150, width : 150, resizeMode: 'contain', borderRadius : 2}} source={require('../assets/2.png')}/>
          <Text style={{fontSize:8, paddingHorizontal:8 }}>DAC presents interactive activities at AccessAbilities Expo</Text>
          </View>

          <View style={{ marginRight:10, backgroundColor: "white", borderRadius: 10, height :180, width : 150}}>
          <Image style={{ borderRadius: 10, height :150, width : 150, resizeMode: 'contain', borderRadius : 2}} source={require('../assets/3.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8 }}>ENOC Funds New Occupational Therapy Wing at DAC</Text>
          </View>


          </ScrollView>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Calender')} >
          <Text style={{marginTop: 10, textAlign: 'center', color:'blue', }}>View all articles ></Text>
          </TouchableOpacity>



          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <Text style={{color:'black', marginTop: 20, marginBottom : 20, marginBottom: 6, textAlign: 'center'}}> Chairman's Message </Text>

          <View style={{paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/Chairman.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>"The Source of our concern for special needs people is to give each individual in our society the attention and care they deserve"</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai </Text>
          </View>


          </View>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Chairman')} >
          <Text style={{marginTop: 10, textAlign: 'center', color:'blue', }}>View Chairmans Message ></Text>
          </TouchableOpacity>
          </View>


        <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>


    <View style={{marginTop: 10, flex: 1 }}>
    <CalendarStrip
    calendarAnimation={{ type: 'sequence', duration: 30 }}
    daySelectionAnimation={{
      type: 'border',
      duration: 200,
      borderWidth: 1,
      borderHighlightColor: 'white',
    }}
    style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
    calendarHeaderStyle={{ color: 'white' }}
    calendarColor={'#7743CE'}
    dateNumberStyle={{ color: 'white' }}
    dateNameStyle={{ color: 'white' }}
    highlightDateNumberStyle={{ color: 'yellow' }}
    highlightDateNameStyle={{ color: 'yellow' }}
    disabledDateNameStyle={{ color: 'grey' }}
    disabledDateNumberStyle={{ color: 'grey' }}
    datesWhitelist={datesWhitelist}
    datesBlacklist={datesBlacklist}
    iconContainer={{ flex: 0.1 }}
  />
</View>


<View>

<Text style={{color:'black', marginTop: 20, marginBottom: 6, textAlign: 'center'}}> Events 2019—2020</Text>

<View>
<Text style={{textAlign: 'center',marginTop: 20}}>August 19th</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 25, 1st day for staff</Text>
</View>


<View>
<Text style={{textAlign: 'center',marginTop: 20}}>September 19</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 1, 1st day for children</Text>
</View>

<View>
<Text style={{textAlign: 'center',marginTop: 20}}>December 19</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 17, 1st term end for children</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 18, 1st term end for staff</Text>
</View>

<View>
<Text style={{textAlign: 'center',marginTop: 20}}>January 20</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 5, 2nd term starts for staff</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 6, 2nd term starts for children</Text>
</View>

<TouchableOpacity onPress={() => this.props.navigation.navigate('Calender')} >
<Text style={{textAlign: 'center', color:'blue', }}>See the full calendar ></Text>
</TouchableOpacity>



</View>


<View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
<Text style={{color:'black', marginTop: 20, marginBottom: 6, textAlign: 'center'}}>TESTIMONIALS</Text>




          <ScrollView style={{ marginTop: 15, paddingHorizontal : 10}} horizontal={true}>

          <View style={{ marginRight:10,  width : 100}}>
          <Image style={{ borderRadius: 10, height :100, width : 100, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/A1.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4 }}>H.H. Sheikh Nahyan bin Mubarak Al Nahyan</Text>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4}}>“Great humanitarian efforts provided toward children with Autism”</Text>
          </View>

          <View style={{ marginRight:10,  width : 100}}>
          <Image style={{ borderRadius: 10, height :100, width : 100, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/B.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4 }}>H.E. Mohammed Al Gergawi</Text>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4}}>“Encouraging efforts by Dubai Autism Center“</Text>
          </View>


          <View style={{ marginRight:10,  width : 100}}>
          <Image style={{ borderRadius: 10, height :100, width : 100, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/A2.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4 }}>H.E. Shaikha Lubna Al Qasimi</Text>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4}}>“I am hopeful that the center’s success will continue ”</Text>
          </View>



          <View style={{ marginRight:10,  width : 100}}>
          <Image style={{ borderRadius: 10, height :100, width : 100, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/A.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4 }}>H.E. Saeed Mohammed Al Tayer</Text>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4}}>“A prominent role in raising awareness about Autism“</Text>
          </View>

          <View style={{ marginRight:10,  width : 100}}>
          <Image style={{ borderRadius: 10, height :100, width : 100, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/E.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4 }}>Her Highness Sheikha Latifa bint Mohammed bin Rashid Al Maktoum</Text>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4}}>“The Dubai Autism Centre’s commitment to this...</Text>
          </View>



          <View style={{ marginRight:10,  width : 100}}>
          <Image style={{ borderRadius: 10, height :100, width : 100, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/C.jpg')}/>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4 }}>H.E. Mohammed Al Merri</Text>
          <Text style={{fontSize:8, paddingHorizontal:8, marginTop: 4}}>“Great efforts in taking care of our children with Autism” </Text>
          </View>



          </ScrollView>


          <TouchableOpacity onPress={() => this.props.navigation.navigate('Testimonials')} style={{marginTop: 15,}}>
          <Text style={{textAlign: 'center', color:'blue', }}>See All Testimonials ></Text>
          </TouchableOpacity>
          </View>




          </View>



          </ScrollView>


          </SafeAreaView>
        )
    }
}



    const Home = createStackNavigator ({
      HomePage: {screen :  HomePage},
      Diagnosis: {screen :  Diagnosis},
      Admission: {screen :  Admission},
      Assessment: {screen :  Assessment},
      News: {screen :  News},
      Calender: {screen :  Calender},
      Testimonials: {screen :  Testimonials},
      Chairman: {screen :  Chairman},
      },
      {
        mode: 'modal',
           headerMode: 'none',
      }
    );

  export default Home;

  const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
