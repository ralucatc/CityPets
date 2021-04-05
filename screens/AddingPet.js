import React, { useState } from 'react'
import * as Yup from 'yup'
import { StyleSheet, Image, ScrollView, View } from 'react-native'
import {
	FormField as Field,
	Form,
    FormImagePicker as ImagePicker,
	FormPicker as Picker,
	SubmitButton as Submit,
} from '../components/forms'
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
                category: null,
                images: []
            }}
            onSubmit={(Values) => console.log("yay")}
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



