import { Contact } from "./style";

export const FormDesign = () => {

  return (
  <Contact>
    <iframe
      title="Formulário do FormApp"
      src="https://respondto.forms.app/dawnbreakerph/karina"
      width="100%"
      height="4500px" // 4500px Ajuste a altura conforme necessário
      id="meuFormulario"
      className="meuFormulario"
      style={{ border: 'none' }} // Para remover a borda do iframe
    />
  </Contact>
  );
};

// return (
//   <Contact>
//     <iframe
//       title="Formulário do FormApp"
//       src="https://respondto.forms.app/dawnbreakerph/karina"
//       width="100%"
//       height="4500px" // 4500px Ajuste a altura conforme necessário
//       id="meuFormulario"
//       className="meuFormulario"
//       style={{ border: 'none' }} // Para remover a borda do iframe
//     />
//   </Contact>
//   );
