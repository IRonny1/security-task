import { styled, TextField } from "@mui/material";

const MuiInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "#9980FA",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#9980FA",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9980FA",
    },
    "&:hover fieldset": {
      borderColor: "#9980FA",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9980FA",
    },
  },
});

export default MuiInput;
