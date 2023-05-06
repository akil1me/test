import { Container } from "../container";
import "./hero.scss";
import heroImg from "../../assets/images/hero.png";

export const Hero = () => {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero__inner">
          <div>
            <h1 className="hero__title">История</h1>
            <p className="hero__model">Hongqi</p>
          </div>

          <img
            className="hero__img"
            src={heroImg}
            alt="Hongqi hero"
            width={619}
            height={285}
          />
        </div>
      </Container>
    </section>
  );
};
