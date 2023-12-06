import { BodyContent, ImgIcon } from "./style";


import CarroselBootstrap from "../carrosel";

import { Section1_2 } from "./section1_2/index";

import image1 from '../../assets/1_3_1.png'
import image2 from '../../assets/1_3_2.png'
import image3 from '../../assets/1_3_3.png'
import image5 from '../../assets/1_3_5.jpg'
import Fac from '../accordion'

import { Section1_1 } from "./section1_1";

import svg1 from '../../assets/svg/svg1.png'
import svg2 from '../../assets/svg/svg2.png'
import svg3 from '../../assets/svg/svg3.png'
import svg4 from '../../assets/svg/svg4.png'
import svg5 from '../../assets/svg/svg5.png'
import svg6 from '../../assets/svg/svg6.png'
import { Cards } from '../Cards'
import { CompPortfolio } from "../compPortfolio";
import { Servicos } from "../servicos";
import { CardSvg } from "../cardSvg";



export const Content = () => {
  return (
    <>
      <CarroselBootstrap />
      <BodyContent>

        {/* <ImgIcon id="servicos" /> */}
        <Servicos
          id="servicos"
          title="SERVIÇOS"
          h2="QUANDO SOLICIDAR UM ESCRITORIO DE ARQUITETURA?"
          p="Construir e reformar pode parecer simples, mas apenas quem já experimentou sabe que não é tão fácil assim. Lidar com fornecedores, adaptar e aprimorar o espaço, gerenciar custos e materiais podem ser desafios estressantes. Nossa missão é simplificar esse processo e tornar seu sonho uma realidade palpável."
          card1="Quer personalizar o seu ambiente, mas está em dúvida por onde começar?"
          card2="Tem dificuldades em supervisionar a construção e os profissionais"
          card3="Deseja evitar desperdício de materiais e economizar tempo"
          card4="Deseja evitar desperdício de materiais e economizar tempo"
          strong="Se você se identifica com essas situações abaixo, nós podemos te ajudar:"
        />
        <CompPortfolio />
        <ImgIcon id="sobre"/>
        <ImgIcon className="sobre">
          <h3> Quem somos &nbsp;</h3>
        </ImgIcon>
        <Section1_1
          id=""
          image={image1}
          title='Karina Kaam Oliveira
          '
          subTitle=''
          text='
          Formada em Design de Interiores e Personal Organizer, no qual me apaixonei e me identifiquei na profissão. Busco sempre mais conhecimento para me aperfeiçoar a cada dia, solucionando problemas para meus clientes com profissionalismo e dedicação. 

          Elaboro projetos comerciais e residenciais de design de interiores transformando um simples ambiente em um local confortável, bonito e principalmente atendendo as necessidades dos meus clientes com estudo de melhor aproveitamento de espaço, um bom layout e funcionalidade.
          
          Como Personal Organizer  ensino as pessoas a organizar seus lares e locais de trabalho para melhorar cada vez mais suas vidas.

'
          btnText="Fale conosco"
        />

        <Section1_2
          img={image2}
          title="João Paulo Oliveira"
          text='Arquiteto e Urbanista formado pela Universidade Paulista e pós-graduado em Gestão de Infraestrutura Urbana pela Universidade Federal de São Carlos-UFSCAR.

          Atuo há mais de uma década na área de infraestrutura urbana e atuei também no desenvolvimento de projetos arquitetônicos nesse período. Assim, formei junto com minha esposa, a Designer de Interiores  Karina Kaam Oliveira, o escritório para desenvolvimento de projetos residenciais e comerciais, e outros serviços.
          '
          btnText="Saiba Mais"
        />

        <Section1_1
          image={image3}
          title='O escritório

          '
          subTitle=''
          text='
          O interesse pelo desenvolvimento de ambientes e transformação dos lugares é comum ao arquiteto e a designer, e esse mesmo interesse fez surgir o escritório. Nosso objetivo é dar ao cliente a satisfação que ele busca na concretização de seus sonhos, de seus desejos. Dar a tranquilidade que ele merece nesse processo. Tudo isso deve ser feito de forma que respeite a individualidade do cliente, com um projeto de identidade própria.
          
          O escritório assina projetos diversos, como Projetos Residenciais, Comerciais e Arquitetura de Interiores.

'
          btnText="Fale conosco"
        />

        <CardSvg />
        <ImgIcon id="fac" />
        <Fac />







        <ImgIcon />


      </BodyContent>


    </>
  );
};
