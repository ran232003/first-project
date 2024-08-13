import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Card, Text } from "react-native-paper";

const GoalItem = (props) => {
  const { item, removeItem } = props;
  return (
    <Card
      onPress={() => {
        removeItem(item);
      }}
      style={styles.container}
    >
      <Card.Content>
        {/* <Text variant="titleLarge">Card title</Text> */}
        <Text style={styles.textContainer} variant="bodyMedium">
          {item.text}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#88417b",
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
    color: "white",
  },
  textContainer: {
    color: "white",
  },
});
