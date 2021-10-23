import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import NavBar from "./components/TopBar/TopBar";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <ThemeProvider theme={{ fontFamily: "sans-serif" }}>
        <GlobalStyle />
        <NavBar />
        <StyledRouteWrapper>
          <Switch>
            <Route path="/shop"></Route>
            <Route path="/cart"></Route>
            <Route path="/my-orders"></Route>
          </Switch>
        </StyledRouteWrapper>
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
const StyledRouteWrapper = styled.div`
  padding-top: 10vh;
`;

export default App;
