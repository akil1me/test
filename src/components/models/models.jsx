import { Container } from "../container";
import { Model } from "../model";
import "./models.scss";

const items = [
  {
    id: 1,
    title: "1965",
    model: "Hongi CA770",
  },
  {
    id: [10, 20],
    title: ["1968", "1980"],
    model: ["Hongi CA773", "Hongi CA630"],
  },
  {
    id: 3,
    title: "1984",
    model: "Hongi CA760",
  },
  {
    id: 4,
    title: "1998",
    model: "Hongi CA7460",
  },
  {
    id: 5,
    title: "2000",
    model: "Hongi CA7202E3",
  },
  {
    id: 6,
    title: "2013",
    model: "Hongi H7",
  },
];
export const Models = () => {
  return (
    <section className="models" id="100">
      <Container>
        <ul className="models__list">
          {items.map((item) => (
            <Model key={item.id} {...item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
