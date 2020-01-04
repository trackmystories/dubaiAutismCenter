import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image, Text,TextInput,StyleSheet } from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import { createStackNavigator } from 'react-navigation-stack'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import Icon from '@expo/vector-icons/Ionicons';


let datesWhitelist = [
  {
    start: moment(),
    end: moment().add(3, 'days'), // total 4 days enabled
  },
];
let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled

class CalenderPage extends Component {

    render() {
        return (
          <SafeAreaView>

          <ScrollView>









          <View>


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

<View>
<Text style={{textAlign: 'center',marginTop: 20}}>March 20</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 26, 2nd term end for children</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 26, 2nd term end for staff</Text>
</View>

<View>
<Text style={{textAlign: 'center',marginTop: 20}}>April 20</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 12, 3rd term starts for Staff</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 13, 3rd term starts for children</Text>
</View>

<View>
<Text style={{textAlign: 'center',marginTop: 20}}>July 20</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 2, 3rd term end for children</Text>
<Text style={{color:'grey', marginTop: 20, marginBottom: 6, textAlign: 'center'}}><Icon name='md-calendar' style={{marginRight:5, color : 'green',fontSize: 15}}/> 9, 3rd term end for staff</Text>
</View>


<Text style={{textAlign: 'center',fontSize: 10, marginTop: 8,color:'grey',}}>* – All Islamic holidays are subject to change as per lunar calendar</Text>
</View>




          </View>



          </ScrollView>


          </SafeAreaView>
        )
    }
}



    const Calender = createStackNavigator ({
      CalenderPage: {
        screen :  CalenderPage,
      },
      },
      {
        mode: 'modal',
           headerMode: 'none',
      }
    );

  export default Calender;

  const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
