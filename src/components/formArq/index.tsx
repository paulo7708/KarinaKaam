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
  const [formData, setFormData] = useState<FormInputs>({
    name: "",
    message: "",
    phone: "",
    email: "",
    qntinvestir: "",
    outInfo: "",
    tenhoLote: "",
    melhorarLayout: "",
    regularizar: "",
    m2Lote: "",
    localizacaoLote: "",
    mudarLayout: "",
    localizacaoLayout: "",
    localizacaoRegularizar: "",
    construido: "",
    mostrarLote: "",
    mostrarDesign: "",
    mostrarRegularizar: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  })

  const mostrarLote = watch('mostrarLote'); // Obtém o valor do campo 'mostrarCampo'
  const mostrarDesign = watch('mostrarDesign'); // Obtém o valor do campo 'mostrarCampo'
  const mostrarRegularizar = watch('mostrarRegularizar');

  const onSubmit = async (data: FormInputs) => {
    event.preventDefault()
    try {
      const templateParams = { ...data };

      await emailjs.send(
        "service_b8f2thd", //service ID
        "template_3qa2ark", //template ID
        templateParams, // templateParams
        "jzGM5Ta2MzRQSr_UV" //Public Key
      );

      console.log("Email enviado com sucesso!", data);
      setFormData({ ...formData, ...data }); // Atualiza os valores do formulário após o envio
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  };
  return (
    <Contact>
      <FormContainer>
        <HeaderForm>
          {/* <h2>FALE CONOSCO &nbsp;           
          </h2> */}
        </HeaderForm>
        <form onSubmit={handleSubmit(onSubmit)}>

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
              onChange={(event) => {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  name: event.target.value
                }))
              }}
              value={formData.name}
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
              onChange={(event) => {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  email: event.target.value
                }))
              }}
              value={formData.email}
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
              onChange={(event) => {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  phone: event.target.value
                }))
              }}
              value={formData.phone}
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
              onChange={(event) => {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  message: event.target.value
                }))
              }}
              value={formData.message}
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
                onClick={() => setFormData(prevFormData => ({
                  ...prevFormData,
                  localizacaoRegularizar:'Tenho um lote e quero começar a construir'
                }))}
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
                    onChange={(event) => {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        m2Lote: event.target.value
                      }))
                    }}
                    value={formData.m2Lote}
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
                    onChange={(event) => {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        localizacaoLote: event.target.value
                      }))
                    }}
                    value={formData.localizacaoLote}
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
                onClick={() => setFormData(prevFormData => ({
                  ...prevFormData,
                  localizacaoRegularizar: 'Melhorar o layout da minha casa'
                }))}
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
                    onChange={(event) => {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        mudarLayout: event.target.value
                      }))
                    }}
                    value={formData.mudarLayout}
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
                    onChange={(event) => {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        localizacaoLayout: event.target.value
                      }))
                    }}
                    value={formData.localizacaoLayout}
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
                onClick={() => setFormData(prevFormData => ({
                  ...prevFormData,
                  localizacaoRegularizar: 'Regularizar imóvel na Prefeitura'
                }))}
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
                    onChange={(event) => {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        localizacaoRegularizar: event.target.value
                      }))
                    }}
                    value={formData.localizacaoRegularizar}
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
                    onChange={(event) => {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        construido: event.target.value
                      }))
                    }}
                    value={formData.construido}
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
              onChange={(event) => {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  qntinvestir: event.target.value
                }))
              }}
              value={formData.qntinvestir}
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
              onChange={(event) => {
                setFormData(prevFormData => ({
                  ...prevFormData,
                  outInfo: event.target.value
                }))
              }}
              value={formData.outInfo}
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
