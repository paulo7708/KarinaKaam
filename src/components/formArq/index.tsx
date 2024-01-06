import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Contact, Div, FormContainer, HeaderForm, LabelChexbox } from './style.ts'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string(),
  subject: z.string(),
  message: z.string(),
  phone: z.string(),
  email: z.string(),
  quest1: z.string(),
  quest2: z.string(),
  quest3: z.string(),
  metro: z.string(),
  mostrarLote: z.string(),
  mostrarDesign: z.string(),
  mostrarRegularizar: z.string(),
  campoCondicional: z.string(),
})

type FormInputs = z.infer<typeof formSchema>


export const FormArq = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quest1, setQuest1] = useState("");
  const [quest2, setQuest2] = useState("");
  const [quest3, setQuest3] = useState("");

  const [metro, setMetro] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  })

  const mostrarLote = watch('mostrarLote'); // Obtém o valor do campo 'mostrarCampo'
  const mostrarDesign = watch('mostrarDesign'); // Obtém o valor do campo 'mostrarCampo'
  const mostrarRegularizar = watch('mostrarRegularizar');

  async function handleSendEmail({ name, subject, message, email, phone, quest1, quest2, quest3, metro }: FormInputs) {

    const templateParams = {
      name,
      subject,
      message,
      email,
      phone,
      quest1,
      quest2,
      quest3,
      metro
    };
    console.log(templateParams)

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
          {/* <h2>FALE CONOSCO &nbsp;           
          </h2> */}
        </HeaderForm>
        <form onSubmit={handleSubmit(handleSendEmail)}>

          <p>Preencha esse formulário a baixo para podermos te conhecer melhor.</p>
          <br />

          <Div>
            <label htmlFor="fname">
              Qual o seu nome ?
            </label>
            <input
              {...register('name')}
              id="fname"
              type="text"
              autoComplete="given-name"
              placeholder="Digite seu nome"
              onChange={(event) => setName(event.target.value)}
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
              {...register('email')}
              type="text"
              autoComplete="email"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
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
              {...register('phone')}
              type="text"
              autoComplete="tel"
              placeholder="+55 (00) 00000 - 0000"
              onChange={(event) => setPhone(event.target.value)}
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
              {...register('message')}
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            />
          </Div>

          <Div>
            <LabelChexbox>
              <input
                type="checkbox"
                {...register('mostrarLote')}
              />
              Tenho um lote e quero começar a construir
            </LabelChexbox>
            {mostrarLote && (
              <Div>
                <Div>
                  <label className="label" htmlFor="fmetro">
                    Metro Quadrado (m²):
                  </label>
                  <input
                    {...register('metro')}
                    id="fmetro"
                    type="text"
                    autoComplete="given-metro"
                    placeholder="Digite seu nome"
                    onChange={(event) => setMetro(event.target.value)}
                    value={metro}
                    required
                  />

                </Div>
                <Div>
                  <label className="label" htmlFor="quest1">
                    Localização do imóvel:
                  </label>
                  <input
                    id="quest1"
                    {...register('quest1')}
                    placeholder="Sua resposta..."
                    autoComplete="off"
                    onChange={(event) => setQuest1(event.target.value)}
                    value={quest1}
                    required
                  />
                </Div>
                <Div>
                  <label className="label" htmlFor="quest2">
                    Outras informações:
                  </label>
                  <input
                    id="quest2"
                    {...register('quest2')}
                    placeholder="Sua resposta..."
                    autoComplete="off"
                    onChange={(event) => setQuest2(event.target.value)}
                    value={quest2}
                    required
                  />
                </Div>
              </Div>
            )}
          </Div>

          <Div>
            <LabelChexbox>
              <input
                type="checkbox"
                {...register('mostrarDesign')}
              />
              Melhorar o layout da minha casa
            </LabelChexbox>
            {mostrarDesign && (
              <Div>
                <Div>
                  <label>
                    Mudar o layout:
                    <input type="text" {...register('campoCondicional')} />
                  </label>
                </Div>
                <Div>
                  <label htmlFor="fname">
                    Ampliar:
                    <input
                      {...register('name')}
                      id="fname"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Digite seu nome"
                      onChange={(event) => setName(event.target.value)}
                      value={name}
                      required
                    />
                  </label>
                </Div>
                <Div>
                  <label htmlFor="fname">
                    Localização do imóvel:
                    <input
                      {...register('name')}
                      id="fname"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Digite seu nome"
                      onChange={(event) => setName(event.target.value)}
                      value={name}
                      required
                    />
                  </label>
                </Div>
              </Div>
            )}
          </Div>

          <Div>
            <LabelChexbox>
              <input
                type="checkbox"
                {...register('mostrarRegularizar')}
              />
              Regularizar imóvel na prefeitura
            </LabelChexbox>
            {mostrarRegularizar && (
              <div>
                <label>
                  Campo Condicional:
                  <input type="text" {...register('campoCondicional')} />
                </label>
                <label htmlFor="fname">
                  Localização do imóvel:
                  <input
                    {...register('name')}
                    id="fname"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Digite seu nome"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    required
                  />
                </label>
                <label htmlFor="fname">
                  Possue alguma construção:
                  <input
                    {...register('name')}
                    id="fname"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Digite seu nome"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    required
                  />
                </label>
              </div>
            )}
          </Div>




          <Div>
            <label className="label" htmlFor="quest2">
              Tem algum item de valor sentimental para colocar no seu ambiente?
            </label>
            <input
              id="quest2"
              {...register('quest2')}
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => setQuest2(event.target.value)}
              value={quest2}
              required
            />
          </Div>

          <Div>
            <label className="label" htmlFor="quest3">
              Deseja reaproveitar algum objeto/móvel?
            </label>
            <input
              id="quest3"
              {...register('quest3')}
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => setQuest3(event.target.value)}
              value={quest3}
              required
            />
          </Div>


          <input className="button" disabled={isSubmitting} type="submit" value="Enviar" />
        </form>
      </FormContainer>
    </Contact>
  );
  // return ( FORMAPP.COM
  //   <Contact>

  //     <FormContainer>
  //     <Iframe
  //       url="https://respondto.forms.app/dawnbreakerph/seusite-form"
  //       width="100%"
  //       height="4500px" // Ajuste a altura conforme necessário
  //       id="meuFormulario"
  //       className="meuFormulario"
  //       display="initial"
  //       position="relative"
  //     />
  //     </FormContainer>
  //   </Contact>
  // );
};
