/**
 * Arquivo de Pista: página editorial assimétrica, carvão/off-white e Signal Red.
 * O conteúdo segue uma linha de corrida, com números de capítulo, telemetria e movimentos precisos.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Gauge,
  Menu,
  MoveRight,
  Plus,
  X,
} from "lucide-react";

const lineage = [
  {
    year: "1964",
    label: "01 · primeira geração",
    title: "Mustang Fastback",
    kicker: "O desenho que virou ícone",
    copy: "Capô longo, traseira curta e uma nova ideia de liberdade. A carroceria Fastback consolidou a silhueta que colocou o pony car no imaginário americano.",
    stat: "V8 289",
    image: "/manus-storage/mustang-fastback-1964_0f7ba0e8.jpg",
  },
  {
    year: "1969",
    label: "02 · homologação de pista",
    title: "Boss 429",
    kicker: "Raro por natureza",
    copy: "Criado para levar o grande V8 429 às pistas, uniu engenharia de competição e presença intimidadora. Hoje, é um dos Mustangs mais desejados de sua era.",
    stat: "V8 429",
    image: "/manus-storage/mustang-boss-429_5caead7e.jpg",
  },
  {
    year: "1987",
    label: "03 · a era angular",
    title: "Mustang GT",
    kicker: "Fox Body, peso e resposta",
    copy: "A terceira geração combinou linhas retilíneas, baixo peso e uma plataforma que conquistou as ruas, os autódromos e uma legião que ainda acelera seus Fox Bodies.",
    stat: "5.0 HO",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=88",
  },
  {
    year: "2024",
    label: "04 · sétima geração",
    title: "Dark Horse",
    kicker: "A nova raça",
    copy: "O V8 Coyote 5.0 de 500 hp ganha mais capacidade térmica, freios maiores e acerto orientado à pista. É foco técnico sem perder a força de um Mustang de rua.",
    stat: "500 hp",
    image: "/manus-storage/mustang-darkhorse-detail_244bbf26.jpg",
  },
];

const currentModels = [
  {
    number: "01",
    name: "GT",
    power: "480 hp",
    motor: "V8 5.0 aspirado",
    description: "A essência: tração traseira, câmbio manual disponível e o motor que define a voz do Mustang contemporâneo.",
    rows: [
      ["Cilindrada", "5.0 L"],
      ["Torque", "563 Nm"],
      ["Câmbio", "Manual 6v / Auto 10v"],
    ],
  },
  {
    number: "02",
    name: "Dark Horse",
    power: "500 hp",
    motor: "V8 5.0 Coyote",
    description: "Freios, refrigeração e transmissão Tremec para transformar cada sessão de pista em uma conversa mais longa.",
    rows: [
      ["Cilindrada", "5.0 L"],
      ["Torque", "574 Nm"],
      ["Câmbio", "Manual Tremec 6v"],
    ],
  },
  {
    number: "03",
    name: "GTD",
    power: "815 hp",
    motor: "V8 5.2 supercharged",
    description: "Tecnologia nascida da competição, aerodinâmica ativa e a ambição de aproximar a produção das 24 Horas.",
    rows: [
      ["Cilindrada", "5.2 L"],
      ["Suspensão", "Pushrod traseira"],
      ["Foco", "Circuito / Le Mans"],
    ],
  },
];

const navItems = [
  ["Origem", "#origem"],
  ["Linhagem", "#linhagem"],
  ["DNA", "#dna"],
  ["Linha atual", "#linha-atual"],
];

export default function Home() {
  const [selectedCar, setSelectedCar] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeCar = lineage[selectedCar];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = () => setMenuOpen(false);

  return (
    <main className="site-shell overflow-x-clip bg-[#121313] text-[#f5f0e8]">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a href="#inicio" className="brand-mark" aria-label="Asphalt Chronicle — início">
          <img src="/manus-storage/asphalt-chronicle-mark_c8a4df6b.png" alt="Símbolo Asphalt Chronicle" />
          <span className="brand-type">
            <strong>Asphalt</strong>
            <small>Chronicle · Det 1964</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, target], index) => (
            <a href={target} key={target} className="nav-link">
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>

        <a href="#linha-atual" className="header-cta">
          Ver garagem <ArrowUpRight size={15} />
        </a>

        <button className="mobile-menu-toggle" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação mobile">
            {navItems.map(([label, target], index) => (
              <a href={target} key={target} onClick={handleNavigation}>
                <span>0{index + 1}</span>
                {label}
                <ArrowDownRight size={17} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-rule hero-rule--top" aria-hidden="true" />
        <div className="hero-main">
          <div className="eyebrow hero-eyebrow"><span /> Detroit, Michigan · 1964—Hoje</div>
          <h1>
            <span>Uma lenda</span>
            <em>em marcha.</em>
          </h1>
          <div className="hero-bottom-row">
            <p>Seis décadas de design, motor e atitude reunidas em uma crônica para quem lê a estrada de outro jeito.</p>
            <a href="#origem" className="circle-link" aria-label="Entrar na história do Mustang">
              <MoveRight size={23} />
            </a>
          </div>
        </div>
        <div className="hero-meta" aria-label="Indicadores principais">
          <div><strong>1964</strong><span>Estreia mundial</span></div>
          <div><strong>07</strong><span>Gerações</span></div>
          <div><strong>815</strong><span>hp no GTD</span></div>
          <div className="meta-route"><span>Rota editorial</span><strong>DET → LM</strong></div>
        </div>
        <a href="#origem" className="scroll-cue">Role para entrar <ChevronDown size={16} /></a>
      </section>

      <section id="origem" className="origin-section chapter-section">
        <div className="chapter-index"><span>01</span><i /> Origem</div>
        <div className="origin-layout">
          <div className="origin-lead">
            <p className="kicker">17 de abril de 1964</p>
            <h2>O carro que fez<br />o futuro parecer<br /><em>acessível.</em></h2>
          </div>
          <div className="origin-copy">
            <p>Na Feira Mundial de Nova York, o Mustang colocou aparência esportiva, espaço para quatro e personalização ao alcance de uma geração inteira.</p>
            <p>O resultado foi imediato: mais de 100 mil unidades nos primeiros quatro meses. Não era apenas um lançamento; era uma nova categoria em movimento.</p>
            <div className="origin-fact"><span>Primeiro ano</span><strong>420 mil <em>unidades</em></strong></div>
          </div>
        </div>
        <div className="origin-visual">
          <div className="visual-caption">Arquivo / 1964 <span>•</span> Estreia mundial</div>
          <div className="three-bars" aria-hidden="true"><i /><i /><i /></div>
          <p>Uma proporção<br />para a memória.</p>
        </div>
      </section>

      <section id="linhagem" className="lineage-section chapter-section">
        <div className="chapter-index chapter-index--light"><span>02</span><i /> Linhagem</div>
        <div className="lineage-intro">
          <div><p className="kicker">Modelos inesquecíveis</p><h2>Quatro curvas<br />na mesma <em>estrada.</em></h2></div>
          <p>Selecione um ano e acompanhe a mudança de linguagem, motor e ambição. Cada geração deixou uma marca que a próxima escolheu respeitar — ou desafiar.</p>
        </div>
        <div className="lineage-stage">
          <div className="lineage-switcher" role="tablist" aria-label="Modelos históricos Mustang">
            {lineage.map((car, index) => (
              <button key={car.year} type="button" role="tab" aria-selected={selectedCar === index} className={selectedCar === index ? "is-active" : ""} onClick={() => setSelectedCar(index)}>
                <span>{car.year}</span><i>{car.stat}</i>
              </button>
            ))}
          </div>
          <div className="lineage-card" key={activeCar.year}>
            <div className="lineage-photo-wrap"><img src={activeCar.image} alt={`Ford Mustang ${activeCar.title}, capítulo ${activeCar.year}`} /></div>
            <div className="lineage-text">
              <p className="kicker">{activeCar.label}</p>
              <h3>{activeCar.title}</h3>
              <strong>{activeCar.kicker}</strong>
              <p>{activeCar.copy}</p>
              <button type="button" onClick={() => setSelectedCar((selectedCar + 1) % lineage.length)} className="inline-arrow">Próxima curva <MoveRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <section id="dna" className="dna-section chapter-section">
        <div className="chapter-index"><span>03</span><i /> DNA</div>
        <div className="dna-heading"><p className="kicker">Reconhecível em qualquer época</p><h2>O desenho evolui.<br />A atitude <em>permanece.</em></h2></div>
        <div className="dna-grid">
          {[
            ["01", "Capô longo", "Cabine recuada, postura baixa e a proporção que dispensou apresentação desde o primeiro dia."],
            ["02", "Força traseira", "Tração traseira e respostas diretas: a configuração que mantém a conversa entre volante, motor e asfalto."],
            ["03", "Três barras", "As lanternas verticais são assinatura visual, ritual de despedida e referência em cada nova geração."],
            ["04", "Performance útil", "Potência para a pista, espaço para a estrada. A dualidade que faz do Mustang mais que um número."],
          ].map(([number, title, copy]) => (
            <article className="dna-item" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p><div className="dna-line" />
            </article>
          ))}
        </div>
      </section>

      <section id="linha-atual" className="garage-section chapter-section">
        <div className="chapter-index chapter-index--light"><span>04</span><i /> Linha atual</div>
        <div className="garage-top">
          <div><p className="kicker">A garagem atual</p><h2>Três formas<br />de ouvir um <em>V8.</em></h2></div>
          <div className="telemetry-label"><Gauge size={22} /><span>Telemetria<br />de fábrica</span></div>
        </div>
        <div className="garage-layout">
          <div className="model-selector" role="tablist" aria-label="Versões atuais Mustang">
            {currentModels.map((model, index) => (
              <button key={model.name} type="button" role="tab" aria-selected={selectedModel === index} className={selectedModel === index ? "is-active" : ""} onClick={() => setSelectedModel(index)}>
                <span>{model.number}</span><strong>{model.name}</strong><i>{model.power}</i><Plus size={17} />
              </button>
            ))}
          </div>
          <article className="model-dossier" key={currentModels[selectedModel].name}>
            <div className="dossier-heading"><p className="kicker">{currentModels[selectedModel].number} · {currentModels[selectedModel].name}</p><h3>{currentModels[selectedModel].power}</h3><strong>{currentModels[selectedModel].motor}</strong></div>
            <p className="dossier-copy">{currentModels[selectedModel].description}</p>
            <dl>{currentModels[selectedModel].rows.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
            <div className="dossier-bars" aria-hidden="true"><i /><i /><i /></div>
          </article>
        </div>
        <p className="garage-note">Potências divulgadas pela Ford para versões 2026 nos Estados Unidos; disponibilidade e especificações podem variar por mercado.</p>
      </section>

      <footer className="site-footer">
        <div className="footer-image" aria-hidden="true" />
        <div className="footer-overlay" aria-hidden="true" />
        <div className="footer-copy"><p className="kicker">Desde 1964</p><h2>Não é sobre chegar.<br />É sobre <em>como você chega.</em></h2><a href="#inicio">Voltar ao início <ArrowUpRight size={17} /></a></div>
        <div className="footer-bottom"><span>Asphalt Chronicle</span><span>Tributo não oficial ao Ford Mustang</span><span>DET · 1964—Hoje</span></div>
      </footer>
    </main>
  );
}
