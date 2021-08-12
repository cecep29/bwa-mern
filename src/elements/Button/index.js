import React from "react";

import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const classNames = [props.className];

  if (props.isPrimary) classNames.push("btn-primary");
  if (props.isSmall) classNames.push("btn-sm");
  if (props.isLarge) classNames.push("btn-lg");
  if (props.isBlock) classNames.push("btn-block");
  if (props.hasShadow) classNames.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) classNames.push("disabled");
    return (
      <span className={classNames.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5">
              Loading...
            </span>
            <span className="sr-only"></span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={classNames.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={classNames.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={classNames.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isPrimary: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
  href: propTypes.string,
};
