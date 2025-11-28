import { TextField } from "@mui/material";
import { SearchInputProps } from "../types";

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <TextField
      id="search"
      label="Type to Search..."
      variant="outlined"
      size="small"
      value={value}
      fullWidth
      onChange={onChange}
      sx={{
        height: "fit-content"
      }}
    />
  );
};

export default SearchInput;
