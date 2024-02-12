import { Route, Routes } from "react-router-dom";
import { Default } from "../../layouts/default/Default";
import { Content } from "../content/Content";
import { PortComercial, PortResidencial } from "../PrePortfolio/contentPort";
import PrePortfolio from "../PrePortfolio";
import PortfolioComercial from "../PrePortfolio/pages/PortfolioComercial";
import PortfolioResidencial from "../PrePortfolio/pages/PortfolioResidencial";
import PreForm from "../formPre";
import { FormArq } from "../formArq";
import { FormDesign } from "../formDesign";



export const Router = () => {
  return (

    <Routes>

      <Route path="/" element={<Default />}>
        <Route path="/" element={<Content />} />
        <Route path="/faleconosco" element={<PreForm />} />
        <Route path="/faleconosco/FormArq" element={<FormArq />} />
        <Route path="/faleconosco/FormDesign" element={<FormDesign />} />
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

