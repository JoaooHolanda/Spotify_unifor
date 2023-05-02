import insta from "../../assets/images/instagram.png";
import face from "../../assets/images/facebook.png";
import tt from "../../assets/images/twitter.png";
import spoti from "../../assets/images/spotify_black.png";

import "./footerFaq.css";

export default function Footer_faq() {
  return (
    <div class="FooterFaq">
      <hr id="line"></hr>

      <div class="footer content">
        <img src={spoti} alt="spotify"></img>
        <a>© 2023 Spotify, Inc.</a>
        <a class="sociais">
          <img src={insta} alt="insta"></img>
          <img src={face} alt="face"></img>
          <img src={tt} alt="twitter"></img>
        </a>
      </div>
    </div>
  );
}
