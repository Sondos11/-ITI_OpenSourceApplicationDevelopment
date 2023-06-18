import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import styles from "./styles";
import Box from "./components/Box";

export default function App() {
  const COLORS = [

    { colorName: "Red", hexCode: "#ff0000" },
    { colorName: "Blue", hexCode: "#0000ff" },
    { colorName: "Green", hexCode: "#00ff00" },
    { colorName: "Purple", hexCode: "#800080" },
    { colorName: "Orange", hexCode: "#ffA500" },
    { colorName: "Pink", hexCode: "#FFC0CB" },
    { colorName: "Cyan", hexCode: "#00FFFF" },
    { colorName: "Magenta", hexCode: "#FF00FF" },
    { colorName: "Teal", hexCode: "#008080" },
    { colorName: "Lime", hexCode: "#00FF00" },
    { colorName: "Brown", hexCode: "#A52A2A" },
    { colorName: "Navy", hexCode: "#000080" },
    { colorName: "Maroon", hexCode: "#800000" },
    { colorName: "Olive", hexCode: "#808000" },
    { colorName: "Silver", hexCode: "#C0C0C0" },
    { colorName: "Gold", hexCode: "#FFD700" },
    { colorName: "Indigo", hexCode: "#4B0082" },
    { colorName: "Turquoise", hexCode: "#40E0D0" },
    { colorName: "Lavender", hexCode: "#E6E6FA" },
    { colorName: "Gray", hexCode: "#808080" },
    { colorName: "Black", hexCode: "#000000" },
    { colorName: "White", hexCode: "#FFFFFF" },
    { colorName: "Beige", hexCode: "#F5F5DC" },
    { colorName: "Coral", hexCode: "#FF7F50" },
    { colorName: "Aquamarine", hexCode: "#7FFFD4" },
    { colorName: "Slate", hexCode: "#708090" },
    { colorName: "Chocolate", hexCode: "#D2691E" },
    { colorName: "Violet", hexCode: "#EE82EE" },
    { colorName: "Khaki", hexCode: "#F0E68C" },
    { colorName: "Salmon", hexCode: "#FA8072" },
    
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        
        data={COLORS}
        renderItem={(props) => (
          <Box
            colorName={props.item.colorName}
            hexCode={props.item.hexCode}
          ></Box>
        )}
        keyExtractor={(props) => props.hexCode}
        ListHeaderComponent={
          <Text style={styles.header}>
            Here are some boxes for different color
          </Text>
        }
        ListEmptyComponent={<Text>No Data</Text>}
      ></FlatList>
    </SafeAreaView>
  );
}