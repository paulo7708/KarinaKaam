import { BodyContent,  ImgIcon } from "./style";


import CarroselBootstrap from "../carrosel";

import { Section1_2 } from "./section1_2/index";

import image1 from '../../assets/1_3_1.png'
import image2 from '../../assets/1_3_2.png'
import image4 from '../../assets/1_3_4.png'
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
        
        <Servicos />

        <Section1_1
          image={image1}
          title='Kaam & Oliveira'
          subTitle='Quem somos'
          text='
          Pessoas que ajudam empresas e outras pessoas. A nossa empresa nasceu da necessidade da inovação na área de cobrança e gestão de inadimplentes. Recuperamos o crédito por meio de uma Gestão de Carteira Humanizada. Para atender as expectativas dos nossos clientes, oferecemos um atendimento individualizado, pessoal e próximo. Porque para nós o relacionamento e o cuidado são tão importantes quanto a entrega do resultado.
'
          btnText="Fale conosco"
        />

        <CompPortfolio />
        <CardSvg />
        <ImgIcon id="quemsomos" />
        <Fac />

        


        

        
        <ImgIcon />

        
      </BodyContent>


    </>
  );
};
