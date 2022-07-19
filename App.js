import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
            marginTop: isAndroid ? StatusBar.currentHeight : 0,
          }}
        >
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
