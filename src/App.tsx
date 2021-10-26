import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Requests } from "./api/Requests";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import NavBar from "./components/TopBar/TopBar";
import { addProduct } from "./redux/actionCreators";
import { Route, Switch } from "react-router";

function App() {
  const dispatch: Function = useDispatch();

  useEffect(() => {
    const request: Requests = new Requests();
    request.getAllProducts().then((res) => {
      dispatch(addProduct(res));
    });
  }, [dispatch]);

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
