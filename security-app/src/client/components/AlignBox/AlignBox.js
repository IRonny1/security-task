import * as PropTypes from "prop-types";

import "./AlignBox.scss";

const AlignBox = ({ align, className, children }) => {
  return <div className={`container-${align} ${className}`}>{children}</div>;
};

AlignBox.propTypes = {
  align: PropTypes.oneOf(["top", "left", "bottom", "right", "center"]),
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

AlignBox.defaultProps = {
  align: "center",
};

export default AlignBox;
