import React, {Fragment} from "react";
import classes from "./styles/Service.module.css";

interface Props {
  data: any[];
}

interface IService {
  id: React.Key;
  serviceName: string;
  serviceDesc: string;
}

const Service = (props: Props) => {
  return (
    <div className={classes.main}>
      {props.data.map((service: IService) => {
        return (
          <Fragment key={service.id}>
            <div>
              <div className={classes.serviceName}>{service.serviceName}</div>
              <div className={classes.serviceDesc}>{service.serviceDesc}</div>
              <button className={classes.orderButton}>
                <div className={classes.orderButtonText}>View</div>
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Service;
