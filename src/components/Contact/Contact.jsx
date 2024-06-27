const Contact = ({data:{contact,id}, onDelete}) => {
    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick= {()=>{onDelete(id)}}>Delete</button>
        </div>
    )
 };

export default Contact;