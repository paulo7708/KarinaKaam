import img1 from '../../assets/Projeto comercial/Clara Ferreira - Bauru Shopping/01Resultado.png'
import img2 from '../../assets/Projeto comercial/Glitter shopping botucatu/01Resultado.png'
import img3 from '../../assets/Projeto comercial/Clinica Veterinaria - toca silvestre/07Resultado.png'
// import img4 from '../../assets/Projeto comercial/Filial Komatsu Bauru/01Resultado.png'
import img5 from '../../assets/Projeto comercial/Hamburgueria - Bets Itapuí/02Resultado.png'
import img6 from '../../assets/Projeto comercial/La Casual modas - loja infantil/01Resultado.png'
import img7 from '../../assets/Projeto comercial/Sala Psicologia/01Resultado.png'
import img8 from '../../assets/Projeto comercial/Sala fisioterapia/01Resultado.png'
import img9 from '../../assets/Projeto comercial/Saláo de Beleza - Gabriela Garcia - Bauru/01Resultado.png'
import img10 from '../../assets/Projeto comercial/Studio Pilates - Fortaleza/01Resultado.png'

import { ClaraFerreira } from './pages/PortfolioComercial/ClaraFerreira'
import { GlitterShoppingBotucatu } from './pages/PortfolioComercial/GlitterShoppingBotucatu'
import { HamburgueriaBetsItapuí } from './pages/PortfolioComercial/HamburgueriaBetsItapuí'
// import { KomatsuBauru } from './pages/PortfolioComercial/KomatsuBauru'
import { LaCasualmodas } from './pages/PortfolioComercial/LaCasualmodas'
import { SalaPsicologia } from './pages/PortfolioComercial/SalaPsicologia'
import { Salafisioterapia } from './pages/PortfolioComercial/Salafisioterapia'
import { SalaoGabrielaGarcia } from './pages/PortfolioComercial/SalaoGabrielaGarcia'
import { StudioPilatesFortaleza } from './pages/PortfolioComercial/StudioPilatesFortaleza'
import { TocaSilvestre } from './pages/PortfolioComercial/TocaSilvestre'

import res1 from '../../assets/Projeto residencial/Residencia 01/1Resultado.png'
import res2 from '../../assets/Projeto residencial/Residencia 02 - Area Gourmet/1Resultado.png'
import res3 from '../../assets/Projeto residencial/Residencia 03 - Area Gourmet/1Resultado.png'
import res4 from '../../assets/Projeto residencial/Residencia 04/1Resultado.png'
import res5 from '../../assets/Projeto residencial/Residencia 05/1Resultado.png'
import res6 from '../../assets/Projeto residencial/Residencia 06/3Resultado.jpg'
import res7 from '../../assets/Projeto residencial/Residencia 07/01Resultado.png'
import res8 from '../../assets/Projeto residencial/Residencia Praia/1Resultado.png'
import res9 from '../../assets/Projeto residencial/Apartamento/1Resultado.png'
import res10 from '../../assets/Projeto residencial/Man Cave/01Resultado.png'

import { Residencia1 } from './pages/PortfolioResidencial/Residencia1'
import { Residencia2 } from './pages/PortfolioResidencial/Residencia2'
import { Residencia3 } from './pages/PortfolioResidencial/Residencia3'
import { Residencia4 } from './pages/PortfolioResidencial/Residencia4'
import { Residencia5 } from './pages/PortfolioResidencial/Residencia5'
import { Residencia6 } from './pages/PortfolioResidencial/Residencia6'
import { Residencia7 } from './pages/PortfolioResidencial/Residencia7'
import { ResidenciaPraia } from './pages/PortfolioResidencial/ResidenciaPraia'
import { Apartamento } from './pages/PortfolioResidencial/Apartamento'
import { ManCave } from './pages/PortfolioResidencial/ManCave'


