import React from "react";
import * as styles from "./index.module.scss";
import { Link } from "gatsby";


const Button = (props) => {
  return(

      <Link
        className={styles.button}
        to={props.link}
      >
        {props.text}
      </Link>

  )
}

export default Button;
