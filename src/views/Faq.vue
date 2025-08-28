<template>
  <div class="faq-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 data-aos="fade-down">Perguntas Frequentes</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Tire suas dúvidas sobre consultoria em amamentação, atendimentos e nossos serviços especializados
        </p>
      </div>
    </section>

    <!-- FAQ Categories -->
    <section class="faq-section">
      <div class="faq-container">
        <!-- Category Tabs -->
        <div class="category-tabs" data-aos="fade-up">
          <button 
            v-for="(category, index) in categories" 
            :key="index"
            :class="['tab-button', { active: activeCategory === index }]"
            @click="setActiveCategory(index)"
          >
            <i :class="category.icon"></i>
            {{ category.name }}
          </button>
        </div>

        <!-- FAQ Items -->
        <div class="faq-content">
          <div class="faq-list">
            <div 
              v-for="(faq, index) in currentFaqs" 
              :key="index"
              class="faq-item"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="faq-question" @click="toggleFaq(index)">
                <h3>{{ faq.pergunta }}</h3>
                <div class="faq-toggle">
                  <i :class="faq.isOpen ? 'fas fa-minus' : 'fas fa-plus'"></i>
                </div>
              </div>
              <div class="faq-answer" :class="{ open: faq.isOpen }">
                <div class="answer-content">
                  <p v-html="faq.resposta"></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact CTA -->
          <div class="faq-cta" data-aos="fade-up">
            <div class="cta-content">
              <h3>Não encontrou sua resposta?</h3>
              <p>Entre em contato comigo pelo WhatsApp e tire todas as suas dúvidas</p>
              <a href="https://wa.me/5548996680096" target="_blank" class="cta-button">
                <i class="fab fa-whatsapp"></i>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      activeCategory: 0,
      categories: [
        {
          name: 'Atendimentos',
          icon: 'fas fa-calendar-check'
        },
        {
          name: 'Consultoria',
          icon: 'fas fa-user-nurse'
        },
        {
          name: 'Laserterapia',
          icon: 'fas fa-magic'
        },
        {
          name: 'Furo de Orelha',
          icon: 'fas fa-gem'
        },
        {
          name: 'Curso Gestantes',
          icon: 'fas fa-baby'
        },
        {
          name: 'Home Care',
          icon: 'fas fa-home'
        },
        {
          name: 'Cursos Capacitantes',
          icon: 'fas fa-graduation-cap'
        }
      ],
      faqsByCategory: [
        // Sobre Atendimentos
        [
          {
            pergunta: 'Qual o horário de atendimento?',
            resposta: 'De segunda-feira à sexta-feira, das 9h00 às 17h00.',
            isOpen: false
          },
          {
            pergunta: 'Como marco a consulta?',
            resposta: 'Através do número de WhatsApp <strong>(48) 99668-0096</strong>.',
            isOpen: false
          },
          {
            pergunta: 'Quais são as formas de atendimento? Realiza atendimento domiciliar e online?',
            resposta: 'São dois formatos:<br><br><strong>PRESENCIAL</strong> - no conforto do seu domicílio ou em consultório no Centro de Florianópolis.<br><br><strong>ONLINE</strong> - por meio de videoconferência. É recomendado realizarmos uma avaliação para verificar se essa modalidade é o mais ideal no seu caso.',
            isOpen: false
          },
          {
            pergunta: 'Após as consultas, terei algum acompanhamento?',
            resposta: 'Sim, realizo acompanhamento pelo WhatsApp por pelo menos <strong>02 semanas</strong> após a última consulta (a depender do tipo de consulta, o acompanhamento pode durar mais).',
            isOpen: false
          },
          {
            pergunta: 'Quais são as formas de pagamento?',
            resposta: 'Dinheiro, transferências bancária, PIX e <strong>crédito parcelado em até 6x</strong>.',
            isOpen: false
          }
        ],
        // Sobre Consultoria em Amamentação
        [
          {
            pergunta: 'Por que realizar uma consultoria em amamentação?',
            resposta: 'Posso te ajudar de forma qualificada a ter uma amamentação saudável, sem dores e de forma efetiva, evitando complicações para você e seu bebê. Uma amamentação saudável faz com que o bebê se desenvolva de forma saudável.<br><br>Além disso, pode-se ter uma grande economia financeira, por diminuir a quantidade de leite em fórmula, dispositivos para ofertar o leite e com saúde (o leite materno aumenta a imunidade e evita complicações).',
            isOpen: false
          },
          {
            pergunta: 'Quando devo começar a consultoria em amamentação?',
            resposta: 'O momento ideal de realizar a consultoria em aleitamento materno é na gestação, antes do bebê nascer, pois dessa forma, a mãe irá preparada para amamentar logo após o parto, evitando machucar as mamas e ter dores e complicações.<br><br>Mas se seu bebê já nasceu e você tem alguma dúvida, está com dor, complicações ou seu bebê está com dificuldade para amamentar ou não está ganhando peso, é recomendado ter uma consultoria com urgência! Não passe por isso sozinha, eu posso te ajudar!',
            isOpen: false
          },
          {
            pergunta: 'É normal sentir dor ao amamentar?',
            resposta: 'É normal sentir um leve desconforto ou sensibilidade nos primeiros dias, mas <strong>não é normal sentir dor ao amamentar</strong> nem antes, durante ou depois. Se você está sentindo dor, entre em contato comigo, eu posso ajudar!',
            isOpen: false
          },
          {
            pergunta: 'A consultoria em aleitamento materno pode ajudar meu bebê a ganhar peso?',
            resposta: 'Sim! Geralmente o bebê não ganha peso devido alguma complicação na amamentação. Meu papel é identificar quais são as causas e assim, corrigi-las para termos uma amamentação eficiente e saudável.',
            isOpen: false
          },
          {
            pergunta: 'Como é o formato do seu atendimento?',
            resposta: 'Esse atendimento pode ser realizado presencialmente no conforto da sua casa ou no consultório.<br><br>Após as consultas de correção, pode-se realizar consulta remota através de videoconferência.',
            isOpen: false
          },
          {
            pergunta: 'O que está incluso na sua consulta?',
            resposta: 'Minha consulta é bem completa. Inclui toda a parte de orientação teórica e prática sobre esse assunto, avaliação da boca do bebê, avaliação da mama, ajuste de pega, massagem, ordenha de alívio, materiais, deslocamento (se desejar o formato domiciliar) e acompanhamento até 02 semanas pelo WhatsApp.',
            isOpen: false
          },
          {
            pergunta: 'Você realiza consultoria somente para amamentar ou para o desmame também?',
            resposta: 'Sim, realizo a consultoria de desmame de forma gradual e gentil, diminuindo os traumas que podem causar na mãe ou no bebê.',
            isOpen: false
          },
          {
            pergunta: 'Você trabalha com laser nas mamas?',
            resposta: 'Sim, o laser de baixa potência pode ser um aliado na consultoria em aleitamento materno, tanto para a mãe, como para o bebê. Mas é utilizado como auxílio para um determinado problema, e não como rotina para todas as mães.<br><br>O laser apesar de ser ótimo para tratar diversas situações no aleitamento materno, não é solução, pois só trata o problema e não a causa!',
            isOpen: false
          }
        ],
        // Sobre Laserterapia
        [
          {
            pergunta: 'O que é a laserterapia e como ela funciona?',
            resposta: 'A laserterapia é uma técnica terapêutica que utiliza luz de baixa intensidade para estimular a regeneração dos tecidos, aliviar dores e reduzir inflamações. É um recurso seguro, indolor e não invasivo, amplamente utilizado no cuidado à saúde da mulher no pós-parto e em alguns casos na pediatria.',
            isOpen: false
          },
          {
            pergunta: 'Quais são as indicações da laserterapia no puerpério?',
            resposta: 'A aplicação do laser é indicada para:<br><br>• Fissuras e lesões nos mamilos causadas pela amamentação<br>• Dor mamária ou início de mastite<br>• Inchaço ou ingurgitamento das mamas<br>• Cicatrização de laceração perineal ou episiotomia<br>• Recuperação de cicatriz da cesariana<br>• Alívio de dores musculares ou articulares comuns no pós-parto<br>• Conforto e relaxamento da mãe',
            isOpen: false
          },
          {
            pergunta: 'Quais são as indicações da laserterapia em bebês e crianças?',
            resposta: 'A laserterapia pode ser indicada para:<br><br>• Assaduras e dermatites resistentes<br>• Aftas, traumas orais e candidíase (sapinho)<br>• Alívio de dor em otites e inflamações locais<br>• Estomatites e gengivites<br>• Alívio de dor<br>• Cicatrização de cortes, machucados ou procedimentos cirúrgicos<br>• Estímulo de pontos específicos em casos de auriculoterapia infantil<br>• Colocação de brinco',
            isOpen: false
          },
          {
            pergunta: 'A aplicação dói? Posso ter alguma queimadura?',
            resposta: 'Não. A aplicação é totalmente indolor e como o laser é de baixa intensidade, não tem capacidade de gerar queimaduras na pele.',
            isOpen: false
          },
          {
            pergunta: 'É seguro para a mãe ou para o bebê?',
            resposta: 'Sim, é completamente seguro. É um tratamento aprovado para uso na amamentação, sem contraindicações quando realizado por profissional capacitada.',
            isOpen: false
          },
          {
            pergunta: 'Em quanto tempo vejo resultados?',
            resposta: 'Os resultados variam conforme a condição tratada, mas muitas mães relatam alívio significativo já após a primeira sessão, especialmente em casos de dor ou fissura. A recuperação completa pode exigir uma sequência de sessões, conforme avaliação individual.',
            isOpen: false
          },
          {
            pergunta: 'Preciso interromper a amamentação para fazer laser?',
            resposta: 'Não. O tratamento com laser é compatível com a amamentação e, em muitos casos, contribui para mantê-la de forma mais confortável e segura. O bebê poderá mamar logo em seguida.',
            isOpen: false
          },
          {
            pergunta: 'Quantas sessões são necessárias?',
            resposta: 'Isso depende da situação clínica. Algumas condições leves se resolvem com 1 a 2 sessões; outros casos podem exigir sessões adicionais. A avaliação é feita caso a caso.',
            isOpen: false
          },
          {
            pergunta: 'Existe alguma contraindicação?',
            resposta: 'A laserterapia é segura, mas há contraindicações em casos específicos, como doenças autoimunes ativas, infecções generalizadas ou uso de certos medicamentos fotossensibilizantes. Por isso, é fundamental realizarmos uma triagem antes de realizar a laserterapia.',
            isOpen: false
          }
        ],
        // Sobre Furo de Orelha Humanizado
        [
          {
            pergunta: 'O que é o furo de orelha humanizado?',
            resposta: 'É uma técnica que combina diversos processos para um procedimento menos traumático, prezando métodos mais naturais, sempre no tempo do cliente e sua família.<br><br>Realizo um procedimento personalizado para cada cliente, de acordo com suas necessidades e preferências, de forma bem paciente e atenciosa. É pensado nos mínimos detalhes para que ocorra da melhor forma possível, garantindo a satisfação.',
            isOpen: false
          },
          {
            pergunta: 'Qual é a melhor idade para furar a orelha?',
            resposta: 'De preferência, a partir dos <strong>30 dias de vida</strong>. É sempre interessante conversar com o pediatra e comigo antes de tomar a decisão. Alguns dos fatores que podem ser levados em consideração é a idade gestacional do bebê, estado de saúde e vacinação.<br><br>Realizo a perfuração de bebês, crianças e adultos!',
            isOpen: false
          },
          {
            pergunta: 'Que método é utilizado para furar a orelha?',
            resposta: 'Tanto em bebês como em adultos, é utilizado o método de aplicação com o próprio brinco, no aplicador silencioso esterilizado e descartável da Studex System 75 ou com cateter sobre agulha. O brinco é aplicado diretamente no ponto neutro da orelha (local menos enervado ou seja, que causa menos dor, e não corresponde a nenhum ponto que prejudique a funcionalidade do corpo).',
            isOpen: false
          },
          {
            pergunta: 'Quais métodos para alívio da dor é utilizado?',
            resposta: 'Prezo os métodos mais naturais, de acordo com as preferências da cliente e família. Alguns métodos são: musicoterapia, amamentação, vibração, crioterapia (gelo) e laserterapia. Mas também há a opção de utilizar pomada anestésica.',
            isOpen: false
          },
          {
            pergunta: 'Qual o melhor brinco para furar a orelha?',
            resposta: 'O brinco deve ser estéril e de material biocompatível, para evitar que o corpo o rejeite, resultando em alergias, inflamações e infecções. O mais indicado é o brinco de aço inox cirúrgico e o de ouro 24k.<br><br>Desse modo, utilizo os brincos da Studex, importados dos EUA, feitos de aço inox cirúrgico com banho de ouro 24k, 100% antialérgicos e esterilizados. Esses brincos vem junto com aplicadores descartáveis em sistemas fechados e de uso único, garantindo mais segurança e higiene na hora da colocação.',
            isOpen: false
          },
          {
            pergunta: 'Onde posso realizar o procedimento?',
            resposta: 'Esse procedimento pode ser realizado em sua residência ou no consultório.',
            isOpen: false
          },
          {
            pergunta: 'Quais áreas você realiza a perfuração?',
            resposta: 'Realizo a perfuração do 1º, 2º, 3º e 4º furo.',
            isOpen: false
          },
          {
            pergunta: 'Quais são as contraindicações de realizar a perfuração?',
            resposta: 'Para pessoas que estão com a imunidade baixa (devido algum tratamento ou doença), tiveram alguma doença infecciosa nos últimos 10 dias, febre, gestantes e lactantes, bebês com baixo peso, e pessoas que foram vacinadas nos últimos 03 dias ou tomarão nos próximos 10 dias.<br><br>É sempre importante conversar com um profissional da saúde para saber o momento ideal.',
            isOpen: false
          },
          {
            pergunta: 'Quantas perfurações posso fazer no mesmo dia?',
            resposta: 'Poderá ser perfurado até <strong>03 locais diferentes</strong> por sessão.',
            isOpen: false
          },
          {
            pergunta: 'Sou menor de 18 anos, posso perfurar a orelha sem responsável?',
            resposta: 'A perfuração pode ser realizada em menores de 18 anos, porém, sempre acompanhado de algum responsável.',
            isOpen: false
          },
          {
            pergunta: 'Quais cuidados preciso ter após furar a orelha?',
            resposta: 'É necessário tomar todos os cuidados passados na consulta, como a limpeza diária do local, evitar banho de sol, mar e piscina, evitar bater e puxar o brinco.',
            isOpen: false
          },
          {
            pergunta: 'O que está incluso no seu atendimento?',
            resposta: 'O meu atendimento é bem completo. Está incluso a perfuração, o brinco, o deslocamento (se desejar realizar em domicílio), todos os métodos de alívio da dor e o acompanhamento de <strong>03 meses</strong> pelo WhatsApp.<br><br>Além disso, como forma de mimar meus clientes, presenteio com um kit feito carinhosamente por mim com itens para limpeza e cuidado com o local e alguns mimos muito fofos.',
            isOpen: false
          },
          {
            pergunta: 'Posso usar meu próprio brinco para furar?',
            resposta: 'Infelizmente não. Por normas da Anvisa (Agência Nacional de Vigilância Sanitária) e recomendações da legislação sanitária vigente, o procedimento de perfuração deve ser realizado exclusivamente com brincos estéreis, descartáveis e biocompatíveis.<br><br>Isso garante a segurança, a prevenção de infecções e a adequada cicatrização do local. Os brincos utilizados no procedimento são específicos para o furo, devidamente lacrados e aprovados para uso em perfurações.<br><br>Mas não se preocupe, você poderá trocar o brinco após algumas semanas!',
            isOpen: false
          }
        ],
        // Sobre o Curso de Gestantes/Casais
        [
          {
            pergunta: 'Como funciona o curso?',
            resposta: 'O curso é totalmente particular e personalizado para cada família. Feito na própria casa, levando em conta todo o ambiente, desejos e dúvidas. É um encontro de aproximadamente <strong>3 horas</strong>, onde é mostrado na prática como realizar os cuidados com o bebê. De bônus, também terá a construção do plano de parto e alguns cuidados com a gestante/mamãe.',
            isOpen: false
          },
          {
            pergunta: 'Por que realizar o curso?',
            resposta: 'Ao participar, você e sua família aprendem, de forma leve e personalizada, sobre cuidados com o bebê, amamentação, puerpério, primeiros socorros, lista de enxoval e muito mais.<br><br>Mais do que um curso, é um espaço de escuta, troca e fortalecimento emocional. Ideal para quem deseja se sentir mais confiante, respeitada e bem acompanhada na gestação e nos primeiros dias com o bebê.<br><br>E ele é personalizado para cada família, levando em conta a sua casa, rotina e realidade.',
            isOpen: false
          },
          {
            pergunta: 'Para quem é indicado o curso?',
            resposta: 'Para mães, pais, casais e cuidadores de bebês, ou seja, todos que cuidarão do bebê.',
            isOpen: false
          },
          {
            pergunta: 'Quais são os temas abordados no curso?',
            resposta: 'Preparo da gestante/mãe no parto e no puerpério, como por exemplo, construção do plano de parto, formas de alívios da dor, sinais de alerta.<br><br>Cuidado com o bebê como banho, troca de fralda, cuidados com o umbigo, primeiros socorros, manutenção das unhas, troca de roupa, enxoval, sono, amamentação, e muito mais!',
            isOpen: false
          },
          {
            pergunta: 'O que está incluso no valor do curso?',
            resposta: 'O curso contém todos os materiais necessários para a demonstração, o deslocamento e um kit com mimos.',
            isOpen: false
          },
          {
            pergunta: 'Qual o melhor período para realizar o curso?',
            resposta: 'Para as mães, pais e casais, é indicado iniciar até <strong>30 dias antes da data provável do parto</strong>, de preferência entre o 7º ao 8ª mês.<br><br>Para os cuidadores, é indicado iniciar o quanto antes, para que já possa atuar!',
            isOpen: false
          }
        ],
        // Sobre Home Care
        [
          {
            pergunta: 'Por que contratar o serviço home care?',
            resposta: 'É aquela extensão do serviço da maternidade na casa da família. O atendimento Home Care é ideal para o pós-parto, pois oferece cuidado especializado no conforto e na privacidade da sua casa. Ele evita deslocamentos desnecessários e proporciona um ambiente mais seguro e acolhedor para a puérpera e o recém-nascido — especialmente nos primeiros dias, quando surgem dúvidas, inseguranças e a necessidade de apoio real.<br><br>Durante a visita, realizo orientações práticas sobre amamentação, cuidados com o bebê, puerpério, intercorrências comuns e o que mais for necessário, de forma totalmente personalizada. É um momento de acolhimento, conforto e presença profissional qualificada, voltado à mãe e ao bebê.',
            isOpen: false
          },
          {
            pergunta: 'Como funciona o home care?',
            resposta: 'Existem duas opções de horário: <strong>04 horas ou 08 horas</strong>, onde fico na casa nesse tempo integral, prestando o serviço de acompanhamento e cuidado da puérpera e do bebê, auxiliando e dando orientações sobre a amamentação, troca de fraldas, limpeza do coto umbilical, sono e corte de unhas.<br><br>Ainda a mamãe conta com terapias integrativas, para ficar mais tranquila para cuidar do seu bebê, como massagens, laserterapia e escuta qualificada.',
            isOpen: false
          },
          {
            pergunta: 'O que está incluso no valor do home care?',
            resposta: 'Está incluso todos os materiais necessários para prestar o cuidado básico com a mãe e o bebê, o deslocamento e um kit com mimos.',
            isOpen: false
          },
          {
            pergunta: 'Para quem é indicado contratar o home care?',
            resposta: 'É indicado para todas as famílias que desejam conforto, segurança e auxílio após a alta hospitalar.<br><br>Todos podem se beneficiar desse serviço, principalmente para as mães com alguma restrição ou complicação pós-parto que dificultem o seu cuidado e o cuidado com o bebê; bebês prematuros, gemelares ou com alguma complicação, e para famílias com pouco ou nenhum apoio, necessitando de ajuda para cumprir as tarefas de se cuidar e cuidar de um novo ser, ou para a família que deseja um pouco mais de conforto e descanso pós-parto.',
            isOpen: false
          }
        ],
        // Sobre os Cursos Capacitantes
        [
          {
            pergunta: 'Ainda não me formei, posso fazer o curso?',
            resposta: 'Sim, todos os cursos administrados da Amamentação Florianópolis não precisam de uma formação completa, portanto qualquer pessoa acima de 18 anos, podem realizar os cursos.',
            isOpen: false
          },
          {
            pergunta: 'Por que fazer um curso capacitante?',
            resposta: 'Estes cursos te possibilitarão a ter uma renda extra ou até mesmo um trabalho autônomo com valor agregado, que te trará a possibilidade de realizar sua própria agenda; desenvolver seu próprio método de trabalho; ter mais tempo para a família, descansar e fazer as coisas que você mais gosta; ser seu próprio chefe; tirar férias quando você quiser, e ser referência na sua cidade.',
            isOpen: false
          },
          {
            pergunta: 'Tem certificado?',
            resposta: 'Sim, todos os alunos de todos os cursos recebem um <strong>certificado físico</strong> após o término do curso.',
            isOpen: false
          },
          {
            pergunta: 'O que é incluso no curso?',
            resposta: 'Em todos os cursos, todo o material teórico e prático está incluso. Também, o aluno receberá um certificado físico, materiais impressos, kits (a depender do curso), um delicioso coffee break e o acompanhamento de <strong>02 meses</strong> pelo WhatsApp com a própria enfermeira Glacy, para tirar suas dúvidas e ter acompanhamento do início da sua carreira.',
            isOpen: false
          },
          {
            pergunta: 'Como é feita a inscrição?',
            resposta: 'A inscrição é feita através do WhatsApp <strong>(48) 99668-0096</strong>.',
            isOpen: false
          },
          {
            pergunta: 'Quais são as condições de pagamento?',
            resposta: 'Todos os cursos podem ser realizados via transferência bancária, PIX ou <strong>crédito parcelado em até 6x</strong>.<br><br>No ato da matrícula, é necessário realizar o pagamento de pelo menos <strong>30% do valor do curso</strong>, já que é um curso com vagas limitadas (são apenas 05 vagas por turma).',
            isOpen: false
          },
          {
            pergunta: 'Se eu desistir/remarcar o curso, como funciona?',
            resposta: 'Caso haja desistência do curso:<br><br>• haverá reembolso total se cancelado no prazo de 20 dias antes do curso;<br>• haverá reembolso de 50% se cancelado no prazo de 15 dias antes do curso;<br>• haverá reembolso de 25% se cancelado no prazo de 5 dias antes do curso;<br>• não haverá reembolso se cancelado no prazo de 4 dias antes do curso;<br><br>Caso o aluno necessite remarcar o curso por motivos de saúde comprovada, não haverá cobrança adicional. Poderá realizar em até 6 meses após a inscrição.',
            isOpen: false
          }
        ]
      ]
    }
  },
  computed: {
    currentFaqs() {
      return this.faqsByCategory[this.activeCategory] || []
    }
  },
  methods: {
    setActiveCategory(index) {
      this.activeCategory = index
      // Fechar todas as FAQs quando trocar de categoria
      this.faqsByCategory.forEach(category => {
        category.forEach(faq => {
          faq.isOpen = false
        })
      })
    },
    toggleFaq(index) {
      this.currentFaqs[index].isOpen = !this.currentFaqs[index].isOpen
    }
  }
}
</script>

