import "./style.css";
import Container from "@mui/material/Container";
import { HiDotsVertical } from "react-icons/hi";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";

import { container } from "./style";

import beepImg from "../../assets/beep/display_img.png";
import avatar from "../../assets/beep/avatar.png";
import checkmark from "../../assets/checkmark.png";
import reply from "../../assets/reply-icon.png";
import rebeep from "../../assets/rebeep-icon.png";
import dislike from "../../assets/dislike-icon.png";
import like from "../../assets/like-icon.png";
import share from "../../assets/share-icon.png";

export default function Beep() {
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      transition={pageAnimation.transition}
      className="beep"
    >
      <div className="header">
        <div className="beeper-info">
          <img src={avatar} alt="" />
          <div className="beeper_name">
            <p>
              <span>Mark Peter</span>
              <span>
                <span>@markpetr</span>
                <img src={checkmark} className="check" alt="chatbeeper logo" />
              </span>
            </p>
            <p>1 hour ago</p>
          </div>
        </div>
        <HiDotsVertical />
      </div>

      <img src={beepImg} className="beep-img" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie
        ultrices non non elementum vel. Varius amet euismod ut tortor...{" "}
        <span>see more</span>
      </p>
      <div className="engage">
        <div className="engage_buttons">
          <div className="engagement">
            <img src={reply} alt="" />
            <p>230</p>
          </div>
          <div className="engagement">
            <img src={rebeep} alt="" />
            <p>230</p>
          </div>
          <div className="engagement">
            <img src={dislike} alt="" />
            <p>230</p>
          </div>
          <div className="engagement">
            <img src={like} alt="" />
            <p>230</p>
          </div>
        </div>
        <img src={share} alt="" />
      </div>
    </motion.div>
  );
}
