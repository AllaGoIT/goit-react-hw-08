import { Formik, Form, Field } from "formik";
// import { DateSchema } from "yup";
import { nanoid } from 'nanoid';
import { useId } from "react";
// import { number } from "yup";


const initialContacts = {
     name: "",
     number: "" ,
}


const ContactForm = (onAdd) => { 

    const nameFildId = useId();
    const numberFildId = useId();


const handleSubmit = (values, actions) => {
 
    onAdd({...values, id: nanoid()});
    actions.resetForm();
};

    return (
        <Formik initialValues={initialContacts} onSubmit={()=>{handleSubmit}}>
            <Form>
                <label htmlFor={nameFildId}> Name </label>
                <Field type="text" name="name" id = {nameFildId}></Field>
                <label htmlFor={numberFildId}>Number</label>
                <Field type = "text" name = "number" id ={numberFildId}></Field>
                <button type = "submit">Add contact</button>
            </Form>
        
                
        
            </Formik>
    )
};
export default ContactForm;

        // id:Date.now(),
        // name: actions.target.elements.text.value,