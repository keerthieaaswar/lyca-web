import React, {Fragment, useState, useEffect} from "react";
import styles from "../../styles/Body.module.css";
import image from "../../../public/image/16-Million.jpg";
import footer from "../../../public/image/footer.jpg";
import lycaimage from "../../../public/image/lycamobile-app-new.webp";
import Card from "./components/card";
import Service from "./components/service";
import Option from "./components/options";
import Image from "next/image";

interface Props {
  onShowPopUp: React.MouseEventHandler<HTMLButtonElement>;
}

const serviceData = [
  {
    id: 1,
    serviceName: "Service",
    serviceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
  {
    id: 2,
    serviceName: "Service",
    serviceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    serviceName: "Service",
    serviceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit ",
  },
];
const optionData = [
  {
    id: 1,
    serviceName: "Activate a SIM",
    serviceDesc: "Got your new SIM? Activate and start using now",
    buttonText: "Activate SIM",
  },
  {
    id: 2,
    serviceName: "Recharge",
    serviceDesc: "Recherge with a quick top-up or one of our bundles",
    buttonText: "Recharge",
  },
];
const onPlayStoreClick = () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.lycadigital.lycamobile&pli=1";
};
const onAppStoreClick = () => {
  window.location.href =
    "https://apps.apple.com/gb/app/lycamobile/id1234252942";
};

const Body = (props: Props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/simData")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <Fragment>
      <div className={styles["grid-container"]}>
        <div className={styles.item1}>
          <label>Great value SIM only deals</label>
        </div>
        <div className={styles.item2}>
          <label className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consectetur adipiscing elit,
          </label>
        </div>
        <div className={styles.item3}>
          <Card showPopUp={props.onShowPopUp} data={items} />
        </div>
        <div className={styles.item4}>
          <button className={styles.viewAllButton}>
            <div className={styles.viewAllButtonText}>View all plans</div>
          </button>
        </div>
        <div className={styles.item5}>
          <label>Explore our services</label>
        </div>
        <div className={styles.item6}>
          <label className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consectetur adipiscing elit,
          </label>
        </div>
        <div className={styles.item7}>
          <Service data={serviceData} />
        </div>

        <div className={styles.item8}>
          <Image className={styles.image} src={image} alt="LYCA_Image_New" />
        </div>
        <div className={styles.item9}>
          <button className={styles.switch}>
            <div className={styles.switchText}>Switch to Lycamobile</div>
          </button>
        </div>
        <div className={styles.item10}>
          <label>Already with us?</label>
        </div>
        <div className={styles.item11}>
          <Option data={optionData} />
        </div>
        <div className={styles.item12}>
          <Image
            className={styles.lycaimage}
            src={lycaimage}
            alt="LYCA_Image"
          />
          <div className={styles.stores}>Track your spending on the go</div>
          <div className={styles.storesDesc}>
            The Lyca Mobile app is the safest and fastest way to manage your
            Lyca Mobile account. You can check your balance, buy plans, check
            rates and more, all on the go.
          </div>

          <Image
            className={styles.playStore}
            onClick={onPlayStoreClick}
            src="https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/02065749/google-play.webp"
            alt="playstore"
            width={200}
            height={50}
          />
          <Image
            className={styles.appStore}
            onClick={onAppStoreClick}
            src="https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/02065750/app-store-2.webp"
            alt="playstore"
            width={200}
            height={50}
          />
        </div>
        <div className={styles.item13}>
          <Image className={styles.footerImage} src={footer} alt="Footer" />
        </div>
      </div>
    </Fragment>
  );
};
export default Body;
