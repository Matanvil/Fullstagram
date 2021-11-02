import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  return <TextField  label={props.label} variant="outlined" type={props.type} className={props.className} size="small" sx={{fontSize: '10px'}}/>;
}
