import { Route, Routes } from "react-router-dom";
import { Default } from "../../layouts/default/Default";
import { Content } from "../content/Content";
import { Form } from "../form";
import Portfolio from "../portfolio";
import { Port } from "../portfolio/contentPort";



export const Router = () => {
  return (
    
    <Routes>

      <Route path="/" element={<Default />}>
        <Route path="/" element={<Content />} />
        <Route path="/faleconosco" element={<Form />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
        {
          Port.map(({ path, component }) => {
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

