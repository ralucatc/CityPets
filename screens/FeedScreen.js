import React, { useState } from 'react'
import * as Yup from 'yup'
import { StyleSheet, Image, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native'
import HeaderCard from '../components/HeaderCard.js'
import PetCard from '../components/PetCard.js'
import PetsDetails from '../screens/PetsDetails.js'
import OptionsCard from '../components/OptionsCard.js'

 export default function FeedPet({navigation}){
    const [details,setDetails] = useState([
       {  title: 'Pet1', rating: 5, body: 'lorem ipsum', key: '1'  },
       {  title: 'Pet2', rating: 5, body: 'lorem ipsum', key: '2'  },
       {  title: 'Pet3', rating: 5, body: 'lorem ipsum', key: '3'  }
    ]);

    const [options,setOptions]  = useState([
        {  title: 'Dogs',  key: '1'  },
        {  title: 'Cats', key: '2'  },
        {  title: 'Birds',  key: '3'  },
        {  title: 'Others',  key: '4'  }
     ]);

    return (
        <View syle={styles.container}>
        <HeaderCard>
            <Image style={styles.logo} source={require('../assets/profile.jpg')} />
            <Text style={styles.userName}>
                @User!
            </Text>
            <Text >
                @ULocation!
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
                   <Text styles={styles.titleText}>
                        {item.title}
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
        borderRadius:10,
      },
    optionsText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
  
    },
    userName:{
      color: '#500cb0',
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginHorizontal: 120,
      marginVertical: -80,
      

    }
})