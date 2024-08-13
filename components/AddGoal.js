import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const AddGoal = (props) => {
  const [text, setText] = React.useState("");
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };
  const { hideModal, setTasks } = props;
  const addTask = () => {
    setTasks((prevTask) => {
      const id = generateId();
      const newTask = { id: id, text: text };
      return [...prevTask, newTask];
    });
    hideModal();
  };
  return (
    <View>
      <TextInput
        label="Goal"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <View style={styles.buttonContainer}>
        <View>
          <Button mode="contained" onPress={addTask}>
            Save
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button mode="contained" onPress={() => hideModal()}>
            Cancel
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddGoal;
const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10, // Optional: Add some margin above the buttons
  },
  buttonWrapper: {
    marginLeft: 10,
  },
});
