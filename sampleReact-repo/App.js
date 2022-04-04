import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ButtonTry from './Trial/ButtonTry';
import HookTry from './Trial/HookTry';
import ListScroolViewRefreshControl from './Trial/ListScrollRefreshControl';
import NavigationTry from './Trial/NavigationPages/NavigationPractice';
import ProopsPractice from './Trial/PropsPractice';

/// indentation shift+option+F

export default function App() {
 
  const onPressHandler = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
  //  <View style={styles.container}>
  //     <StatusBar style="auto" />
  //     <ButtonTry />
  //      <HookTry />
  //      <ListScroolViewRefreshControl /> 
  //      <ProopsPractice
  //        onPressFunction={onPressHandler}
  //        title='Press Me'
  //        style={{ margin: 10 }}
  //      />  
  //      </View>

        <NavigationTry />
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
