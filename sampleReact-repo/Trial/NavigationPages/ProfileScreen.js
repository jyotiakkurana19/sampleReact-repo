import React from "react";
import {Button, Text, View, StyleSheet} from "react-native"

  const ProfileScreen = ({ navigation, route }) => {  
     //const { name } = route.params;
     const { personName } = route?.params || {};

    const onSelectedItem = () => {
      console.log("onselect clicked")
      navigation.setParams({personName: "new value set"})// set new value to incoming data
      navigation.navigate('Home', { fetchDataFromProfile: "data has come from profile to home" })
      // onPress={() => navigation.popToTop()} // goto top screen
      // navigation.goBack() 
     }

    return (
    <View style = {styles.container}>
      <Text>This is {personName}'s profile</Text>
      
    <Button
         title=  "Press to go back"
           onPress =  {onSelectedItem}
          >
         </Button>

    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'yellow',
      padding: 50,
    }
  })
  export default ProfileScreen;