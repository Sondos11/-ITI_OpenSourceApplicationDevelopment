import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        <Image
          style={{ width: 450, height: 700 }}
          source={{
            uri: "https://images.unsplash.com/photo-1681550809968-ad0c6c6ebbe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}></Image>
        <Image
          style={{ width: 450, height: 700 }}
          source={{
            uri: "https://images.unsplash.com/photo-1681550809968-ad0c6c6ebbe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}></Image>
        <Image
          style={{ width: 450, height: 700 }}
          source={{
            uri: "https://images.unsplash.com/photo-1680798790340-e1ec34621d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}></Image>
        <Image
          style={{ width: 450, height: 700 }}
          source={{
            uri: "https://images.unsplash.com/photo-1680798790215-f826e4e6f94e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}></Image>
        <Image
          style={{ width: 450, height: 700 }}
          source={{
            uri: "https://images.unsplash.com/photo-1680479610487-198fb5d0306e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}></Image>
        <Image
          style={{ width: 450, height: 700 }}
          source={{
            uri: "https://images.unsplash.com/photo-1673367885183-5ddb59563bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}></Image>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
