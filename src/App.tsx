import Navbar from "./components/Navbar";
import { Stack } from "@mui/material";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  return (
    <>
      <Navbar />
      <Stack>
        <Section1 />
        <Section2 />
      </Stack>
    </>
  );
}

export default App;
