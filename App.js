import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/*import Logo from './src/components/Logo';*/
import Form from './src/components/Form/';

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
    </View>/*<Logo/>*/
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