<style scoped>
/* === PÁGINA DE FAQ === */
.faq-page {
  min-height: 100vh;
  background: var(--color-background);
}

/* Hero Section */
.hero-section {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="white" opacity="0.1"><polygon points="0,100 1000,0 1000,100"/></svg>');
  background-size: cover;
  background-position: bottom;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* FAQ Section */
.faq-section {
  padding: 6rem 0;
}

.faq-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  padding: 1rem;
  background: white;
  border-radius: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 1.5rem;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tab-button:hover {
  background: var(--color-background-light);
  color: var(--color-primary);
}

.tab-button.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  box-shadow: 0 4px 15px rgba(161, 123, 165, 0.3);
}

.tab-button i {
  font-size: 1.1rem;
}

/* FAQ Content */
.faq-content {
  max-width: 800px;
  margin: 0 auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.faq-item {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  background: white;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: var(--color-background-light);
}

.faq-question h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin: 0;
  flex: 1;
  padding-right: 1rem;
  line-height: 1.4;
}

.faq-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-toggle i {
  color: white;
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  background: var(--color-background-light);
}

.faq-answer.open {
  max-height: 500px;
  padding: 0 2rem 2rem;
}

.answer-content {
  padding-top: 1rem;
}

.answer-content p {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

.answer-content strong {
  color: var(--color-primary-dark);
  font-weight: 600;
}

/* FAQ CTA */
.faq-cta {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, var(--color-background-light), white);
  border-radius: 2rem;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
}

.cta-content h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 1rem;
}

.cta-content p {
  color: var(--color-text);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  text-decoration: none;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
}

.cta-button i {
  font-size: 1.3rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .category-tabs {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  
  .tab-button {
    justify-content: center;
    padding: 1rem;
  }
  
  .faq-question {
    padding: 1.5rem;
  }
  
  .faq-question h3 {
    font-size: 1.1rem;
  }
  
  .faq-answer.open {
    padding: 0 1.5rem 1.5rem;
  }
  
  .faq-cta {
    padding: 2rem 1.5rem;
  }
  
  .cta-content h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 6rem 0 3rem;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .faq-section {
    padding: 4rem 0;
  }
  
  .faq-container {
    padding: 0 1rem;
  }
  
  .category-tabs {
    margin-bottom: 3rem;
    padding: 0.5rem;
  }
  
  .tab-button {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  .faq-question {
    padding: 1.25rem;
  }
  
  .faq-question h3 {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  
  .faq-toggle {
    width: 35px;
    height: 35px;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}
</style>
