import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faChartColumn,
  faList,
  faRightFromBracket,
  faSliders,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faObjectGroup,
  faHeart,
  faComment,
  faFileLines,
} from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("list")}>
          <div className={cx("list_top_left")}>
            <div className={cx("Dasboard")}>
              <FontAwesomeIcon icon={faChartColumn} />
              <span>Dasboard</span>
            </div>
            <div className={cx("Discover")}>
              <FontAwesomeIcon icon={faList} />
              <span>Discover</span>
            </div>
            <div className={cx("Tickets")}>
              <FontAwesomeIcon icon={faFileLines} />
              <span>Tickets</span>
            </div>
            <div className={cx("Favorite")}>
              <FontAwesomeIcon icon={faHeart} />
              <span>Favorite</span>
            </div>
            <div className={cx("Messages")}>
              <FontAwesomeIcon icon={faComment} />
              <span>Messages</span>
            </div>
            <div className={cx("Transaction")}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              <span>Transaction</span>
            </div>
          </div>
          <div className={cx("Discount")}>
            <h2>50% Discount!</h2>
            <span className={cx("Discount-text")}>
              Get best discount on certain days and don't miss it
            </span>
            <button className={cx("Discount-btn")}>Explore Now !!</button>
          </div>
          <div className={cx("list_bottom_left")}>
            <div className={cx("Settings")}>
              <FontAwesomeIcon icon={faSliders} />
              <span>Settings</span>
            </div>
            <div className={cx("Log out")}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
