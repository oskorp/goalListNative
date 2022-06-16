import { StatusBar } from "expo-status-bar";
import { useState, map } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const[modalIsVisible,setModalIsVisible] = useState();
  const [courseGoals, setCourseGoal] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function addDeleteGoalHandler(id){
setCourseGoal((currentCourseGoals)=>{
  return currentCourseGoals.filter((goal)=>goal.id!=id);
})
  }
  // function deleteGoalHandler(id){
  //   setCourseGoal(currentCourseGoals.filter((goal)=>goal.id != id));
  // }
  return (
    <View style={styles.appContainer}>
      <Button color='red' title="Hustle Kar lavde" onPress={startAddGoalHandler}/>
<GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
    <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={addDeleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "white",

    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
