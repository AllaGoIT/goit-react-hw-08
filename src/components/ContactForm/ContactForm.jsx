import { Formik, Form, Field } from "formik";
// import { DateSchema } from "yup";
import { nanoid } from 'nanoid';
import { useId } from "react";
// import { number } from "yup";


const initialContacts = {
     name: "",
     number: "" 
}


const ContactForm = (onAdd) => { 

    const nameFildId = useId();
    const numberFildId = useId();


const handleSubmit = (values, actions) => {
    console.log(values);
    // const name = initialContacts.text.value;
    onAdd({
        actions, id: nanoid()
        // id:Date.now(),
        // name: actions.target.elements.text.value,

    });
    actions.resetForm();
 };
    return (
        <Formik initialValues={initialContacts} onSubmit={()=>{handleSubmit}}>
            <Form>
                <label htmlFor={nameFildId}> Name </label>
                <Field type="text" name="Name" id = {nameFildId}></Field>
                <label htmlFor={numberFildId}>Number</label>
                <Field type = "text" name = "Number" id ={numberFildId}></Field>
                <button type = "submit">Add contact</button>
            </Form>
        
                
        
            </Formik>
    )
};
export default ContactForm;