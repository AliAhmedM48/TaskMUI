import { Stack, Typography } from "@mui/material";

function Navbar() {
  return (
    <Stack p={2} boxShadow={"0px 0px 2px rgba(0,0,0,0.25)"}>
      <Stack width={"80%"} marginX={"auto"}>
        <Typography variant="h5" fontWeight={900}>
          OPENCLASSROOMS
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Navbar;
