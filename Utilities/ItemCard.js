import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
function ItemCard({ children, onPress }) {
  return (
    <View
      style={{
        backgroundColor: "#f9ca24",
        borderRadius: 8,
        shadowColor: "#444",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.65,
        shadowRadius: 8,
        elevation: 3,
        margin: 5,
      }}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#c7ecee" }}
        style={({ pressed }) => {
          pressed ? styles.pressed : "";
        }}
      >
        {children}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.25,
  },
});

export default ItemCard;
