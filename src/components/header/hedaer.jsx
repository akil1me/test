import { useEffect, useState } from "react";
import { Area } from "../area";
import { Container } from "../container";
import { Nav } from "../nav";
import "./header.scss";
import { Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Language } from "../language";

const items = [
  "Модели",
  "О компании",
  "Главная",
  "Контакты",
  "Помощь и поддрежка",
  "3D Комната",
];
export const Header = () => {
  const [open, setOpen] = useState(false);

  const [sticky, setSticky] = useState(false);

  const handleSticky = () => {
    if (window.scrollY >= 70) setSticky(true);
    else setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, [sticky]);
  return (
    <header className={`header ${sticky ? "header-sticky" : ""}`}>
      <Container>
        <div className="header__inner flex justify-between items-center">
          <Language />
          <Nav className="hidden md:block" items={items} />
          <Area className="hidden md:flex" />

          <Button
            onClick={() => setOpen(true)}
            className="md:hidden h-auto pt-0 pb-1 relative z-10"
            icon={<MenuOutlined className="text-white align-middle" />}
          ></Button>
        </div>
      </Container>

      <Drawer
        style={{ backgroundColor: "#1e1e1e" }}
        className="md:hidden"
        width={"85%"}
        title={
          <div className="flex justify-end text-white">
            <button onClick={() => setOpen(false)}>
              <CloseOutlined />
            </button>
          </div>
        }
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="flex flex-col items-center">
          <Nav
            items={items}
            setOpen={setOpen}
            className="md:hidden mb-9"
            classList="flex-col"
            classItem="list__item-mobile"
          />
          <Area />
        </div>
      </Drawer>
    </header>
  );
};
