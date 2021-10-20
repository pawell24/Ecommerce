import { createGlobalStyle, ThemeProvider } from "styled-components";
import NavBar from "./components/TopBar/TopBar";

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: "sans-serif" }}>
      <GlobalStyle />
      <div className="App">
        <NavBar />
      </div>
    </ThemeProvider>
  );
}
const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   height:200vh;
 }
`;

export default App;
