import React from 'react'
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './views/Login'
import HomeScreen from './views/Home'
import ArticleListScreen from './views/ArticleList'
import { Alert } from 'react-native'
import { Theme, Button } from 'teaset'
import HeaderButtons from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/Ionicons'

Theme.set(Theme.themes.poetry)

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    ArticleList: ArticleListScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Theme.primaryColor,
      },
      headerTintColor: 'rgb(255,255,255)',
      headerRight: (
        <Button
          onPress={() => Alert.alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
      // headerRight: (
      //   <HeaderButtons
      //     IconComponent={Icon}
      //     OverflowIcon={<Icon name="ios-more" size={23} color="blue" />}
      //     iconSize={23}
      //     color="blue"
      //   >
      //     <HeaderButtons.Item title="add" iconName="ios-search" onPress={() => console.warn('add')} />
      //     <HeaderButtons.Item title="select" onPress={() => console.warn('edit')} />
      //     <HeaderButtons.Item title="select" onPress={() => console.warn('edit')} />
      //   </HeaderButtons>
      // ),
    },
  },
)

export default () => (
  <RootStack />
)
