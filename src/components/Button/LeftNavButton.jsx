import leftButton from "../../assets/left.svg";
import styles from "./NavButton.module.css";

const LeftNavButton = ({ uniqueId }) => {
  return (
    <button className={`custom-prev-${uniqueId} ${styles["nav-button"]} `}>
      <img src={leftButton} alt="Left navigation" />
    </button>
  );
};

export default LeftNavButton;
