import rightButton from "../../assets/right.svg";
import styles from "./NavButton.module.css";

const RightNavButton = ({ uniqueId }) => {
  return (
    <button className={`custom-next-${uniqueId} ${styles["nav-button"]}`}>
      <img src={rightButton} alt="Right navigation" />
    </button>
  );
};

export default RightNavButton;
