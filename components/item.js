import {StyleSheet,View,Pressable,Text} from "react-native"

const Item = ({data,hundelPress,all}) => (
    <Pressable style={[styles.item,{backgroundColor:all[data.key -1].from==1?"red":data.color}]} onPress={()=>hundelPress(data.key)}>
       {data.armer !== "" && (          
            <Text style={[styles.title,{backgroundColor:data.armer[1] ==1?"red":"blue"}]}>{data.armer}</Text>
        )}
    </Pressable>
);

const styles = StyleSheet.create({
    item: {
        height:50,
        width:45,
        maxHeight:50,
        maxWidth:45,
        alignItems:"center",
        justifyContent:"center"
    },
    title: {
        color:"white",
        textAlign:"center",
        fontSize: 22,
    },
})
export default Item;