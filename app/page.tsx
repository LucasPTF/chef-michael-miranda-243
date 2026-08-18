import Image from "next/image";

const checkoutUrl = "#inscricao";

const recipes = [
  {
    number: "01",
    title: "Pão low carb fermentado",
    text: "Entenda o pré fermento, o ponto da massa e os detalhes que fazem o pão crescer e ganhar uma textura muito melhor.",
  },
  {
    number: "02",
    title: "Pizza leve e saborosa",
    text: "Aprenda uma massa que funciona de verdade e descubra como acertar textura, sabor e execução.",
  },
  {
    number: "03",
    title: "Chocolate caseiro",
    text: "Prepare o chocolate que será usado no bolo e entenda como equilibrar os ingredientes sem complicação.",
  },
  {
    number: "04",
    title: "Bolo prestígio low carb",
    text: "Faça um bolo úmido, saboroso e com boa textura, sem repetir os erros que deixam a massa seca ou pesada.",
  },
];

const forYou = [
  "Já tentou receitas low carb que ficaram secas, pesadas ou simplesmente não deram certo.",
  "Quer emagrecer sem viver de frango seco, salada e comida sem graça.",
  "Está começando na low carb e quer aprender do jeito certo desde o início.",
  "Já faz low carb, mas ainda depende de receitas prontas e tem medo de improvisar.",
  "Quer cozinhar algo gostoso que também possa servir para toda a família.",
  "Cansou de desperdiçar ingredientes em tentativas frustradas.",
];

