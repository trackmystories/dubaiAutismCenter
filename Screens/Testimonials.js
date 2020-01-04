import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image, Text,TextInput,StyleSheet } from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import { createStackNavigator } from 'react-navigation-stack'

class TestimonialsPage extends Component {

    render() {
        return (
          <ScrollView>





          <View >
          <Text style={{color:'black', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>Welcome to Dubai Autism Center, News</Text>
          </View>

          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{ paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/A.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>“A prominent role in raising awareness about Autism“</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>H.E. Saeed Mohammed Al Tayer</Text>
          </View>
          </View>


          </View>

          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{borderTopColor:"green",paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/A1.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>“Great humanitarian efforts provided toward children with Autism”</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>H.H. Sheikh Nahyan bin Mubarak Al Nahyan</Text>
          </View>


          </View>
          </View>


          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{borderTopColor:"green",paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/A2.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>“I am hopeful that the center’s success will continue ”</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>H.E. Shaikha Lubna Al Qasimi</Text>
          </View>


          </View>
          </View>


          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{borderTopColor:"green",paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/B.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>“Encouraging efforts by Dubai Autism Center“</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>H.E. Mohammed Al Gergawi</Text>
          </View>


          </View>
          </View>

          <View style={{borderTopColor:"green", marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{borderTopColor:"green",paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :120, width : 120, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/C.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>“Great efforts in taking care of our children with Autism”</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>H.E. Mohammed Al Merri </Text>
          </View>


          </View>
          </View>

          <View style={{borderTopColor:"green", marginBottom: 20, marginTop : 15, borderBottomColor:"white", borderWidth : .5}}>
          <View style={{borderTopColor:"green",marginBottom: 20, paddingHorizontal: 10, width:200 , flexDirection: "row", justifyContent : 'stretch'}}>

          <View>
          <Image style={{ borderRadius: 10, height :100, width : 100, resizeMode: 'contain', borderRadius : 2, }} source={require('../assets/D.jpg')}/>

          </View>


          <View style={{marginLeft: 30}}>
          <Text style={{ marginTop : 10, fontSize: 10, textAlign: 'center'}}>“So proud and grateful for seeing this great work! Outstanding team, outstanding leadership“</Text>
          <Text style={{marginTop : 10, color: "grey", fontSize: 8, textAlign: 'center' }}>H.E. Reem Al Hashimy</Text>
          </View>


          </View>
          </View>





          </ScrollView>
        )
    }
}



    const Testimonials = createStackNavigator ({
      TestimonialsPage: {
        screen :  TestimonialsPage,
      },
      },
      {
        mode: 'modal',
           headerMode: 'none',
      }
    );

  export default Testimonials;

  const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
