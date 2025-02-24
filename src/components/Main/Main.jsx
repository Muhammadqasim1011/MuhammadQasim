import React from 'react';
import mineImg from '../../assets/mine.png';
import mineCoverImg from '../../assets/banner-02-dark.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import whatsappIcon from '../../assets/whatsapp.png';
import instagramIcon from '../../assets/instagram.png';
import { Link } from 'react-router-dom';

const Main = () => {
  const revealForm = () => {
    console.log("Form Revealed"); // Replace this with actual form handling
  };

  return (
    <div className="hero-content">
      <div className="left">
        <div className="img-box">
          <img className="mine" src={mineImg} alt="Mine" />
          <img className="mine-cover" id="mine-cover" src={mineCoverImg} alt="Cover" />
        </div>
      </div>

      <div className="right">
        <div className="hero-text">
          <h1>
            <span className="pink-clr">Hello I'm </span>
            <span>Muhammad Qasim</span>
          </h1>
          <p>
            I can help turn your ideas into real things! I make websites that look good and are easy to use.
            I create beautiful and easy-to-use websites that work well on all devices. Let's make something
            cool together.
          </p>
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
        <li><Link className="btns" to="/message" >Message Me</Link></li>
        <li><Link className="btns" to="/message" >Hire Me Now</Link></li>
        </div>
      </div>
    </div>
  );
};

export default Main;
