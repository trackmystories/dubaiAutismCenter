import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image, Text,TextInput,StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

class NewsPage extends Component {

    render() {
        return (
          <ScrollView>





          <View >
          <Text style={{color:'black', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>Welcome to Dubai Autism Center, News</Text>
          </View>

          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{ paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/2.png')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>DAC’s Clinic announces the provision of 25 assessment tools</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>DAC presents interactive activities at AccessAbilities Expo</Text>
          </View>
          </View>


          </View>

          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{borderTopColor:"green",paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/1.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>DAC’s Clinic announces the provision of 25 assessment tools</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>Ms. Sara Ahmad Baker, head of community service department at the Dubai Autism Center</Text>
          </View>


          </View>
          </View>


          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{borderTopColor:"green",paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/3.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>ENOC Funds New Occupational Therapy Wing at DAC</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>Under the sponsorship of Emirates National Oil Company (ENOC), Dubai Autism Center (DAC) </Text>
          </View>


          </View>
          </View>





          </ScrollView>
        )
    }
}



    const News = createStackNavigator ({
      NewsPage: {
        screen :  NewsPage,
      },
      },
      {
        mode: 'modal',
           headerMode: 'none',
      }
    );

  export default News;

  const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
