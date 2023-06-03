import React,{useState} from 'react';
import {SafeAreaView,View,StyleSheet,Text,StatusBar,} from 'react-native';
import Item from './components/item';
import { LinearGradient } from 'expo-linear-gradient';
import { Data,rows,columns} from './data';

const  getdimension =(id)=>{
    let row; 
    let col;
    for (let j =0;j<8;j++){{
          if(id<=rows[j]){
            row=j-1
            break
          }
      }
    }
    for (let j =0;j<8;j++){
      if(columns[j].includes(id)){
        col=j
        break
      }
    }
    return [row,col]
}

const App = () => {
  const [data,setData] = useState(Data);
  const [turn,setturn] = useState("2");

  
  const move = (from ,to)=>{
    setData(prev=>{

      prev[to-1].armer = from.armer
      prev[from.key-1].armer=""
      return [...prev]
    })

    setturn(pre=>pre=="2"?"1":"2")
  }
  
  const hundelMove = (from, to)=>{
    const [row,col] = getdimension(from.key)
    let enemy;
    if(from.armer[1]=='2'){
      enemy = '1';
    }else{
      enemy = '2';
    }
    let avelabel=[];
    function retcol(x,y){
      if(x<0||y<0||x>7||y>7){
        return from.key
      }else {
        return columns[x][y]
      }
    }
    if(from.armer[0]=="j"){ 
      for(let i=col-1;i>=0;i--){
        if(data[retcol(i,row)-1].armer==""){
          avelabel.append(retcol(i,row))
        }else if(data[retcol(i,row)-1].armer[1]==enemy){
          avelabel.append(retcol(i,row));
          break;
        }else{
          break;
        }
      }
      for(let i=col+1;i<=7;i++){
        if(data[retcol(i,row)-1].armer==""){
          avelabel.append(retcol(i,row))
        }else if(data[retcol(i,row)-1].armer[1]==enemy){
          avelabel.append(retcol(i,row));
          break;
        }else{
          break;
        }
      }
      for(let i=row-1;i>=0;i--){
        if(data[retcol(col,i)-1].armer==""){
          avelabel.append(retcol(col,i))
        }else if(data[retcol(col,i)-1].armer[1]==enemy){
          avelabel.append(retcol(col,i));
          break;
        }else{
          break;
        }
      }
      for(let i=row+1;i<=7;i++){
        if(data[retcol(col,i)-1].armer==""){
          avelabel.append(retcol(col,i))
        }else if(data[retcol(col,i)-1].armer[1]==enemy){
          avelabel.append(retcol(col,i));
          break;
        }else{
          break;
        }
      }
    }else if(from.armer[0]=="f"){
      for(let i=col+1, j=row+1; i<=7&&j<=7 ;i++,j++){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }

      for(let i=col-1, j=row+1; i>=0&&j<=7 ;i--,j++){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }
      for(let i=col+1, j=row-1; i<=7&&j>=0 ;i++,j--){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }
      for(let i=col-1, j=row-1; i>=0&&j>=0 ;i--,j--){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }

    }else if(from.armer[0]=="h"){
      if(data[retcol(col-2,row-1)-1].armer[1] == enemy||data[retcol(col-2,row-1)-1].armer==""){
        avelabel.push(retcol(col-2,row-1))
      }
      if(data[retcol(col-1,row-2)-1].armer[1] == enemy||data[retcol(col-1,row-2)-1].armer==""){
        avelabel.push(retcol(col-1,row-2))
      }
      if(data[retcol(col+2,row+1)-1].armer[1] == enemy||data[retcol(col+2,row+1)-1].armer==""){
        avelabel.push(retcol(col+2,row+1))
      }
      if(data[retcol(col+1,row+2)-1].armer[1] == enemy||data[retcol(col+1,row+2)-1].armer==""){
        avelabel.push(retcol(col+1,row+2))
      }
      if(data[retcol(col-1,row+2)-1].armer[1] == enemy||data[retcol(col-1,row+2)-1].armer==""){
        avelabel.push(retcol(col-1,row+2))
      }
      if(data[retcol(col+2,row-1)-1].armer[1] == enemy||data[retcol(col+2,row-1)-1].armer==""){
        avelabel.push(retcol(col+2,row-1))
      }
      if(data[retcol(col+1,row-2)-1].armer[1] == enemy||data[retcol(col+1,row-2)-1].armer==""){
        avelabel.push(retcol(col+1,row-2))
      }
      if(data[retcol(col-2,row+1)-1].armer[1] == enemy||data[retcol(col-2,row+1)-1].armer==""){
        avelabel.push(retcol(col-2,row+1))
      }
    }else if(from.armer[0]=="m"){
      for(let i=col-1;i>=0;i--){
        if(data[retcol(i,row)-1].armer==""){
          avelabel.append(retcol(i,row))
        }else if(data[retcol(i,row)-1].armer[1]==enemy){
          avelabel.append(retcol(i,row));
          break;
        }else{
          break;
        }
      }
      for(let i=col+1;i<=7;i++){
        if(data[retcol(i,row)-1].armer==""){
          avelabel.append(retcol(i,row))
        }else if(data[retcol(i,row)-1].armer[1]==enemy){
          avelabel.append(retcol(i,row));
          break;
        }else{
          break;
        }
      }
      for(let i=row-1;i>=0;i--){
        if(data[retcol(col,i)-1].armer==""){
          avelabel.append(retcol(col,i))
        }else if(data[retcol(col,i)-1].armer[1]==enemy){
          avelabel.append(retcol(col,i));
          break;
        }else{
          break;
        }
      }
      for(let i=row+1;i<=7;i++){
        if(data[retcol(col,i)-1].armer==""){
          avelabel.append(retcol(col,i))
        }else if(data[retcol(col,i)-1].armer[1]==enemy){
          avelabel.append(retcol(col,i));
          break;
        }else{
          break;
        }
      }
      for(let i=col+1, j=row+1; i<=7&&j<=7 ;i++,j++){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }

      for(let i=col-1, j=row+1; i>=0&&j<=7 ;i--,j++){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }
      for(let i=col+1, j=row-1; i<=7&&j>=0 ;i++,j--){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }
      for(let i=col-1, j=row-1; i>=0&&j>=0 ;i--,j--){
        if(data[columns[i][j]-1].armer==""){
          avelabel.append(columns[i][j])
        }else if(data[columns[i][j]-1].armer[1]==enemy){
          avelabel.append(columns[i][j]);
          break
        }else{
          break
        }
      }
    }else if(from.armer[0]=="M"){
      if(data[retcol(col-1,row-1)-1].armer[1] == enemy||data[retcol(col-1,row-1)-1].armer==""){
        avelabel.push(retcol(col-1,row-1))
      }
      if(data[retcol(col+1,row-1)-1].armer[1] == enemy||data[retcol(col+1,row-1)-1].armer==""){
        avelabel.push(retcol(col+1,row-1))
      }
      if(data[retcol(col+1,row+1)-1].armer[1] == enemy||data[retcol(col+1,row+1)-1].armer==""){
        avelabel.push(retcol(col+1,row+1))
      }
      if(data[retcol(col-1,row+1)-1].armer[1] == enemy||data[retcol(col-1,row+1)-1].armer==""){
        avelabel.push(retcol(col-1,row+1))
      }
      if(data[retcol(col+1,row)-1].armer[1] == enemy||data[retcol(col+1,row)-1].armer==""){
        avelabel.push(retcol(col+1,row))
      }
      if(data[retcol(col-1,row)-1].armer[1] == enemy||data[retcol(col-1,row)-1].armer==""){
        avelabel.push(retcol(col-1,row))
      }
      if(data[retcol(col,row+1)-1].armer[1] == enemy||data[retcol(col,row+1)-1].armer==""){
        avelabel.push(retcol(col,row+1))
      }
      if(data[retcol(col,row-1)-1].armer[1] == enemy||data[retcol(col,row-1)-1].armer==""){
        avelabel.push(retcol(col,row-1))
      }
      
    }else if(from.armer[0]=="d"){
      let choose = enemy=="2"?1:-1
      if(data[retcol(col,row+1*choose)-1].armer == ""){        
          avelabel.push(retcol(col,row+1*choose))
          if(data[retcol(col,row+2*choose)-1].armer == ""){
            avelabel.push(retcol(col,row+2*choose))
          }
      }
      if(data[retcol(col-1,row+1*choose)-1].armer[1] == enemy){
        avelabel.push(retcol(col-1,row+1*choose))
      }
      if(data[retcol(col+1,row+1*choose)-1].armer[1] == enemy){
        avelabel.push(retcol(col+1,row+1*choose))
      }
    }
    if(avelabel.includes(to)){
      move(from,to)
    }
  }
  const hundelPress = (id)=>{
    if(data[id-1].armer[1]==turn){
      setData(temp=>{
        for(let i =0;i<temp.length;i++){
          temp[i].from = 0
        }
        temp[id-1].from = 1;
        return [...temp]
      });
    }else if(data.some(d=> d.from != 0)){
      const pos = data.filter((e)=>e.from==1)[0]
      hundelMove(pos,id)
      
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={turn=="2"?['blue', 'red']:['red','blue']}
        style={styles.background}
      />
      <View style={styles.cont}>
        {data.map(e=>{
          return <Item data={e} key={e.key} hundelPress={hundelPress} all={data}/>
        })}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    position:"relative",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  cont:{
    width:360,
    // maxWidth:350,
    height:400,
    flexDirection:"row-reverse",
    flexWrap:"wrap",
    overflow:"hidden"
  },
});
export default App;