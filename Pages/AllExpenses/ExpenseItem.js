import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import CustomText from "../../Utilities/CustomText";
import ItemCard from "../../Utilities/ItemCard";
import EditExpense from "../EditExpenseScreen/EditExpense";

function ExpenseItem({ item }) {
  const navigation = useNavigation();
  function itemPressHandler() {
    navigation.navigate("toEditExpenseScreen", { itemData: item });
  }
  const backToDate = new Date(item.id);
  const dateString = backToDate.toDateString();
  return (
    <ItemCard onPress={itemPressHandler}>
      <View style={styles.itemCardContainer}>
        <View style={styles.descriptionContainer}>
          <CustomText
            style={styles.textStyles}
            fColor="white"
            fSize={18}
            fMargin={4}
          >
            {dateString}
          </CustomText>
          <CustomText fColor="white" fSize={16} fMargin={4}>
            {item.description}
          </CustomText>
          <CustomText fColor="white" fSize={18} fMargin={4}>
            {item.date}
          </CustomText>
        </View>

        <View style={styles.amountContainer}>
          <ItemCard onPress={itemPressHandler}>
            <CustomText fColor="white" fSize={18} fMargin={4}>
              {`Amount ${item.amount}$`}
            </CustomText>
          </ItemCard>
        </View>
      </View>
    </ItemCard>
  );
}

const styles = StyleSheet.create({
  itemCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyles: {
    color: "white",
  },
  descriptionContainer: {
    marginVertical: 30,
    alignItems: "center",
    color: "white",
    justifyContent: "space-between",
  },
  amountContainer: {},
});

export default ExpenseItem;
