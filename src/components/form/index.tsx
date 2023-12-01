import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Contact, FormContainer, HeaderForm } from './style.ts'
import { WhatsappLogo } from "phosphor-react";

export const Form = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quest1, setQuest1] = useState("");
  const [quest2, setQuest2] = useState("");
  const [quest3, setQuest3] = useState("");

  async function sendEmail(event: FormEvent) {
    event?.preventDefault();

    const templateParams = {
      name,
      subject,
      message,
      email,
      phone,
      quest1,
      quest2,
      quest3
    };

    await emailjs
      .send(
        "service_b8f2thd", //service ID
        "template_3qa2ark", //template ID
        templateParams,
        "jzGM5Ta2MzRQSr_UV" //Public Key
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setName("");
          setSubject("");
          setMessage("");
          setPhone("");
          setEmail("");
          setQuest1("");
          setQuest2("");
          setQuest3("");
        },

      ).catch((err) => {
        console.log("erro", err);
      });
  }

  return (
    <Contact>



      <FormContainer>
        <HeaderForm>
          <h1>Contato</h1>
          <h3>FALE CONOSCO</h3>
          <p>Preencha o formulário para falar conosco. Se preferir, entre em contato pelo WhatsApp ou E-mail.</p>
        </HeaderForm>
        <form onSubmit={sendEmail}>
          <label htmlFor="fname">
            Qual o seu nome ?
          </label>
          <input
            id="fname"
            name="name"
            type="text"
            autoComplete="given-name"
            placeholder="Digite seu nome"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />



          <label htmlFor="fselect">
            Aceita contato pelo WhatsApp?
          </label>

          <select
            id="fselect"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option value="Empresa">Sim</option>
            <option value="Cliente">Apenas Email</option>
            {/* <option value="Transferencias e Pagamentos">
              Transferencias e Pagamentos
            </option> */}
          </select>

          <label className="label" htmlFor="femail">
            Qual o seu email ?
          </label>
          <input
            id="femail"
            name="email"
            type="text"
            autoComplete="email"
            placeholder="Digite seu email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />

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
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            required
          />

          <label className="label" htmlFor="fmessage">
            Quais são os ambientes serão planejados?
          </label>
          <input
            id="fmessage"
            name="message"
            placeholder="Sua resposta..."
            autoComplete="off"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            required
          />

          <label className="label" htmlFor="quest1">
            Quais são suas necessidades para o Projeto?
          </label>
          <input
            id="quest1"
            name="quest1"
            placeholder="Sua resposta..."
            autoComplete="off"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            required
          />
          <label className="label" htmlFor="quest2">
            Tem algum item de valor sentimental para colocar no seu ambiente?
          </label>
          <input
            id="quest2"
            name="quest2"
            placeholder="Sua resposta..."
            autoComplete="off"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            required
          />
          <label className="label" htmlFor="quest3">
            Deseja reaproveitar algum objeto/móvel?
          </label>
          <input
            id="quest3"
            name="quest3"
            placeholder="Sua resposta..."
            autoComplete="off"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            required
          />

          <input className="button" type="submit" value="Enviar" />
        </form>
      </FormContainer>
    </Contact>
  );
};
