import css from "./SearchBox.module.css";
const SearchBox = ({value, onSearch}) => {
    return (
        <div>
            <p>Find contacts by name </p>
            <input className={css.input} type="text" value = {value} onChange = {(event) => onSearch(event.target.value)} />
</div>
    )
     
    
 };

export default SearchBox;