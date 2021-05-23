import React, { useState } from 'react'
import * as Yup from 'yup'
import firebase from '../database/firebase'
import { StyleSheet, Image, ScrollView, View, Alert } from 'react-native'
import {
	FormField as Field,
	Form,
    FormImagePicker as ImagePicker,
	FormPicker as Picker,
	SubmitButton as Submit,
} from '../components/forms'
//import database from '@react-native-firebase/database'
//import styles from '../config/styles'


const validationSchema = Yup.object().shape({
	images: Yup.array().min(1, 'Please select at least one image'),
	name: Yup.string().required().min(1).label('Pet name'),
	age: Yup.number().required().min(1).max(10000).label('Age'),
	//category: Yup.string().required().nullable().label('Category'),
	description: Yup.string().label('Description')
});

const categories = [
    { label: "Cats", value: 1},
    { label: "Dogs", value: 2},
    { label: "Birds", value: 3},
    { label: "Others", value: 4},
];

const fields = [
    { label: "Adopt", value: 1},
    { label: "Lost", value: 2},
    { label: "Shelter", value: 3},
];


const submitForm = (values) => {
       var firebaseRef = firebase.database().ref();
       firebaseRef.push().set(values);
       Alert.alert("Your pet was added!");
   }

 export default function AddingPet(){
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                
                    <Image style={styles.logo} source={require('../assets/form.png')} />
            <Form
            initialValues={{
                name: "",
                age: "",
                description: "",
                fields: null,
                category: null,
                images: []
            }}

            onSubmit={(Values) => submitForm(Values)}
            validationSchema={validationSchema}>

            
            <ImagePicker name='images' />
            <Field maxLength={255} name="name" placeholder="Pet name" />
            <Field
            keyboardType="numeric"
            maxLength={8}
            name="age"
            placeholder="Age"/>
            <Picker
            items={categories}
            name="category"
            placeholder="Category"
            />
          <Picker
            items={fields}
            name="fields"
            placeholder="Fields"
            />
            <Field
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
            />
            <Submit title = "Post" />
            </Form>
            </ScrollView>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
      width: 400,
      height: 300,
      resizeMode: 'contain',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    scrollView: {
        marginHorizontal: 5,
      },
  });