export const PortRoute = [
  {
    img: img1,
    h1: 'Clara Ferreira Bauru Shopping',
    path: '/ClaraFerreira',
    component: ClaraFerreira
  },
  {
    img: img2,
    h1: 'Glitter Shopping Botucatu',
    path: '/GlitterShoppingBotucatu',
    component: GlitterShoppingBotucatu
  },
  {
    img: img3,
    h1: 'Clinica Veterinaria - Toca Silvestre',
    path: '/TocaSilvestre',
    component: TocaSilvestre
  },
  // {
  //   img: img4,
  //   h1: 'Komatsu Bauru',
  //   path: '/KomatsuBauru',
  //   component: KomatsuBauru
  // },
  {
    img: img5,
    h1: 'Hamburgueria Bets Itapuí',
    path: '/HamburgueriaBetsItapuí',
    component: HamburgueriaBetsItapuí
  },
  {
    img: img6,
    h1: 'La Casual modas',
    path: '/LaCasualmodas',
    component: LaCasualmodas
  },
  {
    img: img7,
    h1: 'Sala fisioterapia',
    path: '/Salafisioterapia',
    component: Salafisioterapia
  },
  {
    img: img8,
    h1: 'Sala Psicologia',
    path: '/SalaPsicologia',
    component: SalaPsicologia
  },
  {
    img: img9,
    h1: 'Salão de Beleza Gabriela Garcia',
    path: '/SalaoGabrielaGarcia',
    component: SalaoGabrielaGarcia
  },
  {
    img: img10,
    h1: 'Studio Pilates Fortaleza',
    path: '/StudioPilatesFortaleza',
    component: StudioPilatesFortaleza
  },
  {
    img: res1,
    h1: 'Residencia 1',
    path: '/Residencia1',
    component: Residencia1
  },
  {
    img: res2,
    h1: 'Residencia 2',
    path: '/Residencia2',
    component: Residencia2
  },
  {
    img: res3,
    h1: 'Residencia 3',
    path: '/Residencia3',
    component: Residencia3
  },
  {
    img: res4,
    h1: 'Residencia 4',
    path: '/Residencia4',
    component: Residencia4
  },
  {
    img: res5,
    h1: 'Residencia 5',
    path: '/Residencia5',
    component: Residencia5
  },
  {
    img: res6,
    h1: 'Residencia 6',
    path: '/Residencia6',
    component: Residencia6
  },
  {
    img: res7,
    h1: 'Residencia 7',
    path: '/Residencia7',
    component: Residencia7
  },
  {
    img: res8,
    h1: 'Residencia Praia',
    path: '/ResidenciaPraia',
    component: ResidenciaPraia
  },
  {
    img: res9,
    h1: 'Apartamento',
    path: '/Apartamento',
    component: Apartamento
  },
  {
    img: res10,
    h1: 'Man Cave',
    path: '/ManCave',
    component: ManCave
  },

]

export const PortComercial = [
  {
    img: img1,
    h1: 'Clara Ferreira Bauru Shopping',
    path: '/ClaraFerreira',
    component: ClaraFerreira
  },
  {
    img: img2,
    h1: 'Glitter Shopping Botucatu',
    path: '/GlitterShoppingBotucatu',
    component: GlitterShoppingBotucatu
  },
  {
    img: img3,
    h1: 'Clinica Veterinaria - Toca Silvestre',
    path: '/TocaSilvestre',
    component: TocaSilvestre
  },
  // {
  //   img: img4,
  //   h1: 'Komatsu Bauru',
  //   path: '/KomatsuBauru',
  //   component: KomatsuBauru
  // },
  {
    img: img5,
    h1: 'Hamburgueria Bets Itapuí',
    path: '/HamburgueriaBetsItapuí',
    component: HamburgueriaBetsItapuí
  },
  {
    img: img6,
    h1: 'La Casual modas',
    path: '/LaCasualmodas',
    component: LaCasualmodas
  },
  {
    img: img7,
    h1: 'Sala fisioterapia',
    path: '/Salafisioterapia',
    component: Salafisioterapia
  },
  {
    img: img8,
    h1: 'Sala Psicologia',
    path: '/SalaPsicologia',
    component: SalaPsicologia
  },
  {
    img: img9,
    h1: 'Salão de Beleza Gabriela Garcia',
    path: '/SalaoGabrielaGarcia',
    component: SalaoGabrielaGarcia
  },
  {
    img: img10,
    h1: 'Studio Pilates Fortaleza',
    path: '/StudioPilatesFortaleza',
    component: StudioPilatesFortaleza
  },

]

export const PortResidencial = [
  {
    img: res7,
    h1: 'Residencia 7',
    path: '/Residencia7',
    component: Residencia7
  },
  {
    img: res6,
    h1: 'Residencia 6',
    path: '/Residencia6',
    component: Residencia6
  },
  {
    img: res5,
    h1: 'Residencia 5',
    path: '/Residencia5',
    component: Residencia5
  },
  {
    img: res4,
    h1: 'Residencia 4',
    path: '/Residencia4',
    component: Residencia4
  },
  {
    img: res3,
    h1: 'Residencia 3',
    path: '/Residencia3',
    component: Residencia3
  },
  {
    img: res2,
    h1: 'Residencia 2',
    path: '/Residencia2',
    component: Residencia2
  },

  {
    img: res1,
    h1: 'Residencia 1',
    path: '/Residencia1',
    component: Residencia1
  },
  {
    img: res8,
    h1: 'Residencia Praia',
    path: '/ResidenciaPraia',
    component: ResidenciaPraia
  },
  {
    img: res9,
    h1: 'Apartamento',
    path: '/Apartamento',
    component: Apartamento
  },
  {
    img: res10,
    h1: 'Man Cave',
    path: '/ManCave',
    component: ManCave
  },
]
