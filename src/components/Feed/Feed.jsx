import "./style.css";
import Beep from "../Beep/Beep";
import avatar from "../../assets/mark-avatar.png";
import imageIcon from "../../assets/image-icon.png";
import clipIcon from "../../assets/clip-icon.png";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="addbeep">
        <img src={avatar} alt="" className="user-avatar" />
        <div className="beeper_input">
          <input type="text" name="" id="" placeholder="What's going on?" />
        </div>
        <img src={imageIcon} alt="" className="addbeep-icon" />
        <img src={clipIcon} alt="" className="addbeep-icon" />
      </div>
      <Beep />
      <Beep />
      <Beep />
    </div>
  );
};
