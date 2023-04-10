import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("header-list")}>
          <span>List</span>
        </div>
        <div className={cx("product")}>
          <div className={cx("a")}>a</div>
          <div className={cx("b")}>b</div>
          <div className={cx("c")}>c</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
