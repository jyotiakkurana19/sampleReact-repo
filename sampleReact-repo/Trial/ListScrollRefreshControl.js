import React,{useState} from "react";
import { StyleSheet,Text,View,ScrollView, RefreshControl } from "react-native";

const ListScroolViewRefreshControl = () => {

    const [Items, setItem] = useState([
        {key: 1 , value: "a"},
        {key: 2 , value: "b"},
        {key: 3 , value: "c"},
        {key: 4 , value: "d"},
        {key: 5 , value: "e"},
        {key: 6 , value: "f"},
        {key: 7 , value: "g"},
        {key: 8 , value: "h"},
        {key: 9 , value: "i"}
    ])
    const [Refreshing, setRefresh] = useState(false)
    const onRefresh = () => {
        setRefresh(true);
        setItem([...Items,{key:10 , value: "added with refresh"}])
        setRefresh(false); 
    }

  return (
   /// <View>
        <ScrollView style = {styles.scrollStyle}
            refreshControl = {
                <RefreshControl
                   refreshing = {Refreshing}  
                   onRefresh = {onRefresh}
                />
            }
            >
       {Items.map((obj) => {
           return(
               <View key={obj.key}>
               <Text style = {styles.textStyle}>{obj.value}</Text>
               </View>
           )
       })}
       </ScrollView>
   /// </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollStyle: {
      
        backgroundColor: 'pink',
        padding:50,
       
      },
      textStyle: {
       // margin: 30,
        backgroundColor: 'yellow',
        padding:10,
       
      },
  });
  
export default ListScroolViewRefreshControl;