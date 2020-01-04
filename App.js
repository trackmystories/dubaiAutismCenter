import React, {Component} from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { StyleSheet, ScrollView,SafeAreaView , Image, Platform} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/Ionicons';
import Home from './Screens/Home'
import TabBarIcon from './Screens/components/TabBarIcon';
import Diagnosis from './Screens/Diagnosis'
import Admission from './Screens/Admission'
import Assessment from './Screens/Assessment'
import News from './Screens/News'
import Calender from './Screens/Calender'
import Testimonials from './Screens/Testimonials'
import Chairman from './Screens/Chairman'
import Welcome from './Screens/Welcome'

export default class App extends Component {
render (){
return <AppNavigator />;
}
}


Home.navigationOptions = {tabBarLabel: 'Autism', tabBarIcon: ({ focused }) => (
<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-home' style={{fontSize: 24}}/>
),
};

Diagnosis.navigationOptions = {tabBarLabel: 'Diagnosis', tabBarIcon: ({ focused }) => (
<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-contact' style={{fontSize: 24}}/>
),
};

Assessment.navigationOptions = {tabBarLabel: 'Assessment', tabBarIcon: ({ focused }) => (
<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-document' : 'md-document'}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-document' style={{fontSize: 24}}/>
),
};

Admission.navigationOptions = {tabBarLabel: 'Admission', tabBarIcon: ({ focused }) => (
<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contract' : 'md-contract'}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-contract' style={{fontSize: 24}}/>
),
};

News.navigationOptions = {tabBarLabel: 'News', tabBarIcon: ({ focused }) => (
<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-journal' : 'md-journal'}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-journal' style={{fontSize: 24}}/>
),
};


Calender.navigationOptions = {tabBarLabel: 'Calender', tabBarIcon: ({ focused }) => (
<Icon name='md-calendar' style={{marginRight:5, color: "grey", fontSize: 25}}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-calendar' style={{marginRight:5,fontSize: 25}}/>
),
};


Testimonials.navigationOptions = {tabBarLabel: 'Calender', tabBarIcon: ({ focused }) => (
<Icon name='md-calendar' style={{marginRight:5,fontSize: 25}}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-checkbox' style={{marginRight:5,fontSize: 25}}/>
),
};

Chairman.navigationOptions = {tabBarLabel: 'Calender', tabBarIcon: ({ focused }) => (
<Icon name='md-information' style={{marginRight:5,fontSize: 25}}/>
),
drawerIcon : ({tintColor})=>(
<Icon name='md-information' style={{marginRight:5,fontSize: 25}}/>
),
};



const CustomDrawerContentComponent = props => (
<ScrollView>
<SafeAreaView  forceInset={{ top: 'always', horizontal: 'never' }}>
<Image style={styles.welcomeImage}  source={{"url" : "https://www.dubaiautismcenter.ae/wp-content/uploads/2018/09/logo_64.png"}}/>
<DrawerNavigatorItems {...props} />
</SafeAreaView>
</ScrollView>
);


const DashboardTabNavigator = createBottomTabNavigator({
  Home,
  Assessment,
  Admission,
  Calender,
  News,
 },
{navigationOptions : ({ navigation }) => {
const {routeName} = navigation.state.routes[navigation.state.index];
return { headerTitle : routeName };
}});


const DashboardStackNavigator = createStackNavigator({DashboardTabNavigator : DashboardTabNavigator}, {defaultNavigationOptions : ({ navigation }) => {
return { headerLeft : (
<Icon style={{ paddingLeft : 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30}/>
)};
}});

const AppDrawerNavigator = createDrawerNavigator({
Dashboard: { screen : DashboardStackNavigator },
Home: { screen : Home},
Diagnosis: { screen : Diagnosis},
Assessment: { screen : Assessment},
Admission: { screen : Admission},
Calender: { screen : Calender},
Testimonials: { screen : Testimonials},
Chairman : { screen : Chairman},
News: { screen : News},
},
{initialRouteName: 'Dashboard', drawerPosition: 'left', contentComponent: CustomDrawerContentComponent, drawerOpenRoute: 'DrawerOpen', drawerCloseRoute: 'DrawerClose', drawerToggleRoute: 'DrawerToggle', contentOptions : { activeTintColor : '#0099ff'}
});

const AppSwitchNavigator = createSwitchNavigator({

Welcome: { screen: Welcome},
Dashboard : {screen: AppDrawerNavigator }
});

const AppNavigator = createAppContainer(AppSwitchNavigator);




const styles = StyleSheet.create({
welcomeImage: {width: 50, height: 50, resizeMode: 'contain', marginTop: 3, marginLeft: 50}
})
