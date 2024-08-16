import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import RootNavigation from './navigation';



export default function App() {

  const list = new Array(100).fill("Hello World");

  return (
   <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  }
});
