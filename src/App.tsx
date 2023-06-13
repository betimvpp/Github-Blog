import { Global } from "./styles/Global"
import { defaultTheme } from "./styles/theme/defaultTheme";
import { BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Global/>
      <Router/>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
