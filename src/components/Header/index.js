import "./header.css";
import logoSpotify from "../../assets/images/Spotify_logo.svg";
import { Link } from "react-router-dom";

export default function Header({ links }) {
  return (
    <div className="header_conteiner">
      <div className="header_content">
        <img className="logo_img" src={logoSpotify} />

        <div className="header_links_content">
          {links.map((link, index) => {
            return (
              <>
                <Link className="header_links" to={link.link}>
                  {link.label}
                </Link>
                {index !== links.length - 1 && (
                  <div className="line_vertical" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
