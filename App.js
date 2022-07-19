import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
