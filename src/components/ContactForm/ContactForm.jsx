import { Formik, Form, Field } from "formik";

const initialContacts = {
     name: "",
     number: "" 
}


const ContactForm = (onAdd) => { 


const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
        
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