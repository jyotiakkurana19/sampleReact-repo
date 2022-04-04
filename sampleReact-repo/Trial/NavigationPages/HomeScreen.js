import { Button, View,Text } from "react-native";
import React,{useState} from "react";


const HomeScreen = ({ navigation, route }) => {
  const { fetchDataFromProfile } = route?.params || {};
  const [getData,setData] = useState('alia')


    return (
        <View>
           <Text>{getData}</Text>
           <Text>Data got from profile is {fetchDataFromProfile}</Text>
      <Button
        title="Go to Jyoti profile"
        onPress={() =>
          navigation.navigate('Profile' 
          , {
             personName: 'Jane',
            })
        }
      />


      </View>
    );
  };

  export default HomeScreen;