import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/Title'
import ToDoList from './src/ToDoList'
import AddItemButton from './src/AddItemButton'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <ToDoList/>
      <AddItemButton/>
      <StatusBar style="auto" />
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
