import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View 
  } from 'react-native';
import ButtonTry from './Trial/ButtonTry';
import HookTry from './Trial/HookTry';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ButtonTry />
      <HookTry />
    </View>
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
