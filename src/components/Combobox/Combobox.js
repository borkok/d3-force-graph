import React, {useState} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

/**
 * Combobox component
 *
 * @param items - items to select from, each item has label and value
 * @param changed - handler for onChange event, receives selected value
 * @param label - field label
 */
const Combobox = ({ items, changed, label }) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    changed(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          data-testid="testselect"
          labelId="select-label"
          id="select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items
            ? items.map((item) => (
                <MenuItem value={item.value} key={item.label}>
                  {item.label}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </div>
  );
};

export default Combobox;
