import React, { Component } from 'react'
import { ScrollView, SafeAreaView, View, TouchableOpacity, Image, Text,TextInput,StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

class ChairmanPage extends Component {

    render() {
        return (
          <SafeAreaView>

          <View style={{ height :250, width : null, resizeMode: 'contain', borderRadius : 2}}  initialPage={0}>
          <View>
          <Image style={{ height :250, width : null, resizeMode: 'contain', borderRadius : 2}} source={require('../assets/Chairman.jpg')}/>
          </View>

          </View>


          <View>
          <Text style={{color:'black', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>Welcome to Dubai Autism Center</Text>
          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>Chairman’s Message.</Text>
          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>"The Source of our concern for special needs people is to give each individual in our society the attention and care they deserve."</Text>
                    <Text style={{color:'grey', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>  Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dub</Text>
          </View>

          </SafeAreaView>
        )
    }
}



    const Chairman = createStackNavigator ({
      ChairmanPage: {
        screen :  ChairmanPage,
      },
      },
      {
        mode: 'modal',
           headerMode: 'none',
      }
    );

  export default Chairman;

  const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
