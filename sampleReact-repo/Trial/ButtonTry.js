import React from "react";
import { View,Text, Button, Linking, StyleSheet} from "react-native"

const ButtonTry = () => {
  return(
      <View style = {styles.container}>
         <Text>
             Button Click Sample
         </Text>
         <Button
         title=  "Test click here"
         onPress= {() => {Linking.openURL('https://youtube.com/programmingwithmash')}}
         >
         </Button>
      </View>
  )
}
export default ButtonTry;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
