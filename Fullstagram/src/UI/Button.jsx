import Button from "@mui/material/Button";

export default function ContainedButtons(props) {
  return (
    <Button variant="contained" className={props.className}>
      Log In
    </Button>
  );
}
