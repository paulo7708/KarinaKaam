import { BodyContent,  ImgIcon } from "./style";


import CarroselBootstrap from "../carrosel";

import { Section1_2 } from "./section1_2/index";

import image1 from '../../assets/1_3_1.png'
import image2 from '../../assets/1_3_2.png'
import image4 from '../../assets/1_3_4.png'
import image5 from '../../assets/1_3_5.jpg'


import { Section1_1 } from "./section1_1";

import svg1 from '../../assets/svg/svg1.png'
import svg2 from '../../assets/svg/svg2.png'
import svg3 from '../../assets/svg/svg3.png'
import svg4 from '../../assets/svg/svg4.png'
import svg5 from '../../assets/svg/svg5.png'
import svg6 from '../../assets/svg/svg6.png'
import { Cards } from '../Cards'
import { CompPortfolio } from "./compPortfolio";



export const Content = () => {
  return (
    <>
      <CarroselBootstrap />
      <BodyContent>
        <CompPortfolio />
        <ImgIcon id="quemsomos" />

        <Section1_1
          image={image1}
          title='CBO Finanças
          '
          subTitle='Quem somos'
          text='
          Pessoas que ajudam empresas e outras pessoas. A nossa empresa nasceu da necessidade da inovação na área de cobrança e gestão de inadimplentes. Recuperamos o crédito por meio de uma Gestão de Carteira Humanizada. Para atender as expectativas dos nossos clientes, oferecemos um atendimento individualizado, pessoal e próximo. Porque para nós o relacionamento e o cuidado são tão importantes quanto a entrega do resultado.
'
          btnText="Fale conosco"
        />

        <Cards
          img={svg1}
          h2=''
          p='COBRANÇA AMIGÁVEL E EFICIENTE
          .'

          img2={svg2}
          h22=''
          p2='RECUPERAÇÃO DA CONFIANÇA ENTRE EMPRESA E CLIENTE
          .'

          img3={svg3}
          h23=''
          p3='ESTRATÉGIAS PARA A PREVENÇÃO DA INADIMPLÊNCIA
          .'
        />

        <Section1_2
          id='relacionamento'
          title='Transformando pessoas'
          subTitle='Resgatando relações'
          // title='Receba com PIX Via API'
          text='Inovamos o mercado de cobrança para transformar a recuperação de crédito em um processo mais pessoal. É assim que resgatamos a relação comercial entre empresas e clientes para que continue ativa. Nosso objetivo é reduzir o índice de inadimplência para nossos clientes e fazemos isso oferecendo um serviço de cobrança personalizado e especializado.'
          btnText="Fale conosco"
          img={image2}
        />

        <Cards
          id='missao'
          img={svg4}
          h2='MISSÃO
          '
          p='Ajudar empresas com a inadimplência por meio de um processo personificado e eficiente, resgatando a confiança entre clientes e credores
          .'

          img2={svg5}
          h22='VISÃO
          '
          p2='Ser referência em todo o país na recuperação de crédito com o serviço de atendimento humanizado
          '

          img3={svg6}
          h23='VALORES
          '
          p3='Compromisso.

          Qualidade no relacionamento com os clientes e colaboradores.
          
          Excelência em atendimento.
          .'
        />

        <ImgIcon />

        <Section1_1
          id='empresa'
          subTitle=""
          title='Para o credor.'
          text='A recuperação de créditos traz benefícios para a empresa credora. Isso ocorre porque a inadimplência pode afetar negativamente o orçamento mensal da empresa, tornando desafiador o pagamento de despesas essenciais como água, luz, telefone, internet e salários de funcionários. Diante dessas dívidas pendentes, os empresários frequentemente se veem obrigados a recorrer a empréstimos, que, por sua vez, implicam em encargos financeiros adicionais.'
          btnText="Fale conosco"
          image={image4}
        />

        <ImgIcon />

        <Section1_2
          id='consumidor'
          subTitle=""
          title='Para o consumidor.'
          text='A recuperação de crédito também contribui para o fortalecimento da economia. Um consumidor sem acesso a crédito tende a ter um poder de compra reduzido. Ao abster-se de transações no crediário, empréstimos e financiamentos, o cliente limita seus investimentos aos gastos essenciais do cotidiano.'
          btnText="Fale conosco"
          img={image5}
        />

      </BodyContent>


    </>
  );
};
