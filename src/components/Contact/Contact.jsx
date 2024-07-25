import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteContact } from "../../redux/contactSlice";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.text}>
          {" "}
          <FaUser /> {name}
        </p>
        <p className={css.text}>
          {" "}
          <FaPhone /> {number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
