/**
 * Ford — Linha de montagem, linha de chegada.
 * Uma crônica editorial não oficial sobre invenção, escala industrial e resistência.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Factory,
  Gauge,
  Menu,
  MoveRight,
  Timer,
  Trophy,
  Wrench,
  X,
} from "lucide-react";

export const history = [
  {
    year: "1896",
    chapter: "A oficina",
    title: "Quadriciclo",
    copy: "Antes da fábrica, houve uma oficina atrás de uma casa em Detroit. Em 4 de junho de 1896, Henry Ford colocou seu primeiro veículo motorizado na rua: leve, rudimentar e movido por uma ideia maior.",
    tag: "primeiro movimento",
    image: "/manus-storage/ford-model-t-assembly-v2_15dc5370.jpg",
    source: "Fonte Ford [1]",
  },
  {
    year: "1903",
    chapter: "A empresa",
    title: "A Ford ganha forma",
    copy: "Uma empresa automotiva começa a organizar capital, projeto e fabricação em Detroit. A ambição não era construir apenas um carro, mas tornar o automóvel uma parte possível da vida cotidiana.",
    tag: "Detroit, Michigan",
    image: "/manus-storage/ford-model-t-assembly-v2_15dc5370.jpg",
    source: "Ford Motor Company [2]",
  },
  {
    year: "1908",
    chapter: "O universal",
    title: "Model T",
    copy: "A Ford apresenta um carro simples, durável e acessível. O Model T seria produzido em escala e ajudaria a transformar a empresa em um nome familiar em todo o mundo.",
    tag: "15 milhões construídos",
    image: "/manus-storage/ford-model-t-assembly-v2_15dc5370.jpg",
    source: "Fonte Ford [2]",
  },
  {
    year: "1913",
    chapter: "A escala",
    title: "Linha móvel",
    copy: "Em Highland Park, a linha de montagem móvel muda o ritmo de produção. O carro deixa de ser apenas um produto: passa a ser também um sistema, uma sequência e uma nova relação com o tempo.",
    tag: "Highland Park",
    image: "/manus-storage/ford-model-t-assembly-v2_15dc5370.jpg",
    source: "Fonte Ford [3]",
  },
  {
    year: "1964",
    chapter: "A pista",
    title: "GT40 em Le Mans",
    copy: "Para enfrentar a Ferrari na resistência europeia, a Ford investe, busca parceiros e coloca no grid um carro baixo, agressivo e com apenas 40,5 polegadas de altura.",
    tag: "40,5 in de altura",
    image: "/manus-storage/ford-gt40-lemans-v2_069f9f28.jpg",
    source: "ACO [4]",
  },
  {
    year: "1966",
    chapter: "A vitória",
    title: "1–2–3",
    copy: "O Ford Mk II ocupa o pódio completo. O #2 de Bruce McLaren e Chris Amon cruza a linha na frente por cerca de 20 metros em um final que ainda provoca debate.",
    tag: "Le Mans · 24 horas",
    image: "/manus-storage/ford-gt40-lemans-v2_069f9f28.jpg",
    source: "ACO / Ford [4] [5]",
  },
  {
    year: "2016",
    chapter: "O retorno",
    title: "Ford GT",
    copy: "Cinquenta anos depois de 1966, a Ford volta a Le Mans com um novo GT. O carro #68 vence a classe LMGTE Pro e reabre o capítulo da marca na resistência.",
    tag: "LMGTE Pro · #68",
    image: "/manus-storage/ford-gt-2016-return-v2_a0408fa1.jpg",
    source: "ACO [4]",
  },
  {
    year: "2027",
    chapter: "O próximo capítulo",
    title: "Hypercar",
    copy: "A história ainda não fechou a bandeira. A ACO registra o retorno planejado da Ford à classe Hypercar — uma nova linha de largada para a mesma inquietação.",
    tag: "próxima largada",
    image: "/manus-storage/ford-blue-oval-future-v2_6a51aef8.jpg",
    source: "ACO [4]",
  },
];

const navItems = [
  ["Origem", "#origem"],
  ["Fábrica", "#fabrica"],
  ["DNA", "#dna"],
  ["Le Mans", "#le-mans"],
  ["Legado", "#legado"],
  ["Hoje", "#hoje"],
];

export const sources = [
  ["[1]", "Henry Ford’s Quadricycle", "https://corporate.ford.com/articles/history/henry-fords-greatest-innovation-the-quadricycle/"],
  ["[2]", "The Ford Model T", "https://corporate.ford.com/articles/history/the-model-t/"],
  ["[3]", "Assembly Line Revolution", "https://corporate.ford.com/articles/history/moving-assembly-line/"],
  ["[4]", "Ford’s legendary legacy at Le Mans", "https://www.24h-lemans.com/en/news/fords-legendary-legacy-at-the-24-hours-of-le-mans-59304"],
  ["[5]", "Ford vs. Ferrari: Victory in 1966", "https://corporate.ford.com/articles/history/ford-gt40-origins-le-mans-committee-victory.html"],
];

export default function Home() {
  const [activeEra, setActiveEra] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const era = history[activeEra];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site-shell overflow-x-clip bg-[#101212] text-[#f5f0e8]">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a href="#inicio" className="brand-mark" aria-label="Ford em movimento — início">
          <img src="/manus-storage/asphalt-chronicle-mark_c8a4df6b.png" alt="Símbolo Asphalt Chronicle" />
          <span className="brand-type"><strong>Ford</strong><small>Em movimento · 1896—hoje</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, target], index) => <a href={target} key={target} className="nav-link"><span>0{index + 1}</span>{label}</a>)}
        </nav>
        <a href="#le-mans" className="header-cta">Entrar em Le Mans <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-toggle" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Navegação mobile">{navItems.map(([label, target], index) => <a href={target} key={target} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}<ArrowDownRight size={17} /></a>)}</nav>}
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-image" aria-hidden="true" /><div className="hero-grain" aria-hidden="true" />
        <div className="hero-rule hero-rule--top" aria-hidden="true" />
        <div className="hero-main">
          <div className="eyebrow hero-eyebrow"><span /> Detroit → Highland Park → Le Mans</div>
          <h1><span>Uma empresa</span><em>em movimento.</em></h1>
          <div className="hero-bottom-row"><p>Da oficina de Henry Ford à linha de montagem. Da linha de montagem à linha de chegada. Uma história contada em velocidade.</p><a href="#origem" className="circle-link" aria-label="Começar a história"><MoveRight size={23} /></a></div>
        </div>
        <div className="hero-meta" aria-label="Indicadores da trajetória Ford">
          <div><strong>1896</strong><span>Primeiro veículo</span></div><div><strong>15M</strong><span>Model T vendidos</span></div><div><strong>4×</strong><span>Vitórias seguidas</span></div><div className="meta-route"><span>Trajeto editorial</span><strong>DET → LM</strong></div>
        </div>
        <a href="#origem" className="scroll-cue">Começar a leitura <ChevronDown size={16} /></a>
      </section>

      <section id="origem" className="origin-section chapter-section">
        <div className="chapter-index"><span>01</span><i /> Origem</div>
        <div className="origin-layout">
          <div className="origin-lead"><p className="kicker">Detroit · 1896</p><h2>Antes da<br />fábrica, houve<br /><em>uma oficina.</em></h2></div>
          <div className="origin-copy"><p>Henry Ford começou experimentando um pequeno veículo em uma oficina atrás de sua casa, em Bagley Avenue. O Quadriciclo ficou pronto na madrugada de 4 de junho de 1896.</p><p>Pesava cerca de 500 libras sem combustível, tinha duas velocidades e nenhum freio convencional. Era imperfeito — e exatamente por isso já carregava a pergunta que moveria o século.</p><div className="origin-fact"><span>Primeiro motor</span><strong>04.06.1896 <em>Detroit</em></strong></div><a className="source-link source-link--dark" href={sources[0][2]} target="_blank" rel="noreferrer">Ler a fonte Ford <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="origin-visual"><div className="visual-caption">Arquivo Ford <span>•</span> Oficina / escala</div><div className="origin-image"><img src="/manus-storage/ford-model-t-assembly-v2_15dc5370.jpg" alt="Linha industrial histórica da Ford em tons de arquivo" /></div><div className="origin-quote">“No trabalho que interessa,<br /><em>nada é difícil.</em>”</div><div className="three-bars" aria-hidden="true"><i /><i /><i /></div></div>
      </section>

      <section id="fabrica" className="factory-section chapter-section">
        <div className="chapter-index chapter-index--light"><span>02</span><i /> Fábrica</div>
        <div className="factory-heading"><div><p className="kicker">A invenção da escala</p><h2>O carro mudou.<br />A fábrica mudou<br /><em>o mundo.</em></h2></div><p>O Model T foi concebido para ser acessível, simples e resistente. A linha móvel transformou essa intenção em método — e o método, em mobilidade.</p></div>
        <div className="timeline-stage">
          <div className="timeline-rail" role="tablist" aria-label="Marcos históricos da Ford">
            {history.slice(0, 4).map((item, index) => <button key={item.year} type="button" role="tab" aria-selected={activeEra === index} className={activeEra === index ? "is-active" : ""} onClick={() => setActiveEra(index)}><span>{item.year}</span><i>{item.chapter}</i></button>)}
          </div>
          <div className="timeline-card" key={era.year}><div className="timeline-image"><img src={era.image} alt={`Imagem editorial para ${era.title}`} /></div><div className="timeline-copy"><p className="kicker">{era.chapter} · {era.source}</p><h3>{era.title}</h3><p>{era.copy}</p><div className="timeline-foot"><span>{era.tag}</span><button type="button" className="inline-arrow" onClick={() => setActiveEra((activeEra + 1) % 4)}>Próximo marco <MoveRight size={18} /></button></div></div></div>
        </div>
        <div className="factory-stats"><div><Factory size={19} /><strong>Highland Park</strong><span>produção em série</span></div><div><Wrench size={19} /><strong>Model T</strong><span>universal por projeto</span></div><div><Gauge size={19} /><strong>1913</strong><span>linha móvel</span></div></div>
      </section>

      <section id="dna" className="dna-section chapter-section">
        <div className="chapter-index"><span>03</span><i /> DNA Ford</div>
        <div className="dna-heading"><div><p className="kicker">Uma marca, quatro expressões</p><h2>O mesmo<br />instinto.<br /><em>Outras pistas.</em></h2></div><p>A trajetória da Ford nunca foi uma única estrada. Ela aparece no trabalho de uma picape, na cultura de um fastback, na coragem de um protótipo e na liberdade de um 4×4.</p></div>
        <div className="dna-grid">
          <article className="dna-card"><img src="/manus-storage/ford-f-series-work-v2_871abad9.jpg" alt="Picape Ford clássica em uma paisagem de trabalho" /><div><span>01 · Trabalho</span><h3>Feita para<br />seguir.</h3><p>Utilidade sem pedir licença.</p></div></article>
          <article className="dna-card"><img src="/manus-storage/ford-mustang-culture-v2_9820b693.jpg" alt="Ford Mustang fastback em um estúdio de design" /><div><span>02 · Cultura</span><h3>Forma que<br />fica.</h3><p>O desenho também é legado.</p></div></article>
          <article className="dna-card"><img src="/manus-storage/ford-gt40-lemans-v2_069f9f28.jpg" alt="Ford GT40 de competição em uma pista noturna" /><div><span>03 · Performance</span><h3>Ganhar é<br />resistir.</h3><p>A pista revela a intenção.</p></div></article>
          <article className="dna-card"><img src="/manus-storage/ford-bronco-adventure-v2_8410daa3.jpg" alt="Ford Bronco clássico em uma trilha" /><div><span>04 · Aventura</span><h3>Sem<br />estrada.</h3><p>Quando o caminho muda, muda tudo.</p></div></article>
        </div>
      </section>

      <section id="le-mans" className="lemans-section chapter-section">
        <div className="lemans-image" aria-hidden="true" /><div className="lemans-overlay" aria-hidden="true" />
        <div className="chapter-index chapter-index--light"><span>04</span><i /> Le Mans</div>
        <div className="lemans-content"><p className="eyebrow"><span /> 24 horas · La Sarthe · 1966</p><h2>A fábrica<br />aprendeu a<br /><em>correr.</em></h2><p className="lemans-intro">Para enfrentar a Ferrari, a Ford transformou investimento em programa de competição. O GT40 nasceu baixo, difícil e determinado a durar uma noite inteira.</p><a className="source-link" href={sources[3][2]} target="_blank" rel="noreferrer">Contexto oficial da prova <ArrowUpRight size={15} /></a></div>
        <div className="lemans-dossier"><div className="dossier-top"><span>GT40 / MK II</span><span>Le Mans · 1966</span></div><div className="dossier-number">01—02—03</div><p>Três Ford Mk II no pódio. O primeiro triunfo geral da Ford em Le Mans.</p><div className="dossier-rule" /><div className="dossier-points"><div><strong>40,5</strong><span>polegadas de altura</span></div><div><strong>7.0 L</strong><span>motor do Mk II</span></div><div><strong>24 H</strong><span>resistência contínua</span></div></div></div>
      </section>

      <section id="legado" className="legacy-section chapter-section">
        <div className="chapter-index"><span>05</span><i /> Legado</div>
        <div className="legacy-heading"><div><p className="kicker">A sequência</p><h2>Uma vitória<br />não termina<br /><em>na bandeirada.</em></h2></div><p>O GT40 venceu novamente em 1967, 1968 e 1969. Em 2016, o Ford GT voltou à classe LMGTE Pro e venceu com o carro #68. A memória, aqui, não é nostalgia: é método.</p></div>
        <div className="wins-grid"><article className="win-card win-card--dark"><span>1966</span><h3>1—2—3</h3><p>McLaren / Amon vencem; Miles / Hulme chegam em segundo e Bucknum / Hutchins em terceiro.</p><Trophy size={22} /></article><article className="win-card win-card--paper"><span>1967—69</span><h3>Quatro<br />seguidas.</h3><p>O GT40 mantém a Ford no topo por quatro edições consecutivas, mesmo após a retirada oficial da marca em 1968.</p><Timer size={22} /></article><article className="win-card win-card--image"><img src="/manus-storage/ford-gt-2016-return-v2_a0408fa1.jpg" alt="Ford GT moderno retornando ao pit lane" /><div><span>2016</span><h3>O retorno.</h3><p>Ford GT #68 · LMGTE Pro</p></div></article></div>
      </section>

      <section id="hoje" className="future-section chapter-section">
        <div className="future-image" aria-hidden="true" /><div className="future-overlay" aria-hidden="true" />
        <div className="chapter-index chapter-index--light"><span>06</span><i /> Hoje</div>
        <div className="future-content"><p className="kicker">A estrada continua</p><h2>Do primeiro<br />motor ao<br /><em>próximo grid.</em></h2><p>Mais de um século depois, a Ford ainda se move entre utilidade, performance e experimentação. A próxima largada é só outra forma de fazer a mesma pergunta: o que vem depois?</p><a href="#fontes" className="circle-link" aria-label="Ver fontes da história"><MoveRight size={23} /></a></div>
        <div className="future-tag"><span>Próximo capítulo</span><strong>Hypercar · 2027</strong><small>conforme registro da ACO [4]</small></div>
      </section>

      <footer id="fontes" className="site-footer">
        <div className="footer-top"><div><p className="kicker">Asphalt Chronicle</p><h2>Uma empresa<br /><em>em movimento.</em></h2></div><div className="footer-disclaimer"><p>Experiência editorial não oficial sobre a história da Ford Motor Company. Os nomes e marcas citados pertencem aos seus respectivos proprietários.</p><a href="#inicio">Voltar ao início <ArrowUpRight size={16} /></a></div></div>
        <div className="footer-sources"><div className="sources-heading"><span>Referências</span><strong>Para continuar a pesquisa.</strong></div>{sources.map(([number, label, url]) => <a key={number} href={url} target="_blank" rel="noreferrer"><span>{number}</span>{label}<ArrowUpRight size={14} /></a>)}</div>
        <div className="footer-bottom"><span>FORD / EM MOVIMENTO</span><span>Detroit · 1896—Hoje</span><span>Feito para quem segue a linha.</span></div>
      </footer>
    </main>
  );
}
