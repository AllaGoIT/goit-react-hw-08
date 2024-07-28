import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "To Long!")
    .required("Required"),
});

const initialContacts = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFildId = useId();
  const numberFildId = useId();
  const dispatch = useDispatch();
  // const name = useSelector((state) => state.name);
  // const number = useSelector((state) => state.contacts.items.number);
  // const id = useSelector((state) => state.contacts.items.id);

  // const handleSubmit = () => dispatch(addContact(name, number));
  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   dispatch(addContact(form.elements.initialContacts));

  //   form.reset();
  // };
  return (
    <Formik
      initialValues={initialContacts}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFildId}> Name </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={nameFildId}
        ></Field>
        <ErrorMessage className={css.span} name="name" component="span" />
        <label htmlFor={numberFildId}>Number</label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id={numberFildId}
        ></Field>
        <ErrorMessage className={css.span} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

// id:Date.now(),
// name: actions.target.elements.text.value,
