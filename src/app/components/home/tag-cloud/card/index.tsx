import React from "react";

import Styles from "./index.module.scss";
import { CloudCard as CloudCardProps } from "./index.type";

const CloudCard: React.FC<CloudCardProps> = ({ name }) => {
  return <div className={Styles.card}>{name}</div>;
};

export default CloudCard;
