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
          <Text style={{color:'black', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>Welcome to Dubai Autism Center</Text>
          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>Chairman’s Message.</Text>
          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>"The Source of our concern for special needs people is to give each individual in our society the attention and care they deserve."</Text>
          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>  Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai</Text>
          </View>

          <View>
          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, textAlign: 'center'}}>The Beginning Several years ago.</Text>

          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>a father was struggling to find an answer to his son’s unexplained difficulties.</Text>

          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>It eventually came during a family trip to a shopping mall in Singapore where a stand was set up as part of an awareness campaign. This became his introduction to Autism.</Text>

          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>Back in Dubai, he searched for professional help for children diagnosed with Autism, and found none.</Text>

          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>So he began his campaign to put this right, dedicating his skills and spare time to meeting with government officials and lobbying for the Autism cause. His efforts were finally rewarded in 2001 by a decree to open a specialized Autism center, the Dubai Autism Center.</Text>

          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>The personal experience as a parent had motivated him to work tirelessly, and overcome endless obstacles, to learn more about Autism and use it to help other families in the same situation.</Text>

          <Text style={{color:'grey', marginTop: 6, marginBottom: 6, fontSize: 8, textAlign: 'center'}}>It’s with this same spirit of determination and compassion that he and all the center’s staff and board members continue to work, providing the best possible services to children diagnosed with Autism in the UAE.</Text>
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
