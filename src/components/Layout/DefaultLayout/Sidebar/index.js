import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("header-list")}>
          <span className={cx("list")}>List</span>
          <div className={cx("product")}>
            <div className={cx("a")}>a</div>
            <div className={cx("b")}>b</div>
            <div className={cx("d")}>c</div>
            <div className={cx("e")}>e</div>
            <div className={cx("f")}>f</div>
            <div className={cx("g")}>g</div>
            <div className={cx("h")}>h</div>
            <div className={cx("k")}>k</div>
            <div className={cx("l")}>l</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
