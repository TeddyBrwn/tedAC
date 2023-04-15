import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  return (
    <div className={cx("search")}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        checkedspell="fasle"
        type="text"
      ></input>
      <button className={cx("search-btn")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
