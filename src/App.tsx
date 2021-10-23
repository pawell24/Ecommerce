import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Requests } from "./api/Requests";
import NavBar from "./components/TopBar/TopBar";
import { addProduct } from "./redux/actionCreators";

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
