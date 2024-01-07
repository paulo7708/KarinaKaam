import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Contact, Div, FormContainer, HeaderForm, LabelChexbox } from './style.ts'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  // base info
  name: z.string(),
  message: z.string(),
  phone: z.string(),
  email: z.string(),  

  // checkbox Value component pai
  tenhoLote: z.string(),
  melhorarLayout: z.string(),
  regularizar: z.string(),

  // checkbox Value component filho Tenho Lote
  m2Lote: z.string(),
  localizacaoLote: z.string(),

  // checkbox Value component filho melhorar Layout
  mudarLayout: z.string(),
  localizacaoLayout: z.string(),

  // checkbox Value component filho Regularizar Prefeitura
  localizacaoRegularizar: z.string(),
  construido: z.string(),

  //outras informacoes
  qntinvestir: z.string(),
  outInfo: z.string(),

  // watch's mostrar checkbox
  mostrarLote: z.string(),
  mostrarDesign: z.string(),
  mostrarRegularizar: z.string(),

})

type FormInputs = z.infer<typeof formSchema>


export const FormArq = () => {
  // base info
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qntinvestir, setQntinvestir] = useState("");
  const [outInfo, setOutInfo] = useState("");


  // checkbox Value component pai
  const [tenhoLote, setTenhoLote] = useState('');
  const [melhorarlayout, setMelhorarLayout] = useState('');
  const [regularizar, setRegularizar] = useState('')

  // checkbox Value component filho Tenho Lote
  const [m2Lote, setM2Lote] = useState('');
  const [localizacaoLote, setLocalizacaoLote] = useState("");

  // checkbox Value component filho melhorar Layout
  const [mudarLayout, setMudarLayout] = useState('');
  const [localizacaoLayout, setLocalizacaoLayout] = useState('')

  // checkbox Value component filho Regularizar Prefeitura
  const [localizacaoRegularizar, setLocalizacaoRegularizar] = useState('')
  const [construido, setConstruido] = useState('')

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

  async function handleSendEmail({ name, message, email, phone, qntinvestir, outInfo, tenhoLote, melhorarLayout, regularizar, m2Lote, localizacaoLote, mudarLayout, localizacaoLayout, localizacaoRegularizar, construido }: FormInputs) {

    const templateParams = {
      name,
      message,
      email,
      phone,

      tenhoLote,
      melhorarLayout,
      regularizar,

      m2Lote,
      localizacaoLote,

      mudarLayout,
      localizacaoLayout,

      localizacaoRegularizar,
      construido,

      qntinvestir,
      outInfo,
    };


    await emailjs
      .send(
        "service_b8f2thd", //service ID
        "template_3qa2ark", //template ID
        templateParams, // templateParams
        "jzGM5Ta2MzRQSr_UV" //Public Key
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setName("");
          setMessage("");
          setPhone("");
          setEmail("");

          setTenhoLote("");
          setMelhorarLayout('');
          setRegularizar("");

          setM2Lote(''),
          setLocalizacaoLote("");

          setMudarLayout(''),
          setLocalizacaoLayout('')

          setQntinvestir("");
          setOutInfo("");
        },

      ).catch((err) => {
        console.log("erro", err);
      });
  }
  console.log(name)
  console.log(message)
  console.log(email)
  console.log(phone)
  console.log(tenhoLote)
  console.log(melhorarlayout)
  console.log(regularizar)
  console.log(m2Lote)
  console.log(localizacaoLote)
  console.log(mudarLayout)
  console.log(localizacaoLayout)
  console.log(localizacaoRegularizar)
  console.log(construido)
  console.log(qntinvestir)
  console.log(outInfo)
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

          {/* //funcional */}
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
          {/* //funcional */}


          {/* CHECKBOX */}
          <Div>
            <LabelChexbox>
              <input
                type="checkbox"
                {...register('mostrarLote')}
                onClick={() => setTenhoLote('Tenho um lote e quero começar a construir')}
              />
              Tenho um lote e quero começar a construir
            </LabelChexbox>
            {mostrarLote && (
              <Div>
                <Div>
                  <input
                    type="hidden"
                    value='Tenho um lote e quero começar a construir'
                    {...register('tenhoLote')}
                  />
                  <label className="label" htmlFor="m2Lote">
                    Metro Quadrado (m²):
                  </label>
                  <input
                    {...register('m2Lote')}
                    id="m2Lote"
                    type="text"
                    autoComplete="given-m2Lote"
                    placeholder="(m²)..."
                    onChange={(event) => setM2Lote(event.target.value)}
                    value={m2Lote}
                    required
                  />

                </Div>
                <Div>
                  <label className="label" htmlFor="qntinvestir">
                    Localização do imóvel:
                  </label>
                  <input
                    id="localizacaoLote"
                    {...register('localizacaoLote')}
                    placeholder="Sua resposta..."
                    autoComplete="off"
                    onChange={(event) => setLocalizacaoLote(event.target.value)}
                    value={localizacaoLote}
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
                onClick={() => setMelhorarLayout('Melhorar o layout da minha casa')}
              />
              Melhorar o layout da minha casa
            </LabelChexbox>
            {mostrarDesign && (
              <Div>
                <Div>
                  <label className="label" htmlFor="layout">
                    Mudar o layout:
                  </label>
                  <input
                    {...register('mudarLayout')}
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
                  <label className="label" htmlFor="qntinvestir">
                    Localização do imóvel:
                  </label>
                  <input
                    id="qntinvestir"
                    {...register('qntinvestir')}
                    placeholder="Sua resposta..."
                    autoComplete="off"
                    onChange={(event) => setLocalizacaoLayout(event.target.value)}
                    value={localizacaoLayout}
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
                {...register('mostrarRegularizar')}
                onClick={() => setRegularizar('Regularizar imóvel na Prefeitura')}
              />
              Regularizar imóvel na Prefeitura:
            </LabelChexbox>
            {mostrarRegularizar && (
              <Div>
                <Div>
                  <label className="label" htmlFor="qntinvestir">
                    Localização do imóvel:
                  </label>
                  <input
                    id="qntinvestir"
                    {...register('localizacaoRegularizar')}
                    placeholder="Sua resposta..."
                    autoComplete="off"
                    onChange={(event) => setLocalizacaoRegularizar(event.target.value)}
                    value={localizacaoRegularizar}
                    required
                  />
                </Div>
                <Div>
                  <label className="label" htmlFor="construido">
                    Possui alguma construção:
                  </label>
                  <input
                    id="construido"
                    {...register('construido')}
                    placeholder="Sua resposta..."
                    autoComplete="off"
                    onChange={(event) => setConstruido(event.target.value)}
                    value={construido}
                    required
                  />
                </Div>

              </Div>
            )}
          </Div>


          {/* //funcional */}
          <Div>
            <label className="label" htmlFor="qntinvestir">
              Quanto pretende investir?
            </label>
            <input
              id="qntinvestir"
              {...register('qntinvestir')}
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => setQntinvestir(event.target.value)}
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
              {...register('outInfo')}
              placeholder="Sua resposta..."
              autoComplete="off"
              onChange={(event) => setOutInfo(event.target.value)}
              value={outInfo}
              required
            />
          </Div>
          {/* //funcional */}

          <input className="button" disabled={isSubmitting} type="submit" value="Enviar" />
        </form>
      </FormContainer>
    </Contact>
  );

};
