import { Route, Routes } from "react-router-dom";
import { Default } from "../../layouts/default/Default";
import { Content } from "../content/Content";
import { Form } from "../form";
import { PortComercial, PortResidencial } from "../PrePortfolio/contentPort";
import PrePortfolio from "../PrePortfolio";
import PortfolioComercial from "../PrePortfolio/pages/PortfolioComercial";
import PortfolioResidencial from "../PrePortfolio/pages/PortfolioResidencial";



export const Router = () => {
  return (

    <Routes>

      <Route path="/" element={<Default />}>
        <Route path="/" element={<Content />} />
        <Route path="/faleconosco" element={<Form />} />
        <Route path="/preportfolio" element={<PrePortfolio />} />
        <Route path="/PortfolioComercial" element={<PortfolioComercial />} />
        <Route path="/PortfolioResidencial" element={<PortfolioResidencial />} />

        {
          PortComercial.map(({ path, component }) => {
            const ComponenteDinamico = component;

            return (
              <Route key={path} path={`/${path}`} element={<ComponenteDinamico />} />
            );
          })
        }
        {
          PortResidencial.map(({ path, component }) => {
            const ComponenteDinamico = component;

            return (
              <Route key={path} path={`/${path}`} element={<ComponenteDinamico />} />
            );
          })
        }

      </Route>

    </Routes>
  )
}

