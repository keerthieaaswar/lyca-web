import React, {Fragment} from "react";
import classes from "./styles/Option.module.css";

interface Props {
  data: any[];
}

interface IService {
  id: React.Key;
  serviceName: string;
  serviceDesc: string;
  buttonText: string;
}

const Option = (props: Props) => {
  return (
    <div className={classes.main}>
      {props.data.map((service: IService) => {
        return (
          <Fragment key={service.id}>
            <div>
              <div className={classes.serviceName}>{service.serviceName}</div>
              <div className={classes.serviceDesc}>{service.serviceDesc}</div>
              <button className={classes.orderButton}>
                <div className={classes.orderButtonText}>
                  {service.buttonText}
                </div>
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Option;
