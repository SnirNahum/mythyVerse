import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={15} direction="row">
      <Button variant="text">Text</Button> 
      <Button variant="text">Text</Button>
      <Button variant="text">Text</Button>
    </Stack>
  );
}
