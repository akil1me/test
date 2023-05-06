import cart from "../../assets/images/cart.png";
import account from "../../assets/images/account.png";
import "./area.scss";

export const Area = ({ className }) => {
  return (
    <div className={"area " + className}>
      <button>
        <img src={cart} alt="cart" width={28} height={28} />
      </button>

      <span></span>

      <button>
        <img src={account} alt="account" width={28} height={27} />
      </button>
    </div>
  );
};
