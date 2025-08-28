import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'

// Importar bibliotecas de animação
import AOS from 'aos'

import './assets/css/main.css'

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Contact from "./views/Contact.vue";
import Faq from "./views/Faq.vue";
import ConsultoriaAleitamento from "./views/services/ConsultoriaAleitamento.vue";
import FuroHumanizado from "./views/services/FuroHumanizado.vue";
import HomeCareMaterno from "./views/services/HomeCareMaterno.vue";
import CursoGestantes from "./views/services/CursoGestantes.vue";
import Laserterapia from "./views/services/Laserterapia.vue";
import PacotePremium from "./views/services/PacotePremium.vue";

const routes = [
    {
        path: "/", component: Home, meta: {
            title: "Amamentação Florianópolis | Furo de Orelha Humanizado - Enfª Glacy Song",
            description:
                "Enfermeira Glacy Song atua como consultora em aleitamento materno, laserterapeuta, consultora de cuidados com bebês, e realiza furo de orelha humanizado para adultos e bebês. Administra cursos para profissionais da saúde: Curso de Furo Humanizado Presencial, Curso de Cuidados com Bebês Presencial e Curso de Capacitação de Consultores em Aleitamento Materno.",
        }
    },
    { path: "/sobremim", component: About, meta: {
            title: "Sobre mim | Enfª Glacy Song",
            description: "Enfermeira Glacy Song, pós-graduada em Saúde da Mulher e Saúde da Família, é Consultora em Aleitamento Materno e Cuidados com Bebês, Laserterapeuta e realiza Furo de Orelha Humanizado. Oferece atendimentos humanizados, home care, laserterapia, furo de orelha e cursos para gestantes e profissionais da saúde. Com técnica, empatia e escuta ativa, acolhe mães e famílias com segurança e dedicação.",
        }
    },
    { path: "/servicos", component: Services, meta: {
            title: "Nossos serviços | Enfª Glacy Song",
            description: "Consultoria em Amamentação; Furo de Orelha Humanizado; Laserterapia; Home Care Puerperal; Home Care Bebê; Home Care Materno Infantil; Curso para gestantes/casais Presencial; Curso para Cuidadores de Bebês Presencial em Florianópolis; Curso para Consultores em Aleitamento Materno Presencial em Florianópolis; Curso de Furo Humanizado Presencial em Florianópolis; Curso de Cuidados com Bebês Presencial em Florianópolis.",
        }
    },
    { path: "/contato", component: Contact, meta: {
            title: "Contato | Enfª Glacy Song",
            description: "Rua Bento Gonçalves, 174 Centro, Florianópolis - SC, 88010-080; WhatsApp - (48) 99668-0096; Instagram - @amamentacao.florianopolis; TikTok - @amamentacaoflorianopolis",
        }
    },
    { path: "/perguntasfrequentes", component: Faq, meta: {
            title: "Perguntas Frequentes | Enfª Glacy Song",
            description: "É normal sentir dor ao amamentar? É normal sentir um leve desconforto ou sensibilidade nos primeiros dias, mas não é normal sentir dor ao amamentar nem antes, durante ou depois. Se você está sentindo dor, entre em contato comigo, eu posso ajudar! O que é o furo de orelha humanizado?",
        }
    },
    { path: "/servicos/consultoria-aleitamento", component: ConsultoriaAleitamento, meta: {
            title: "Consultoria em Aleitamento Materno | Enfª Glacy Song",
            description: "Consultoria especializada em aleitamento materno com a Enfª Glacy Song. Avaliação completa, orientações técnicas, suporte emocional e acompanhamento personalizado para gestantes e puérperas. Atendimento presencial, domiciliar ou online em Florianópolis.",
        }
    },
    { path: "/servicos/furo-humanizado", component: FuroHumanizado, meta: {
            title: "Furo de Orelha Humanizado | Enfª Glacy Song",
            description: "Furo de orelha humanizado para bebês e adultos em Florianópolis. Procedimento sem dor, sem trauma, com técnicas especializadas de alívio. Atendimento domiciliar ou no consultório com acompanhamento completo e kit de cuidados.",
        }
    },
    { path: "/servicos/home-care-materno", component: HomeCareMaterno, meta: {
            title: "Home Care Materno Infantil | Enfª Glacy Song",
            description: "Home Care materno infantil especializado em Florianópolis. Cuidado integral para mães e bebês no pós-parto, massagem terapêutica, laserterapia, suporte à amamentação e orientações sobre cuidados com recém-nascidos no conforto do seu lar.",
        }
    },
    { path: "/servicos/curso-gestantes", component: CursoGestantes, meta: {
            title: "Curso para Gestantes e Casais | Enfª Glacy Song",
            description: "Oficina personalizada de cuidados com o bebê para gestantes e casais em Florianópolis. Preparação afetiva, prática e segura para a chegada do bebê com 3h de duração. Plano de parto, amamentação, primeiros cuidados e muito mais.",
        }
    },
    { path: "/servicos/laserterapia", component: Laserterapia, meta: {
            title: "Laserterapia para Mamães e Bebês | Enfª Glacy Song",
            description: "Laserterapia especializada para mamães e bebês em Florianópolis. Tratamento indolor, seguro e eficaz para alívio de dores, cicatrização e bem-estar materno-infantil. Sessões de 30 minutos.",
        }
    },
    { path: "/servicos/pacote-premium", component: PacotePremium, meta: {
            title: "Pacote Premium | Enfª Glacy Song",
            description: "Pacote Premium: cuidado integral do pré-natal ao pós-parto. Curso exclusivo, consultorias de amamentação, home care, suporte via WhatsApp, deslocamento incluído e kit Maternal Baby. Experiência completa em 3 etapas para famílias que valorizam excelência.",
        }
    },
];

//

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

// Inicializar AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
});

app.use(router);
app.mount('#app');
