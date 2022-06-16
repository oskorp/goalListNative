import { StyleSheet, TextInput, View, Button , Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function addInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  
  return (
  //  <Modal visible={props.visible} animationType='slide' >
      <View style={styles.innerContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goals"
        onChangeText={addInputHandler}
        value={enteredGoalText}
      />
      <Button
        style={styles.butt}
        title="add goal"
        color="#17d49b"
        onPress={addGoalHandler}
      />
    </View>
  //  </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 5,
    padding: 8,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
