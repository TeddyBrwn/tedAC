import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <input
            placeholder="Search..."
            checkedspell="fasle"
            type="text"
          ></input>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("action")}>
          <div className={cx("info")}>
            <div className={cx("orderStatus")}>
              <a href="#">Order Status</a>
            </div>
            <div className={cx("location")}>
              <a href="#">Find in Store</a>
            </div>
            <div className={cx("contact")}>
              <a href="#">Contact</a>
            </div>
            <a href="#" className={cx("sign-in")}>
              Sign In
            </a>
            <span> / </span>
            <a href="#" className={cx("sign-up")}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