const faq = [
  [
    "Nunca fiz low carb. Vou conseguir acompanhar?",
    "Sim. O Intensivo foi pensado para quem está começando ou quer recomeçar com uma explicação simples, prática e passo a passo.",
  ],
  [
    "Eu não sei cozinhar. Essa aula é para mim?",
    "É. Você não precisa ter experiência. O Chef Michael mostra cada etapa e explica o motivo por trás do preparo para você entender o que está fazendo.",
  ],
  [
    "Já comprei outros cursos de receitas. O que muda aqui?",
    "Aqui você não recebe somente ingredientes e modo de preparo. Você aprende os pontos de execução que fazem a receita funcionar e como evitar os erros mais comuns.",
  ],
  [
    "Vou precisar comprar ingredientes caros?",
    "Não é essa a proposta. Sempre que possível, o Chef Michael mostra escolhas inteligentes e substituições para evitar gastos e desperdício desnecessários.",
  ],
  [
    "Consigo fazer as receitas para a minha família?",
    "Sim. A ideia é preparar comida de verdade, saborosa e possível de entrar na rotina da casa, sem precisar cozinhar uma refeição de dieta separada.",
  ],
  [
    "Como vou receber as informações da aula?",
    "Depois da inscrição, você receberá as orientações de acesso e entrará no grupo de WhatsApp do Intensivo, onde serão enviados os avisos e o link da transmissão.",
  ],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function CTA({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <a className={`button${light ? " button-light" : ""}`} href={checkoutUrl}>
      {children} <Arrow />
    </a>
  );
}

export default function Home() {
  return (
    <main id="topo">
      <header className="site-header" aria-label="Navegação principal">
        <a className="brand" href="#topo" aria-label="Chef Michael Miranda, início">
          <Image
            src="/images/logo-receitas-low-carb.png"
            alt="Receitas Low Carb"
            width={230}
            height={153}
            priority
            className="brand-logo"
          />
        </a>
        <nav aria-label="Seções da página">
          <a href="#intensivo">O Intensivo</a>
          <a href="#tecnica">A técnica</a>
          <a href="#chef">O Chef</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="button button-small" href={checkoutUrl}>
          Quero participar <Arrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Intensivo de Receitas Low Carb ao vivo</p>
          <h1 id="hero-title">
            Pão que cresce. Pizza leve. <em>Bolo que não vira tijolo.</em>
          </h1>
          <p className="hero-lead">
            Passe um dia na cozinha com o Chef Michael Miranda e aprenda a fazer quatro preparos low carb que realmente funcionam.
          </p>
          <p className="hero-support">
            Mesmo que você não saiba cozinhar ou já tenha desperdiçado ingredientes em receitas que deram errado.
          </p>
          <div className="hero-actions">
            <CTA>Quero cozinhar com o Chef Michael</CTA>
            <a className="text-link" href="#intensivo">
              Ver o que vou aprender
            </a>
          </div>
          <div className="hero-facts" aria-label="Informações do Intensivo">
            <span><strong>Ao vivo</strong> na cozinha</span>
            <span><strong>5 a 6 horas</strong> de aula prática</span>
            <span><strong>4 preparos</strong> completos</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/michael-hero.webp"
            alt="Chef Michael Miranda preparando uma receita low carb em sua cozinha"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 48vw"
            className="hero-image"
          />
          <div className="hero-quote">
            <span>Receita você copia.</span>
            <strong>Técnica você leva para a vida inteira.</strong>
          </div>
        </div>
      </section>

      <section className="problem section-pad">
        <div className="section-intro">
          <p className="eyebrow">Talvez o problema nunca tenha sido você</p>
          <h2>Você não precisa de mais uma receita. Precisa entender por que ela dá certo.</h2>
        </div>
        <div className="problem-grid">
          <article>
            <span>01</span>
            <h3>Você segue tudo e o pão fica pesado.</h3>
            <p>A receita mostra a ordem, mas não explica o ponto, a fermentação e os sinais que você precisa observar.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Você troca ingredientes sem saber o que muda.</h3>
            <p>Uma substituição parece pequena, mas altera textura, estrutura e sabor quando ninguém explica a função de cada ingrediente.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Quando dá errado, você culpa sua habilidade.</h3>
            <p>Depois de algumas tentativas frustradas, fica fácil acreditar que cozinhar bem é dom. Não é. É técnica bem explicada.</p>
          </article>
        </div>
      </section>

      <section className="belief section-pad">
        <p className="eyebrow eyebrow-gold">A virada de chave</p>
        <blockquote>
          “O problema não é falta de força de vontade. <span>É tentar manter a low carb sem um jeito de cozinhar que funcione na vida real.</span>”
        </blockquote>
        <p>
          Quando a comida fica gostosa, o preparo faz sentido e você sabe corrigir os erros, a alimentação saudável deixa de parecer um castigo e começa a caber na rotina.
        </p>
      </section>

      <section className="intensive section-pad" id="intensivo">
        <div className="intensive-heading">
          <p className="eyebrow">Um dia de resultado real</p>
          <h2>Quatro preparos para devolver sua confiança na cozinha.</h2>
          <p>
            Você pode acompanhar o Chef Michael e fazer junto. Em cada receita, ele mostra o preparo completo e explica os detalhes de execução que mudam o resultado.
          </p>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <article key={recipe.number}>
              <span>{recipe.number}</span>
              <h3>{recipe.title}</h3>
              <p>{recipe.text}</p>
            </article>
          ))}
        </div>
        <div className="centered-cta">
          <CTA>Quero aprender as quatro receitas</CTA>
        </div>
      </section>

      <section className="mechanism section-pad" id="tecnica">
        <div className="mechanism-copy">
          <p className="eyebrow eyebrow-gold">O diferencial do Intensivo</p>
          <h2>Você não vai apenas assistir. Vai começar a entender.</h2>
          <p>
            A maioria dos vídeos entrega ingredientes e modo de preparo. O Chef Michael mostra os pontos que quase nunca aparecem na receita.
          </p>
        </div>
        <div className="mechanism-steps">
          <article>
            <span>Entenda</span>
            <h3>A função dos ingredientes</h3>
            <p>Saiba por que cada ingrediente entra na receita e o que acontece quando você faz uma substituição.</p>
          </article>
          <article>
            <span>Observe</span>
            <h3>O ponto de cada etapa</h3>
            <p>Aprenda a reconhecer textura, fermentação e consistência em vez de depender somente do relógio.</p>
          </article>
          <article>
            <span>Corrija</span>
            <h3>Os erros mais comuns</h3>
            <p>Descubra o que costuma dar errado e como aumentar suas chances de repetir um bom resultado em casa.</p>
          </article>
        </div>
      </section>

      <section className="transformation section-pad">
        <div className="section-intro narrow">
          <p className="eyebrow">O que muda depois do Intensivo</p>
          <h2>Você sai com receitas prontas e uma nova forma de olhar para elas.</h2>
        </div>
        <div className="before-after">
          <div className="before">
            <span>Antes</span>
            <p>Copiar o passo a passo sem saber o que observar.</p>
            <p>Ter medo de trocar um ingrediente e perder tudo.</p>
            <p>Desistir quando o resultado não fica igual ao vídeo.</p>
          </div>
          <div className="after">
            <span>Depois</span>
            <p>Entender os detalhes que fazem a receita funcionar.</p>
            <p>Fazer escolhas com mais segurança e menos desperdício.</p>
            <p>Cozinhar com mais confiança para você e sua família.</p>
          </div>
        </div>
      </section>

      <section className="audience section-pad">
        <div className="section-intro">
          <p className="eyebrow">Para quem é o Intensivo</p>
          <h2>Para quem quer comer low carb com prazer e sem depender da próxima receita da internet.</h2>
        </div>
        <div className="audience-grid">
          {forYou.map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="chef section-pad" id="chef">
        <div className="chef-photo">
          <Image
            src="/images/michael-about.webp"
            alt="Chef Michael Miranda segurando uma sobremesa low carb"
            fill
            sizes="(max-width: 860px) 100vw, 42vw"
          />
        </div>
        <div className="chef-copy">
          <p className="eyebrow">Quem vai cozinhar com você</p>
          <h2>Chef Michael Miranda</h2>
          <p className="chef-lead">
            “Eu também fazia dieta pensando no dia em que poderia abandoná-la.”
          </p>
          <p>
            Michael é bacharel em Gastronomia e trabalha profissionalmente na área desde 2008. Depois de chegar aos 98 kg, viver episódios de compulsão e passar por um susto no pronto socorro, encontrou na low carb um caminho que finalmente conseguiu sustentar.
          </p>
          <p>
            Em cinco meses, eliminou 18 kg. Em 2016, transformou a própria experiência em uma missão: ensinar gastronomia low carb com técnica, sabor e simplicidade.
          </p>
          <div className="authority-grid" aria-label="Experiência do Chef Michael">
            <div><strong>8 mil+</strong><span>alunos</span></div>
            <div><strong>50</strong><span>cursos e eventos</span></div>
            <div><strong>10 anos</strong><span>dedicados à low carb</span></div>
          </div>
        </div>
      </section>

      <section className="proof section-pad">
        <div className="proof-heading">
          <p className="eyebrow eyebrow-gold">Técnica que muda a rotina</p>
          <h2>A maior prova não está no título. Está no que os alunos voltam a fazer.</h2>
        </div>
        <div className="proof-cards">
          <article>
            <span>Uma conquista que voltou para a mão</span>
            <p>Uma aluna conseguiu voltar a usar sua aliança depois de sete anos, como consequência de uma alimentação que finalmente conseguiu manter.</p>
          </article>
          <article>
            <span>Comida que inclui, não separa</span>
            <p>O pai de uma criança com diabetes tipo 1 agradeceu porque a filha pôde levar receitas para a escola e comer com os colegas sem se sentir diferente.</p>
          </article>
          <article>
            <span>Os mesmos ingredientes, outro resultado</span>
            <p>Alunos descobrem que até uma carne moída pode ficar muito mais saborosa quando aprendem a técnica certa com aquilo que já têm em casa.</p>
          </article>
        </div>
      </section>

      <section className="offer section-pad" id="inscricao">
        <div className="offer-copy">
          <p className="eyebrow eyebrow-gold">Sua próxima receita pode dar certo</p>
          <h2>Intensivo de Receitas Low Carb</h2>
          <p>
            Um dia ao vivo com o Chef Michael para preparar pão, pizza, chocolate e bolo prestígio enquanto você aprende os detalhes que transformam tentativa em resultado.
          </p>
          <div className="offer-promise">
            <span>Receita você encontra na internet.</span>
            <strong>Técnica é o que muda o jogo.</strong>
          </div>
        </div>
        <div className="offer-card">
          <p className="offer-label">Ingresso para o Intensivo</p>
          <div className="price"><small>R$</small><strong>29</strong><sup>,90</sup></div>
          <p className="price-note">pagamento único</p>
          <ul>
            <li>Aula prática ao vivo com duração de 5 a 6 horas</li>
            <li>Preparo completo de quatro receitas low carb</li>
            <li>Explicação das técnicas usadas em cada etapa</li>
            <li>Lista de compras enviada antes da aula</li>
            <li>Grupo de WhatsApp com avisos e acesso à transmissão</li>
          </ul>
          <a className="button button-full" href={checkoutUrl}>
            Quero participar do Intensivo <Arrow />
          </a>
          <p className="microcopy">Menos do que o desperdício de uma única receita que dá errado.</p>
        </div>
      </section>

      <section className="not-for section-pad">
        <div>
          <p className="eyebrow">Uma escolha honesta</p>
          <h2>Este Intensivo não é para quem procura milagre sem colocar a mão na massa.</h2>
        </div>
        <p>
          Ele é para quem está disposto a aprender, testar e olhar para a cozinha de um jeito novo. Você não precisa ter experiência. Precisa apenas estar aberto a entender o que está fazendo.
        </p>
      </section>

      <section className="faq section-pad" id="duvidas">
        <div className="faq-heading">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Antes de colocar a mão na massa.</h2>
        </div>
        <div className="faq-list">
          {faq.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing section-pad">
        <p className="eyebrow eyebrow-gold">Você não precisa nascer sabendo cozinhar</p>
        <h2>
          Só precisa de alguém que mostre <span>o detalhe que a receita não explica.</span>
        </h2>
        <CTA light>Quero cozinhar com o Chef Michael</CTA>
      </section>

      <footer>
        <a className="brand brand-footer" href="#topo">
          <Image
            src="/images/logo-receitas-low-carb.png"
            alt="Receitas Low Carb"
            width={230}
            height={153}
            className="brand-logo brand-logo-footer"
          />
        </a>
        <p>© 2026 Chef Michael Miranda. Todos os direitos reservados.</p>
        <a href="#topo">Voltar ao topo</a>
      </footer>
    </main>
  );
}
