import { Outlet } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { HeaderBootstrap as Header } from "../../components/HeaderBootstrap";
import { Footer } from "../../components/Footer/Footer";
import { GlobalStyle } from "../../styles/global";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "../../components/form";


export const Default = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Header />
        <Outlet />
        {/* <Form /> */}
        <Footer />
      </>
      <GlobalStyle />
    </ThemeProvider>

  )
}