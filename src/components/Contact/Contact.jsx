import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div>
        <p className={css.text}>
          <FaUser /> {name}
        </p>
        <p className={css.text}>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
