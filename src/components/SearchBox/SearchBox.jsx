import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = (e) => dispatch(changeFilter(e.target.value));
  return (
    <div>
      <p>Find contacts by name </p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
