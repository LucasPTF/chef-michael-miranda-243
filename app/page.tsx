import Image from "next/image";

const learnings = [
  { number: "01", title: "Base", eyebrow: "Onde o sabor começa", text: "Entenda como temperatura, gordura, aromáticos e ordem de entrada constroem o começo do preparo." },
  { number: "02", title: "Ponto", eyebrow: "O que a comida está dizendo", text: "Aprenda a observar cor, aroma, som e textura — sem depender apenas dos minutos escritos na receita." },
  { number: "03", title: "Finalização", eyebrow: "A decisão que fecha o prato", text: "Prove com intenção e perceba quando falta equilíbrio, frescor, contraste ou aquele último ajuste." },
];

const forYou = [
  "Segue a receita inteira e ainda sente que alguma coisa ficou faltando.",
  "Cozinha com o celular na mão e trava quando algo sai do roteiro.",
  "Acha que cozinhar melhor exige talento natural ou equipamento caro.",
  "Quer entender o preparo sem entrar em excesso de termos técnicos.",
  "Deseja ganhar referências para decidir com mais clareza.",
];

const faq = [
  ["Preciso saber cozinhar?", "Não. A proposta parte do nível de quem cozinha em casa e ainda se sente inseguro. Não exige formação técnica."],
  ["É um curso de receitas?", "Receitas podem aparecer como exemplo, mas o foco é entender as decisões de Base, Ponto e Finalização."],
  ["Vou precisar de equipamentos caros?", "A experiência foi pensada para uma cozinha comum, usando estrutura e utensílios acessíveis."],
  ["A aula será ao vivo?", "A proposta atual é uma imersão ao vivo. Data, horário, plataforma e acesso serão confirmados antes da abertura das inscrições."],
  ["Existe garantia?", "A condição prevista é de 7 dias. Os termos definitivos serão apresentados no checkout após validação operacional."],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

export default function Home() {
  return (
    <main id="topo">
      <div className="preview-note"><span>Prévia estratégica</span>Produto, formato, preço e conteúdo final sujeitos à validação.</div>

      <header className="site-header" aria-label="Navegação principal">
        <a className="brand" href="#topo" aria-label="Chef Michael Miranda — início">
          <span className="brand-mark">M</span>
          <span><strong>Chef Michael</strong><small>Miranda</small></span>
        </a>
        <nav><a href="#metodo">O método</a><a href="#imersao">A imersão</a><a href="#chef">O Chef</a></nav>
        <a className="button button-small" href="#oferta">Quero participar <Arrow /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <Image src="/images/hero-cozinha.png" alt="Mãos de um chef finalizando uma preparação colorida em uma cozinha acolhedora" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Imersão prática com Chef Michael Miranda</p>
          <h1 id="hero-title">Talvez você não seja<em> ruim na cozinha.</em></h1>
          <p className="hero-lead">Talvez só esteja cozinhando sem referência.</p>
          <p className="hero-copy">Aprenda a observar as três decisões que mudam um preparo — sem decorar dezenas de receitas, sem equipamento caro e sem complicar sua cozinha.</p>
          <div className="hero-actions">
            <a className="button" href="#oferta">Quero entender o que falta <Arrow /></a>
            <a className="text-link" href="#metodo">Conhecer a lógica BPF</a>
          </div>
          <div className="hero-proof" aria-label="Informações da experiência">
            <span><strong>Ao vivo</strong> experiência guiada</span><span><strong>Prático</strong> cozinha real</span><span><strong>Simples</strong> sem jargões</span>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">Explore ↓</div>
      </section>

      <section className="truth-section section-pad">
        <div className="section-label">Uma verdade que muda o jogo</div>
        <blockquote>“Receita não ensina você a cozinhar.<span> Ela ensina você a repetir um prato.”</span></blockquote>
        <p>E repetir funciona — até o fogo mudar, o ingrediente reagir diferente ou o tempo escrito deixar de fazer sentido. É aí que a diferença aparece.</p>
      </section>

      <section className="problem-section section-pad">
        <div className="problem-grid">
          <div><p className="eyebrow">Se isso já aconteceu com você…</p><h2>Você recebeu instruções.<br />Mas não recebeu referências.</h2></div>
          <div className="problem-story">
            <p>Você separa os ingredientes. Segue a ordem. Marca o tempo. Faz tudo como está escrito.</p>
            <p>Aí prova — e parece que faltou alguma coisa. Se dá errado, troca a receita. Se dá certo, não sabe exatamente por quê.</p>
            <p className="accent-line">O problema não é falta de jeito. É não saber o que observar entre um passo e outro.</p>
          </div>
        </div>
      </section>

      <section className="method-section section-pad" id="metodo">
        <div className="section-heading centered"><p className="eyebrow light">Uma lógica simples para enxergar o preparo</p><h2>Base. Ponto. Finalização.</h2><p>Três momentos. Três decisões. Um novo jeito de prestar atenção no que acontece dentro da sua panela.</p></div>
        <div className="method-grid">
          {learnings.map((item) => <article className="method-card" key={item.number}><span className="method-number">{item.number}</span><p>{item.eyebrow}</p><h3>{item.title}</h3><div className="card-rule" /><p className="method-text">{item.text}</p></article>)}
        </div>
        <p className="provisional-caption">BPF é o mecanismo estratégico provisório deste projeto e será validado com o Chef Michael antes da publicação final.</p>
      </section>

      <section className="shift-section section-pad">
        <div className="shift-intro"><p className="eyebrow">A transformação</p><h2>Menos “será que vai dar certo?”.<br />Mais clareza para decidir.</h2></div>
        <div className="shift-list">
          <div><span>Antes</span><p>Seguir instruções no automático</p></div><Arrow /><div><span>Depois</span><p>Entender a intenção de cada etapa</p></div>
          <div><span>Antes</span><p>Depender apenas do relógio</p></div><Arrow /><div><span>Depois</span><p>Reconhecer os sinais do preparo</p></div>
          <div><span>Antes</span><p>Transformar o erro em culpa</p></div><Arrow /><div><span>Depois</span><p>Transformar a tentativa em referência</p></div>
        </div>
      </section>

      <section className="immersion-section section-pad" id="imersao">
        <div className="immersion-copy">
          <p className="eyebrow light">Cozinha de Chef Sem Complicação</p><h2>Uma imersão para quem quer entender — não apenas repetir.</h2>
          <p>Uma experiência intensiva, em linguagem simples, para acompanhar um preparo do começo ao fim e perceber onde cada decisão interfere no resultado.</p>
          <ul><li>Explicação direta, sem exigir conhecimento técnico prévio.</li><li>Demonstrações conectadas à cozinha do dia a dia.</li><li>Perguntas práticas para observar, provar e ajustar.</li><li>Aplicação do raciocínio em diferentes momentos do preparo.</li></ul>
          <a className="button button-cream" href="#oferta">Quero participar da imersão <Arrow /></a>
        </div>
        <div className="immersion-panel"><span>O que você leva</span><strong>Um novo olhar para a cozinha.</strong><p>Não uma promessa de perfeição. Um caminho para tornar cada tentativa mais compreensível.</p><div className="line-art" aria-hidden="true"><i /><b /><i /></div></div>
      </section>

      <section className="audience-section section-pad">
        <div className="section-heading"><p className="eyebrow">Essa experiência é para você que…</p><h2>Quer parar de começar do zero a cada receita.</h2></div>
        <div className="audience-grid">{forYou.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
      </section>

      <section className="chef-section section-pad" id="chef">
        <div className="chef-photo-wrap"><div className="chef-photo-frame"><Image src="/images/chef-placeholder.png" alt="Imagem editorial ilustrativa provisória para a apresentação do Chef Michael" fill sizes="(max-width: 800px) 90vw, 44vw" className="chef-photo" /></div><p>Imagem ilustrativa provisória — substituir pela foto oficial.</p></div>
        <div className="chef-copy"><p className="eyebrow">Quem conduz a experiência</p><h2>Chef Michael<br />Miranda</h2><p className="chef-lead">Uma proposta prática para tirar sua atenção apenas do passo a passo e levar você às decisões que acontecem durante o preparo.</p><p>A história, as credenciais, a formação e a experiência profissional do Chef Michael serão inseridas aqui após a validação da biografia oficial.</p><div className="bio-note"><span>Bio em validação</span>Esta área está pronta para receber a trajetória real do Chef Michael, sem inventar títulos ou resultados.</div></div>
      </section>

      <section className="offer-section section-pad" id="oferta">
        <div className="offer-heading"><p className="eyebrow light">Sua cozinha pode começar a fazer mais sentido</p><h2>Cozinha de Chef<br />Sem Complicação</h2><p>Entre na imersão e conheça uma lógica simples para olhar menos para o próximo passo e mais para o que o preparo pede agora.</p></div>
        <div className="offer-card"><p className="offer-kicker">Condição de lançamento</p><div className="price"><small>R$</small><strong>29</strong><sup>,90</sup></div><p className="price-note">pagamento único · valor operacional a validar</p><ul><li>Imersão prática ao vivo</li><li>Lógica Base → Ponto → Finalização</li><li>Experiência guiada em linguagem simples</li><li>Materiais complementares a confirmar</li><li>Garantia prevista de 7 dias</li></ul><a className="button button-full" href="#topo">Quero entender a lógica da cozinha <Arrow /></a><p className="checkout-note">O checkout será conectado após a validação da oferta.</p></div>
      </section>

      <section className="guarantee-section section-pad"><div className="guarantee-badge"><span>7</span> dias</div><div><p className="eyebrow">Experimente com tranquilidade</p><h2>Garantia prevista de 7 dias.</h2><p>A condição final, o canal de solicitação e os termos completos serão apresentados no checkout após a validação operacional.</p></div></section>

      <section className="faq-section section-pad" id="faq">
        <div className="section-heading"><p className="eyebrow">Perguntas frequentes</p><h2>Antes de entrar na cozinha.</h2></div>
        <div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="closing-section section-pad"><p className="eyebrow light">Seu próximo preparo pode começar diferente</p><h2>Você não precisa decorar a cozinha inteira.<span> Precisa enxergar o que a receita não mostra.</span></h2><a className="button button-cream" href="#oferta">Quero participar da imersão <Arrow /></a></section>

      <footer><a className="brand brand-footer" href="#topo"><span className="brand-mark">M</span><span><strong>Chef Michael</strong><small>Miranda</small></span></a><p>© 2026 Chef Michael Miranda. Página estratégica em validação.</p><a href="#topo">Voltar ao topo ↑</a></footer>
    </main>
  );
}
