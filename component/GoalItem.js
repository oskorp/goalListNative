import {StyleSheet,View,Text,Pressable} from 'react-native';
function GoalItem(props){
return (
   <Pressable android_ripple={{color:'black'}} onPress={props.onDeleteItem.bind(this,props.id)}>
      <View style={styles.goalItem}>
      <Text style={styles.item}>{props.text}</Text>
    </View>
   </Pressable>
  );
}


export default GoalItem;

const styles = StyleSheet.create(
    {
        goalItem: {
            margin: 8,
            padding: 8,
            borderRadius: 7,
            backgroundColor: "#17d49b",
          },
          item: {
            color: "white",
            textAlign: "center",
          },
    }
)
