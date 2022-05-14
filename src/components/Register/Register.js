import { useState } from "react"
import Title from "components/Title/Title"
import s from './Register.module.scss'
import Form from "components/RegisterForm/RegisterForm"
export default function Register() {

    
    
    return (
        <>
            <Title text={'Register to Phonebook'} />
            <Form/>

        </>
    )
}