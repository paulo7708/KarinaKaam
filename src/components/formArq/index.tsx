import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Contact, Div, FormContainer, HeaderForm, LabelChexbox } from './style.ts'


export const FormArq = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [qntinvestir, setQntInvestir] = useState("");
  const [outInfo, setOutInfo] = useState("");
  const [m2Lote, setM2Lote] = useState("");
  const [localizacaoLote, setLocalizacaoLote] = useState("");
  const [mudarLayout, setMudarLayout] = useState("");
  const [construido, setConstruido] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const templateParams = { name, email, phone, message, subject, qntinvestir, outInfo, m2Lote, localizacaoLote, mudarLayout, construido };

    await emailjs.send(
      "service_t45tnwj", //service ID
      "template_997etxh", //template ID
      templateParams, // templateParams
      "XEf05fqwepbi-p7pU" //Public Key
    ).then(
      (response) => {
        console.log("email enviado", response.status, response.text);
        setName("");
        setSubject("");
        setMessage("");
        setPhone("");
        setEmail("");
        setName("");
        setMessage("");
        setPhone("");
        setEmail("");
        setSubject("");
        setQntInvestir("");
        setOutInfo("");
        setM2Lote("");
        setLocalizacaoLote("");
        setMudarLayout("");
        setConstruido("");
      },

    ).catch((err) => {
      console.log("erro", err);
    });

  };

  return (
    <Contact>
      <FormContainer>
        <HeaderForm>
          {/* <h2>FALE CONOSCO &nbsp;           
            </h2> */}
        </HeaderForm>
        <form onSubmit={onSubmit}>

          <p>Preencha esse formulário a baixo para podermos te conhecer melhor.</p>
          <br />

          {/* //funcional */}
          <Div>
            <label htmlFor="fname">
              Qual o seu nome ?
            </label>
            <input
              name='name'
              id="fname"
              type="text"
              autoComplete="given-name"
              placeholder="Digite seu nome"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
              required
            />
          </Div>

          <Div>
            <label className="label" htmlFor="femail">
              Qual o seu email ?
            </label>
            <input
              id="femail"
              name="email"
              type="text"
              autoComplete="email"
              placeholder="Digite seu email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              required
            />
          </Div>



          <Div>
            <label className="label" htmlFor="fphone">
              Qual o seu telefone?
            </label>
            <input
              id="fphone"
              className="input"
              name="phone"
              type="text"
              autoComplete="tel"
              placeholder="+55 (00) 00000 - 0000"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              value={phone}
              required
            />
          </Div>

          <Div>
            <label className="label" htmlFor="fmessage">
              Como conheceu nosso serviço?
            </label>
            <input
              id="fmessage"
              name="message"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              value={message}
              required
            />
          </Div>
          {/* //funcional */}


          {/* CHECKBOX */}
          <Div>
            <LabelChexbox>
              Como podemos te ajudar?
            </LabelChexbox>
            <select
              id="fselect"
              name="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            >
              <option disabled value=''>'Escolha o serviço</option>
              <option value='Tenho um lote e quero começar a construir'>Tenho um lote e quero começar a construir</option>
              <option value='Melhorar o layout da minha casa'>Melhorar o layout da minha casa</option>
              <option value='Regularizar imóvel na Prefeitura'>'Regularizar imóvel na Prefeitura</option>
              <option value='Outros assuntos'>'Outros assuntos</option>
            </select>
          </Div>

          <Div>
            <label className="label" htmlFor="m2Lote">
              Metro Quadrado (m²):
            </label>
            <input
              name="m2Lote"
              id="m2Lote"
              type="text"
              autoComplete="given-m2Lote"
              placeholder="(m²)..."
              onChange={(event) => setM2Lote(event.target.value)}
              value={m2Lote}
            />

          </Div>



          <Div>
            <label className="label" htmlFor="qntinvestir">
              Localização do imóvel:
            </label>
            <input
              id="localizacaoLote"
              name="localizacaoLote"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => setLocalizacaoLote(event.target.value)}
              value={localizacaoLote}
            />
          </Div>

          <Div>
            <label className="label" htmlFor="layout">
              Mudar o layout:
            </label>
            <input
              name="mudarLayout"
              id="mudarLayout"
              type="text"
              autoComplete="off"
              placeholder="Digite aqui..."
              onChange={(event) => setMudarLayout(event.target.value)}
              value={mudarLayout}
              required
            />

          </Div>



          <Div>
            <label className="label" htmlFor="construido">
              Possui alguma construção:
            </label>
            <input
              id="construido"
              name="construido"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => { setConstruido(event.target.value) }}
              value={construido}
              required
            />
          </Div>

          {/* //funcional */}
          <Div>
            <label className="label" htmlFor="qntinvestir">
              Quanto pretende investir?
            </label>
            <input
              id="qntinvestir"
              name="qntinvestir"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={event => setQntInvestir(event.target.value)}
              value={qntinvestir}
              required
            />
          </Div>

          <Div>
            <label className="label" htmlFor="outInfo">
              Outras informações:
            </label>
            <textarea
              id="outInfo"
              name="outInfo"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={event => setOutInfo(event.target.value)}
              value={outInfo}
              required
            />
          </Div>
          {/* //funcional */}

          <input className="button" type="submit" value="Enviar" />
        </form>
      </FormContainer>
    </Contact >
  );
};




