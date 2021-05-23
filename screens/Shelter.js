import React, { useState } from 'react'
import * as Yup from 'yup'
import { StyleSheet, Image, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native'
import HeaderCard from '../components/HeaderCard.js'
import PetCard from '../components/PetCard.js'
import PetsDetails from './PetsDetails.js'
import OptionsCard from '../components/OptionsCard.js'
import firebase from '../database/firebase';

 export default function Shelter({navigation})
 {
    const [details,setDetails] = useState([
       {  title: 'Golden Retriever', img:'1', age:'Age',  body:'Description' , key: '1'  },
       {  title: 'Labrador', img:'2' , age:'Age',  body:'Description' , key: '2'  },
       {  title: 'Dog\'s Breed', img:'3', age:'Age',  body:'Description' , key: '3'  },

    ]);

    const [options,setOptions]  = useState([
        {  title: 'Dogs',  key: '1'  },
        {  title: 'Cats', key: '2'  },
        {  title: 'Birds',  key: '3'  },
        {  title: 'Others',  key: '4'  }
     ]);

     const images ={
         imag: {
            '1': require('../assets/golden.png'),
            '2': require('../assets/labrador.png'),
            '3': require('../assets/dog.png'),
         }
     };
    
    return (
        <View >
        <HeaderCard>
            <Image style={styles.logo} source={require('../assets/profil.png')} />
            <Text style={styles.userName}>
                @User!
            </Text>
            <Text style={styles.userLocation}>
                @Location!
            </Text>
            <FlatList
                horizontal={true}
                data={options}
                renderItem={({item}) => (
                <TouchableOpacity >
                    <OptionsCard>
                    <Text styles={styles.optionsText}>
                            {item.title}
                    </Text>
                    </OptionsCard>
                </TouchableOpacity>
            )}
        />
        </HeaderCard>

        <FlatList
            data={details}
            renderItem={({item}) => (
                <TouchableOpacity >
                   <PetCard>
                   <Image style={styles.logo2} source={images.imag[item.img]}/>            
                   <Text style={styles.titleText}> {item.title}
                    </Text> 
                    <Text style={styles.description}>
                        Taking care of a pet is my favourite, it helps me to ....
                    </Text>
                   </PetCard>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}

const styles=StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 2,
      },
      logo2:{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 2,
      },
    optionsText: {
        color: '#fff',
        fontSize: 70,
        fontWeight: 'bold'
  
    },
    userName:{
      color: '#500cb0',
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginHorizontal: 120,
      marginVertical: -80,
    
    }, 
    userLocation:{
        color: '#7f4bc9',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop:90,
        paddingLeft:120,
      }, 
   
    titleText:{
      color: '#43167a',
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft:155,
      marginVertical:-150,
    },
    description: {
        color: '#7f4bc9',
        fontSize: 14,
        fontWeight: 'bold',
        height:100,
        marginVertical:180,
        paddingLeft:160,
    }

})