import { Container } from "../container";
import "./footer.scss";
import logo from "../../assets/images/logo.png";
import { Language } from "../language";
import { Nav } from "../nav";
import { Link } from "react-scroll";

const items = ["News", "Support", "Investors", "Confidence"];

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div>
            <img
              className="mx-auto"
              src={logo}
              alt="logo"
              width={157}
              height={306}
            />
            <p className="footer__logo mt-7 text-center text-4xl">HONGQI</p>
          </div>

          <div className="footer__content flex justify-between items-center">
            <Nav items={items} />
            <Language />
          </div>

          <Link
            to="top"
            className="footer__scroll text-center"
            spy={true}
            smooth={true}
            offset={-500}
            duration={1000}
          >
            <span>⟩⟩</span>
            <p>Полёт в начало</p>
          </Link>
        </div>
      </Container>
    </footer>
  );
};
