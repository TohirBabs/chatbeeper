import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { roundedInput } from "./style";

export default function DateInput({
  value,
  onChange,
  id,
  label,
  helperText,
  error,
  name,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        disableFuture
        value={value}
        onChange={onChange}
        inputFormat="DD/MM/YYYY"
        renderInput={(params) => (
          <TextField
            name={name}
            sx={roundedInput}
            helperText={helperText}
            error={error}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
