export const ModelExtra = ({
  title,
  model,
  id,
  handleOpenExtra,
  isOpen,
  isOpenExtra,
}) => {
  return (
    <div className={`model-exptra ${isOpen ? `model-exptra${id}` : ""}`}>
      <div
        onClick={handleOpenExtra}
        className={`model__img ${
          isOpen && `model__img-open model__img-open${id}`
        } model__img${id} ${isOpenExtra && `model__img-extra${id}`}`}
      >
        <div className={`${isOpen ? "block transition-all top-0" : "hidden"}`}>
          <h2 className="model__title model__title-inner">{title}</h2>
          <p className="model__name model__name-inner">{model}</p>
          <p className="w-56">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ipsa!
          </p>
        </div>
      </div>
      <div
        className={`model__texts ${
          isOpen && `texts-open texts-open${id}`
        } model__texts-extra model__texts${id} ${
          isOpenExtra && " texts-open-extra"
        }`}
      >
        <p className="model__title">{title}</p>
        <p className="model__name">{model}</p>
      </div>
    </div>
  );
};
