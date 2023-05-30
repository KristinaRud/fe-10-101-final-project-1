import cx from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { type, children, className, onClick, disabled, to, href, target } =
    props;

  let Component = href ? "a" : "button";

  if (to) {
    Component = Link;
  }

  return (
    <Component
      href={href}
      type={href || to ? undefined : type}
      to={to}
      className={cx(styles.btn, className)}
      onClick={onClick}
      disabled={disabled}
      target={target}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  disabled: false,
  className: "",
  to: "",
  href: "",
  target: "_blank",
};

export default Button;
