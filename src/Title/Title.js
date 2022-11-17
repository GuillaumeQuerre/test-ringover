import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
      <Text style={styles.title}>ToDoList</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
