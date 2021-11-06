import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Requests } from "./api/Requests";
import NavBar from "./components/TopBar/TopBar";
import { addProduct } from "./redux/actionCreators";
import { Redirect, Route, Switch } from "react-router";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

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
            <Route path="/" exact>
              <Redirect to="/shop" />
            </Route>
            <Route path="/shop">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
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
  padding-top: 1vh;
`;

export default App;
