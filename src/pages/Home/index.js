import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("content")}>
          <span>header</span>
        </div>
      </div>
    </div>
  );
}
export default Home;
