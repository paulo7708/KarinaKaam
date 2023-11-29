import { Route, Routes } from "react-router-dom";
import { Default } from "../../layouts/default/Default";
import { Content } from "../content/Content";
import { Form } from "../form";




export const Router = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Content />} />
          <Route path="/faleconosco" element={<Form />} />
        </Route>

    </Routes>
  )
}

