import React from "react";
import { Text } from "react-native";
function CustomText({ fSize, fColor, fMargin, fPadding, children }) {
  return (
    <Text
      style={{
        color: fColor,
        fontSize: fSize,
        margin: fMargin,
        padding: fPadding,
      }}
    >
      {children}
    </Text>
  );
}

export default CustomText;
