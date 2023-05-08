import { useEffect, useState } from "react";
import "./model.scss";
import { ModelExtra } from "./model-extra";

export const Model = ({ id, title, model }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenExtra, setIsOpenExtra] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`${id}`);
      if (Math.abs(Math.floor(element.getBoundingClientRect().top)) > 300) {
        setIsOpen(false);
        setIsOpenExtra(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenExtra = () => {
    setIsOpenExtra(!isOpenExtra);
  };

  return (
    <li className="model" id={`${id}`}>
      {typeof id === "number" ? (
        <div
          className={`model__content model__content${id} ${
            isOpen && `model__content-open${id} `
          }`}
        >
          <div
            onClick={handleOpen}
            className={`model__img ${
              isOpen ? `model__img-open model__img-open${id}` : ""
            } model__img${id}`}
          >
            <div
              className={`${isOpen ? "block transition-all top-0" : "hidden"}`}
            >
              <h2 className="model__title model__title-inner">{title}</h2>
              <p className="model__name model__name-inner">{model}</p>
              <p className="w-56">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsa!
              </p>
            </div>
          </div>
          <div
            className={`model__texts ${
              isOpen && `texts-open texts-open${id}`
            } model__texts${id} `}
          >
            <p className="model__title">{title}</p>
            <p className="model__name">{model}</p>
          </div>
        </div>
      ) : (
        <div className="content-2">
          <ModelExtra
            title={title[0]}
            id={id[0]}
            handleOpenExtra={handleOpen}
            isOpen={isOpen}
            isOpenExtra={isOpenExtra}
            model={model[0]}
          />

          <ModelExtra
            title={title[1]}
            id={id[1]}
            handleOpenExtra={handleOpenExtra}
            isOpen={isOpenExtra}
            isOpenExtra={isOpen}
            model={model[1]}
          />
        </div>
      )}
    </li>
  );
};
