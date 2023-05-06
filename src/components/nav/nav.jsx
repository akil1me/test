import { Link } from "react-scroll";

import "./nav.scss";

export const Nav = ({ className, classList, classItem, items }) => {
  return (
    <nav className={"nav " + className}>
      <ul className={"nav__list flex items-center " + classList}>
        {items.map((item, i) => (
          <li
            key={item}
            className={
              "list__item hover:opacity-60 transition-opacity " + classItem
            }
          >
            <Link
              className="text-sm"
              to={`${i + 100}`}
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
