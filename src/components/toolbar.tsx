import Image from "next/image";
import Logo from "../../public/image/logo.svg";
import Cart from "../../public/image/cart.svg";
import User from "../../public/image/user.svg";
import styles from "@/styles/ToolBar.module.css";
import Link from "next/link";

interface Props {
  onClick: () => void;
}

const ToolBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={Logo} alt="Logo" width={100} height={30} />
      </div>
      <div className={styles.menuContainer}>
        <label className={styles.menuText}>Plans</label>
        <label className={styles.menuText}>Recharge</label>
        <label className={styles.menuText}>Rates</label>
        <label className={styles.menuText}>Offer</label>
        <label className={styles.menuText}>Help</label>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.logoContainer}>
          <Link onClick={props.onClick} href="">
            <Image
              src={Cart}
              alt="cart"
              width={20}
              height={20}
              className={styles.logo}
            />
          </Link>
          <Image
            src={User}
            alt="cart"
            width={20}
            height={20}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <label className={styles.menuText}>Sign In</label>
      </div>
    </div>
  );
};

export default ToolBar;
