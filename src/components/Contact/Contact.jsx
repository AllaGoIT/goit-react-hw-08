import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div>
            <p> <FaUser/> {name}</p>
            <p> <FaPhone/> {number}</p>
            <button onClick= {()=>{onDelete(id)}}>Delete</button>
        </div>
    )
 };

export default Contact;