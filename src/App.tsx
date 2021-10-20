import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import NavBar from "./components/TopBar/TopBar";

function App() {
  return (
    <Router>
      <ThemeProvider theme={{ fontFamily: "sans-serif" }}>
        <GlobalStyle />
        <div className="App">
          <NavBar />
        </div>
      </ThemeProvider>
    </Router>
  );
}
const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
`;

export default App;
