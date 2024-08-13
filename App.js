import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Modal, PaperProvider } from "react-native-paper";
import AddGoal from "./components/AddGoal";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const handlePress = () => showModal();

  const removeItem = (item) => {
    const newList = tasks.filter((task) => task.id !== item.id);
    setTasks(newList);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.addTaksButton}>
          <Button
            onPress={handlePress}
            title="Add New Goal"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

        <View style={styles.addTaskView}>
          {tasks.map((item) => (
            <GoalItem key={item.id} removeItem={removeItem} item={item} />
          ))}
        </View>

        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <AddGoal setTasks={setTasks} hideModal={hideModal} />
        </Modal>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#674188",
    flex: 1,
    flexDirection: "column",
    alignItems: "center", // Centers items horizontally
  },
  addTaksButton: {
    width: "70%",
    marginTop: 50,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#B1AFFF",
    padding: 20,
  },
  addTaskView: {
    width: "50%",
  },
});
