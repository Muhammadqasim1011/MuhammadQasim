import React from 'react';
import mineImg from '../../assets/mine.png';
import mineCoverDark from '../../assets/banner-02-dark.png';
import mineCoverlight from '../../assets/banner-02-light.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import whatsappIcon from '../../assets/whatsapp.png';
import instagramIcon from '../../assets/instagram.png';
import { Link } from 'react-router-dom';
import './Main.css';
import { useSelector } from 'react-redux';

const Main = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const mineCover = darkMode ? mineCoverDark : mineCoverlight;

  return (
    <div className="hero-content">
      <div className="left">
        <div className="img-box">
          <img className="mine" src={mineImg} alt="Mine" />
          <img className="mine-cover" id="mine-cover" src={mineCover} alt="Cover" />
        </div>
      </div>

      <div className="right">
        <div className="hero-text">
          <h1>
            <span className="pink-clr">Hello I'm </span>
            <span>Muhammad Qasim</span>
          </h1>
          <p>I transform ideas into sleek, user-friendly websites that are visually appealing and easy to navigate. My designs ensure a seamless experience across all devices, combining aesthetics with functionality.</p>
          <p>Let’s build something impactful that not only looks great but also works flawlessly! </p>
        </div>

        <div className="hero-social">
          <p>Follow me on:</p>
          <a href="https://www.linkedin.com/in/muhammad-qasim-a4bb1121b">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://x.com/Muhamma96604403?t=INxyqoYFGxuTcXzvo7T5Zw&amp;s=09">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://github.com/Muhammadqasim1011">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="mailto:akhundqasim1011@gmail.com">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <div className="hero-btn">
          <button className="btns"><Link to="/message" >Message Me</Link></button>
          <button className="btns"><Link to="/message" >Hire Me Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Main;