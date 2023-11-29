import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Contact, FormContainer } from './style.ts'
import { WhatsappLogo } from "phosphor-react";

export const Form = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function sendEmail(event: FormEvent) {
    event?.preventDefault();

    const templateParams = {
      name,
      subject,
      message,
      email,
      phone,
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
        },

      ).catch((err) => {
        console.log("erro", err);
      });
  }

  return (
    <Contact>

      <div>
        {/*<img src={image} alt="" />*/}
        <h1>Fale sobre seu negocio</h1>
        <h3>Conte-nos sobre como podemos te ajudar, basta preencher o formulario.<br></br> <span> Fale com nossos especialistas</span>.</h3>
        <a className='whatsNav' href="https://wa.me/5511920092283" target="_blank"><WhatsappLogo size={33} color="#ff9a3d" /></a>
      </div>

      <FormContainer>
        <h1>Contato</h1>

        <form onSubmit={sendEmail}>
          <label htmlFor="fname">
            Nome
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
            Assunto
          </label>

          <select
            id="fselect"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option value="Empresa">Empresa</option>
            <option value="Cliente">Cliente</option>
            {/* <option value="Transferencias e Pagamentos">
              Transferencias e Pagamentos
            </option> */}
          </select>

          <label className="label" htmlFor="femail">
            Email
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
            Telefone
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
            Mensagem
          </label>
          <textarea
            id="fmessage"
            name="message"
            placeholder="Digite sua mensagem..."
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
