import { Formik, Form, Field } from "formik";
// import { DateSchema } from "yup";
import { nanoid } from 'nanoid';


const initialContacts = {
     name: "",
     number: "" 
}


const ContactForm = (onAdd) => { 


const handleSubmit = (values, actions) => {
    console.log(values);
    const name = actions.target.elements.text.value;
    onAdd({
        name, id: nanoid()
        // id:Date.now(),
        // name: actions.target.elements.text.value,

    });
    actions.resetForm();
 };
    return (
        <Formik initialValues={initialContacts} onSubmit={()=>{handleSubmit}}>
            <Form>
                <Field type = "text" name = "Name"></Field>
                <Field type = "text" name = "Number"></Field>
                <button type = "submit">Add contact</button>
            </Form>
        
                
        
            </Formik>
    )
};
export default ContactForm;