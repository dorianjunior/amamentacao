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
import ImersaoProfissao from "./views/eventos/ImersaoProfissao.vue";
import FuroHumanizadoCurso from "./views/eventos/FuroHumanizadoCurso.vue";
import CuidadosBebes from "./views/eventos/CuidadosBebes.vue";
import FormacaoConsultores from "./views/eventos/FormacaoConsultores.vue";

const routes = [
    {
        path: "/", component: Home, meta: {
            title: "Amamentação Florianópolis | Furo de Orelha Humanizado - Enfª Glacy Song",
            description:
                "Enfermeira Glacy Song atua como consultora em aleitamento materno, laserterapeuta, consultora de cuidados com bebês, e realiza furo de orelha humanizado para adultos e bebês. Administra cursos para profissionais da saúde: Curso de Furo Humanizado Presencial, Curso de Cuidados com Bebês Presencial e Curso de Capacitação de Consultores em Aleitamento Materno.",
        }
    },
    { path: "/sobre", component: About, meta: {
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
    { path: "/faq", component: Faq, meta: {
            title: "Perguntas Frequentes | Enfª Glacy Song",
            description: "É normal sentir dor ao amamentar? É normal sentir um leve desconforto ou sensibilidade nos primeiros dias, mas não é normal sentir dor ao amamentar nem antes, durante ou depois. Se você está sentindo dor, entre em contato comigo, eu posso ajudar! O que é o furo de orelha humanizado?",
        }
    },
    { path: "/servicos/consultoria-aleitamento-materno", component: ConsultoriaAleitamento, meta: {
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
    { path: "/cursos/formacao-consultores", component: () => import('./views/cursos/FormacaoConsultoresCurso.vue'), meta: {
            title: "Formação de Consultores em Aleitamento Materno | Enfª Glacy Song",
            description: "Formação de Consultores em Aleitamento Materno para graduandos e profissionais da área da saúde. 8 horas de curso com base científica sólida e abordagem prática em Florianópolis.",
        }
    },
    { path: "/cursos/cuidados-bebes", component: () => import('./views/cursos/CuidadosBebesFormacao.vue'), meta: {
            title: "Formação em Cuidados com Bebês - Presencial | Enfª Glacy Song",
            description: "Formação técnica e afetiva em Cuidados com Bebês para profissionais da saúde e cuidadores. Curso presencial de 5 horas em Florianópolis com abordagem baseada em evidências e prática humanizada.",
        }
    },
    { path: "/cursos/furo-humanizado", component: () => import('./views/cursos/FuroHumanizadoFormacao.vue'), meta: {
            title: "Curso de Furo Humanizado - Presencial | Enfª Glacy Song",
            description: "Curso de Furo Humanizado presencial em Florianópolis. Formação completa de 5 horas com técnicas especializadas, conhecimento anatômico, biossegurança e humanização no atendimento. Para profissionais que desejam atuar com excelência na área.",
        }
    },
    { path: "/eventos/imersao-profissao", component: ImersaoProfissao, meta: {
            title: "Imersão Profissão Materno Infantil | Enfª Glacy Song",
            description: "Imersão Profissão Materno Infantil de 29 a 31 de agosto de 2025. Curso intensivo para profissionais que desejam se especializar na área materno-infantil. Conteúdo teórico e prático para atuação no mercado materno-infantil.",
        }
    },
    { path: "/eventos/formacao-consultores", component: FormacaoConsultores, meta: {
            title: "Curso de Formação de Consultores em Aleitamento Materno | Enfª Glacy Song",
            description: "Curso de Formação de Consultores em Aleitamento Materno em 29 de agosto de 2025 no Hotel Faial, Florianópolis. Formação completa com conhecimento científico e prático para consultores especializados.",
        }
    },
    { path: "/eventos/cuidados-bebes", component: CuidadosBebes, meta: {
            title: "Curso de Cuidados com Bebês | Enfª Glacy Song",
            description: "Curso de Cuidados com Bebês em 31 de agosto de 2025 no Hotel Faial, Florianópolis. Conhecimentos fundamentais sobre cuidados, higiene, alimentação e desenvolvimento infantil para pais e cuidadores.",
        }
    },
    { path: "/eventos/furo-humanizado", component: FuroHumanizadoCurso, meta: {
            title: "Curso de Furo Humanizado - Bebê e Adulto | Enfª Glacy Song",
            description: "Curso de Furo Humanizado para bebês e adultos em 31 de agosto de 2025. Técnicas especializadas, cuidados, segurança e acolhimento para profissionais da área de estética e beleza.",
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});


router.beforeEach((to, from, next) => {
    // Atualizar título da página
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    
    // Atualizar meta description
    if (to.meta.description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', to.meta.description);
        }
    }
    
    // Atualizar canonical URL
    const baseUrl = 'http://amamentacaoflorianopolis.com.br';
    const canonicalUrl = baseUrl + to.path;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
        canonicalLink.setAttribute('href', canonicalUrl);
    } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalLink);
    }
    
    // Atualizar Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
        ogUrl.setAttribute('content', canonicalUrl);
    }
    
    // Atualizar Twitter URL
    let twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
        twitterUrl.setAttribute('content', canonicalUrl);
    }
    
    next();
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
