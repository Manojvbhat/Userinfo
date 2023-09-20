import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [userdata,setuserdata]=useState();
  useEffect(()=>{
    makeAPIcall();
  },[]);
  async function makeAPIcall()
  {
    try{
      const response=await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
    const data=response.data;
    setuserdata(data);
    console.log(data);
 
    }catch(error){console.log(error);}
    
    
  }
  
  
  return (
    <View style={styles.container}>
      {userdata?(
        <View style={styles.profile}>
          {/* Image view */}
          <View style={styles.image}>

          <Image source={{uri:userdata.results[0].picture.large}} 
          style={{width:200,height:200,borderRadius:15}}
          ></Image>
          </View>

          {/* user info*/}
          {/* Manoj Bhat */}
          <View style={styles.userinfo}> 
            <View  style={styles.name}>

          <Text style={styles.firstname} >{userdata.results[0].name.first}</Text>
          <Text style={styles.lastname}>{userdata.results[0].name.last}</Text>
            </View>
            <Text style={styles.info}><Text style={styles.label}>Gender:</Text> {userdata.results[0].gender}</Text>
            <Text style={styles.info}><Text style={styles.label}>Ph:</Text> {userdata.results[0].phone}</Text>
            <Text style={styles.info}><Text style={styles.label}>Age:</Text> {userdata.results[0].dob.age}</Text>
            <Text style={styles.info}><Text style={styles.label}>Country:</Text> {userdata.results[0].location.country}</Text>
            <Text style={styles.info}><Text style={styles.label}>State:</Text> {userdata.results[0].location.state}</Text>
          </View>

      </View>
      )
      :
      (<Text>Loading...</Text>)}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    backgroundColor:'#b8b8ff',
    borderRadius:8,
    shadowColor:'black',
    elevation:20,
  },
  firstname:{
    fontSize:20,
    fontWeight:'bold',
    marginRight: 5,
    
  },
  lastname:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:5,
  },
  image:{
    padding:20,

  },
  userinfo:{
    flexDirection:'column',
    paddingTop:20,
    marginRight:30,
   
  },
  info:{
    marginVertical:6,
    fontSize:15,
  },
  name:{
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  label:{
    fontWeight:'500'
  },
  
});
