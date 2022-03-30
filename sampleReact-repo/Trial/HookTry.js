
import React,{useState} from "react";
import { View,Text, Button, Linking, StyleSheet} from "react-native"

const HookTry = () => {
   
   const [name,setName] = useState('alia')
   const [sessin, setSession] = useState({number: 6,title: 'state'})
    const onClickMethod = () => {
       setName('new alia')
    }

  return(
      <View style = {styles.container}>
         <Text>
            {name}
         </Text>
         <Button
         title=  "Test click here"
         onPress =  {onClickMethod}
         >
         </Button>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default HookTry;