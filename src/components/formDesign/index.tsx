
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Contact, Div, FormContainer, HeaderForm, LabelChexbox } from './style'


export const FormDesign = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [qntinvestir, setQntInvestir] = useState("");
  const [outInfo, setOutInfo] = useState("");
  const [localizacaoLote, setLocalizacaoLote] = useState("");

  const [oqespera, setOqespera] = useState("");
  const [pqgostaria, setPqgostaria] = useState("");
  const [qlestilo, setQlestilo] = useState("");

  const [profissao, setProfissao] = useState("");
  const [jaexiste, setJaexiste] = useState("");
  const [ambientes, setAmbientes] = useState("");

  const [seguimento, setSeguimento] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const templateParams = { name, email, phone, message, subject, qntinvestir, outInfo, localizacaoLote, oqespera, profissao, jaexiste, ambientes, pqgostaria, qlestilo, seguimento };

    await emailjs.send(
      "service_t45tnwj", //service ID
      "template_xnz4r2i", //template ID
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
        setPhone("");
        setEmail("");
        setSubject("");
        setQntInvestir("");
        setOutInfo("");
        setLocalizacaoLote("");

        setOqespera("");
        setPqgostaria("");
        setQlestilo("");

        setProfissao("");
        setJaexiste("");
        setAmbientes("");
        setSeguimento("");
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
            <label htmlFor="fname">
              Qual sua profissão ?
            </label>
            <input
              name='profissao'
              id="fprofissao"
              type="text"
              autoComplete="off"
              placeholder="Sua resposta..."
              onChange={(event) => {
                setProfissao(event.target.value);
              }}
              value={profissao}
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
              Espaço Comercial ou Residencial?
            </LabelChexbox>
            <select
              id="fselect"
              name="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            >
              <option disabled value=''>'Escolha o tipo de espaço</option>
              <option value='Espaço Comercial'>Espaço Comercial</option>
              <option value='Apartamento'>Apartamento</option>
              <option value='Casa'>Casa</option>
            </select>
          </Div>

          <Div>
            <LabelChexbox>
              Já existe ou vai iniciar?
            </LabelChexbox>
            <input
              id="jaexiste"
              name="jaexiste"
              placeholder="Sua resposta..."
              value={jaexiste}
              onChange={(event) => setJaexiste(event.target.value)}
              required
            />
          </Div>

          <Div>
            <LabelChexbox>
              Seguimento e Publico alvo
            </LabelChexbox>
            <input
              id="seguimento"
              name="seguimento"
              placeholder="Sua resposta..."
              value={seguimento}
              onChange={(event) => setSeguimento(event.target.value)}
              required
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
              Quais e quantos ambientes serão projetados?
            </label>
            <input
              name="ambientes"
              id="ambientes"
              type="text"
              autoComplete="off"
              placeholder="Sua resposta..."
              onChange={(event) => setAmbientes(event.target.value)}
              value={ambientes}
              required
            />

          </Div>



          <Div>
            <label className="label" htmlFor="oqespera">
              O que espera de um projeto de Interiores?
            </label>
            <input
              id="oqespera"
              name="oqespera"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => { setOqespera(event.target.value) }}
              value={oqespera}
              required
            />
          </Div>

          <Div>
            <label className="label" htmlFor="oqespera">
              Porque gostaria de fazer um projeto conosco?
            </label>
            <input
              id="pqgostaria"
              name="pqgostaria"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => { setPqgostaria(event.target.value) }}
              value={pqgostaria}
              required
            />
          </Div>

          <Div>
            <label className="label" htmlFor="oqespera">
              Estilo mais se indentifica?
            </label>
            <input
              id="qlestilo"
              name="qlestilo"
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => { setQlestilo(event.target.value) }}
              value={qlestilo}
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
              Me conte mais sobre o que precisa
            </label>
            <textarea
              id="outInfo"
              name="outInfo"
              placeholder="Opcional..."
              autoComplete="off"
              onChange={event => setOutInfo(event.target.value)}
              value={outInfo}
            />
          </Div>
          {/* //funcional */}

          <input className="button" type="submit" value="Enviar" />
        </form>
      </FormContainer>
    </Contact >
  );
};




