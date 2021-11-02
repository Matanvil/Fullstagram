import Button from "@mui/material/Button";

export default function ContainedButtons(props) {
  return (
    <Button variant="contained" href="www.google.com" className={props.className}>
      Log In
    </Button>
  );
}
