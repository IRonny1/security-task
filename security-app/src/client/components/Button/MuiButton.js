import { Button } from "@mui/material";

import "./MuiButton.scss";

const MuiButton = (props) => {
  const { children, variant, className } = props;
  return (
    <div className="mui-btn">
      <Button variant={variant} className={className}>
        {children}
      </Button>
    </div>
  );
};

export default MuiButton;
