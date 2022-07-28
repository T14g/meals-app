import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === '"android"';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.statusBarStyle}>
          <Text>Search</Text>
        </View>
        <View style={styles.listStyle}>
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
  safeAreaStyle: {
    flex: 1,
  },
  statusBarStyle: {
    padding: 16,
    backgroundColor: "green",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  listStyle: {
    flex: 1,
    backgroundColor: "blue",
  },
});
