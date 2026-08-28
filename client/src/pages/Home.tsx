import { useEffect, useMemo, useState } from "react";
import {
  ArrowUp,
  ChevronRight,
  Menu,
  Search,
  X,
  Zap,
  Gauge,
  Flag,
  History,
} from "lucide-react";

type Generation = {
  id: number;
  years: string;
  name: string;
  style: string;
  engine: string;
  highlight: string;
  description: string;
  models: string[];
  image: string;
};

type LegendaryModel = {
  name: string;
  period: string;
  category: string;
  description: string;
};

const heroImage =
  "https://commons.wikimedia.org/wiki/Special:FilePath/1965%20Ford%20Mustang%20Fastback%20%2816018094927%29.jpg";

const generations: Generation[] = [
  {
    id: 1,
    years: "1964½–1973",
    name: "Primeira geração",
    style: "Capô longo, traseira curta e a silhueta que definiu o pony car.",
    engine: "Seis cilindros e uma ampla família de V8, dos mais tranquilos aos big-blocks.",
    highlight: "O nascimento do Mustang e de versões lendárias como Shelby, Mach 1 e Boss.",
    description:
      "Apresentado ao público em 17 de abril de 1964 na Feira Mundial de Nova York, o Mustang virou fenômeno imediatamente. A proposta combinava visual esportivo, preço acessível e enorme possibilidade de personalização. Ao longo da década, a carroceria ficou mais musculosa e as versões de alto desempenho transformaram o modelo em um ícone das ruas e das pistas.",
    models: [
      "Hardtop / Coupé",
      "Convertible",
      "Fastback 2+2",
      "GT",
      "Shelby GT350",
      "Shelby GT500",
      "Mach 1",
      "Boss 302",
      "Boss 429",
      "Grande",
      "Cobra Jet / Super Cobra Jet",
    ],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/1965%20Ford%20Mustang%20GT%20Fastback%20%2825429686153%29.jpg",
  },
  {
    id: 2,
    years: "1974–1978",
    name: "Mustang II",
    style: "Menor, mais leve e adaptado ao cenário de combustível e emissões dos anos 1970.",
    engine: "Motores quatro cilindros, V6 e retorno do V8 em parte da geração.",
    highlight: "Uma reinvenção que manteve o nome Mustang vivo durante uma fase difícil da indústria.",
    description:
      "O Mustang II respondeu à crise do petróleo e à mudança de prioridades do mercado americano. Ficou mais compacto e confortável, trocando parte da agressividade dos anos anteriores por eficiência e uso diário. Mesmo controverso entre fãs, foi decisivo para a continuidade do Mustang.",
    models: ["Hardtop / Notchback", "Hatchback", "Ghia", "Mach 1", "Cobra II", "King Cobra"],
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    years: "1979–1993",
    name: "Fox Body",
    style: "Linhas angulares, proporções simples e uma plataforma muito versátil.",
    engine: "Quatro cilindros, turbo em versões especiais e o famoso V8 5.0 em diferentes fases.",
    highlight: "Virou favorito de preparadores e ajudou a reconstruir a imagem de performance do Mustang.",
    description:
      "A plataforma Fox trouxe uma nova linguagem visual e permaneceu por muitos anos graças à sua flexibilidade. O V8 5.0 virou parte central da cultura automotiva americana, enquanto SVO, SVT Cobra e Cobra R mostraram caminhos mais focados em desempenho.",
    models: ["Coupe / Notchback", "Hatchback", "Convertible", "GT", "SVO", "SVT Cobra", "Cobra R"],
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    years: "1994–2004",
    name: "SN95 / New Edge",
    style: "Curvas modernas nos anos 1990 e traços mais afiados a partir do New Edge.",
    engine: "V6 e diferentes famílias de V8, incluindo motores de quatro válvulas nos Cobra.",
    highlight: "Resgatou elementos visuais clássicos e fortaleceu a divisão SVT.",
    description:
      "A quarta geração modernizou o Mustang sem abandonar referências históricas. A atualização New Edge deixou o desenho mais geométrico e agressivo. SVT Cobra, Cobra R, Bullitt e o retorno do Mach 1 deram à geração uma forte identidade entre entusiastas.",
    models: ["Base V6", "GT", "SVT Cobra", "Cobra R", "Bullitt", "Mach 1"],
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    years: "2005–2014",
    name: "S197",
    style: "Retro-moderno inspirado principalmente nos Mustangs do fim dos anos 1960.",
    engine: "V6 e V8, chegando a configurações muito potentes nas versões Shelby.",
    highlight: "Trouxe de volta nomes históricos e recolocou o visual clássico no centro do projeto.",
    description:
      "Com proporções fortes e referências claras ao passado, o S197 marcou um renascimento visual. Shelby GT500, Bullitt, Boss 302 e California Special ampliaram o alcance da família e ajudaram a preparar o Mustang para uma fase mais global.",
    models: ["V6", "GT", "Shelby GT500", "Bullitt", "Boss 302", "California Special"],
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    years: "2015–2023",
    name: "S550",
    style: "Mais baixo, largo e global, com suspensão traseira independente em toda a linha.",
    engine: "EcoBoost turbo, V6 nos primeiros anos e V8 Coyote, além de V8 especiais Shelby.",
    highlight: "Virou um Mustang global e elevou muito o nível de dinâmica e tecnologia.",
    description:
      "A sexta geração foi desenhada para mercados do mundo inteiro. O EcoBoost ampliou a proposta, enquanto Shelby GT350, GT350R e GT500 levaram o desempenho a novos níveis. Bullitt e Mach 1 também retornaram como tributos modernos.",
    models: [
      "EcoBoost",
      "V6",
      "GT",
      "Shelby GT350",
      "GT350R",
      "Bullitt",
      "Mach 1",
      "Shelby GT500",
      "California Special",
    ],
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 7,
    years: "2024–presente",
    name: "S650",
    style: "Evolução muscular do S550, cabine digital e identidade visual própria para cada versão.",
    engine: "EcoBoost 2.3 turbo e V8 5.0 Coyote, além de projetos extremos como GTD e Dark Horse SC.",
    highlight: "Combina tradição V8, software moderno e versões de pista cada vez mais especializadas.",
    description:
      "A sétima geração mantém a arquitetura clássica de motor dianteiro e tração traseira, mas leva a experiência para uma cabine fortemente digital. GT e Dark Horse preservam o V8 aspirado, enquanto GTD e Dark Horse SC mostram uma escalada de engenharia focada em circuito.",
    models: [
      "EcoBoost",
      "EcoBoost Premium",
      "GT",
      "GT Premium",
      "Dark Horse",
      "Dark Horse Premium",
      "GTD",
      "Dark Horse SC",
      "EcoBoost RTR Package",
    ],
    image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?auto=format&fit=crop&w=1400&q=85",
  },
];

const legendaryModels: LegendaryModel[] = [
  { name: "Mustang Fastback", period: "1965–1973", category: "Clássicos", description: "A carroceria de teto inclinado que virou uma das silhuetas mais reconhecidas do Mustang." },
  { name: "Shelby GT350", period: "1965–1970 / 2015–2020", category: "Shelby", description: "Nome ligado à pista, criado com Carroll Shelby e revivido décadas depois." },
  { name: "Shelby GT500", period: "1967–1970 / 2007–2014 / 2020–2022", category: "Shelby", description: "A vertente de altíssimo desempenho mais conhecida da família Shelby Mustang." },
  { name: "Mach 1", period: "1969–1978 / 2003–2004 / 2021–2023", category: "Performance", description: "Pacote de desempenho que atravessou épocas e voltou como ponte entre GT e Shelby." },
  { name: "Boss 302", period: "1969–1970 / 2012–2013", category: "Performance", description: "Criado originalmente para homologação e competição, retornou com foco em pista." },
  { name: "Boss 429", period: "1969–1970", category: "Clássicos", description: "Um dos Mustangs clássicos mais raros e desejados, criado ao redor de um enorme V8 429." },
  { name: "Cobra Jet", period: "1968 em diante, em diferentes projetos", category: "Performance", description: "Nome histórico associado a motores e Mustangs voltados para aceleração." },
  { name: "King Cobra", period: "1978", category: "Edições especiais", description: "Versão visualmente marcante que encerrou a era Mustang II." },
  { name: "SVO", period: "1984–1986", category: "Performance", description: "Fox Body turbo que mostrou uma alternativa tecnológica ao V8 tradicional." },
  { name: "SVT Cobra", period: "1993–2004", category: "Performance", description: "Linha criada pela Special Vehicle Team para levar o Mustang a um patamar mais técnico." },
  { name: "Cobra R", period: "1993 / 1995 / 2000", category: "Performance", description: "Série limitada e radical, desenvolvida com foco explícito em circuito." },
  { name: "Bullitt", period: "2001 / 2008–2009 / 2019–2020", category: "Edições especiais", description: "Tributo ao Mustang GT do filme Bullitt e à histórica perseguição pelas ruas de San Francisco." },
  { name: "California Special", period: "1968 / retornos modernos", category: "Edições especiais", description: "Pacote de estilo com raízes na costa oeste e várias reinterpretações modernas." },
  { name: "Shelby GT350R", period: "2015–2020", category: "Shelby", description: "Versão ainda mais focada em pista do GT350, com redução de peso e acerto radical." },
  { name: "Dark Horse", period: "2024–presente", category: "Modernos", description: "V8 Coyote de alto desempenho e preparação de chassi pensada para uso intenso em circuito." },
  { name: "Mustang GTD", period: "2025–presente", category: "Modernos", description: "Halo car derivado da mentalidade de competição, com aerodinâmica e suspensão extremamente avançadas." },
  { name: "Mustang Mach-E", period: "2021–presente", category: "Elétricos", description: "SUV elétrico que expandiu a família Mustang para uma proposta completamente diferente do cupê tradicional." },
];

const current2026 = [
  "EcoBoost Fastback",
  "EcoBoost Premium Fastback",
  "EcoBoost Convertible",
  "EcoBoost Premium Convertible",
  "GT Fastback",
  "GT Premium Fastback",
  "GT Premium Convertible",
  "Dark Horse",
  "Dark Horse Premium",
  "Dark Horse SC",
];

const machE2026 = [
  ["Select", "Entrada da linha elétrica, com foco em equilíbrio entre alcance, tecnologia e uso diário."],
  ["Premium", "Mais equipamentos e opções de configuração para quem prioriza conforto e acabamento."],
  ["GT", "Versão de maior desempenho para rua, com dois motores elétricos e proposta esportiva."],
  ["Rally", "Configuração inspirada em rali, com visual, altura e acerto próprios para superfícies variadas."],
];

const gallery = [
  generations[0].image,
  heroImage,
  generations[4].image,
  generations[5].image,
  generations[6].image,
  "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1400&q=85",
];

const navItems = [
  ["História", "#historia"],
  ["Gerações", "#geracoes"],
  ["Modelos", "#modelos"],
  ["2026", "#linha-2026"],
  ["Mach-E", "#mach-e"],
  ["Brasil", "#brasil"],
  ["Galeria", "#galeria"],
];

function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 text-zinc-500 ${className}`} role="img" aria-label={alt}>
        <span className="px-5 text-center text-xs uppercase tracking-[0.25em]">Imagem indisponível</span>
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [compareA, setCompareA] = useState(0);
  const [compareB, setCompareB] = useState(6);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const categories = ["Todos", "Clássicos", "Shelby", "Performance", "Edições especiais", "Modernos", "Elétricos"];
  const filteredModels = useMemo(() => {
    const text = query.trim().toLowerCase();
    return legendaryModels.filter((model) => {
      const categoryMatch = category === "Todos" || model.category === category;
      const searchMatch = !text || `${model.name} ${model.period} ${model.description}`.toLowerCase().includes(text);
      return categoryMatch && searchMatch;
    });
  }, [query, category]);

  const a = generations[compareA];
  const b = generations[compareB];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0b] text-zinc-100 selection:bg-red-600 selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Mustang — início">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-red-500/50 bg-red-600/10 font-black text-red-500">M</span>
            <span className="leading-none">
              <strong className="block text-sm tracking-[0.22em]">MUSTANG</strong>
              <small className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">60+ anos de lenda</small>
            </span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
            {navItems.map(([label, target]) => (
              <a key={target} href={target} className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400 transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden" aria-label="Abrir menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-black px-5 py-4 lg:hidden" aria-label="Navegação mobile">
            {navItems.map(([label, target]) => (
              <a key={target} href={target} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-white/10 py-3 text-sm uppercase tracking-wider">
                {label}<ChevronRight size={16} className="text-red-500" />
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden pt-16">
        <Img src={heroImage} alt="Ford Mustang clássico em vista lateral" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:pb-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-red-500">Detroit · 1964 — hoje</p>
          <h1 className="max-w-5xl text-6xl font-black leading-[0.85] tracking-[-0.07em] sm:text-8xl lg:text-[9rem]">MUSTANG</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">Mais de 60 anos acelerando a história. Sete gerações, dezenas de versões e uma identidade que atravessou mudanças de mercado sem abandonar a ideia de um esportivo acessível e cheio de personalidade.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#geracoes" className="rounded-full bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-red-500">Explorar gerações</a>
            <a href="#linha-2026" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wider backdrop-blur transition hover:bg-white/10">Modelos atuais</a>
          </div>
          <div className="mt-14 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {[["1964", "estreia pública"], ["07", "gerações"], ["60+", "anos de história"]].map(([value, label]) => (
              <div key={label} className="bg-black/70 p-4 backdrop-blur sm:p-6"><strong className="block text-2xl sm:text-3xl">{value}</strong><span className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="historia" className="border-y border-white/10 bg-zinc-950 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3 text-red-500"><History size={18} /><span className="text-xs font-bold uppercase tracking-[0.3em]">A origem da lenda</span></div>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">17 de abril<br />de 1964.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>O Mustang foi desenvolvido no início dos anos 1960 sob a liderança de executivos e designers da Ford que buscavam um carro jovem, atraente e configurável. Seu grande lançamento ao público aconteceu no Pavilhão Ford da Feira Mundial de Nova York, em 17 de abril de 1964.</p>
            <p>A combinação de capô longo, traseira curta, espaço 2+2, muitas opções e preço competitivo criou uma fórmula nova. O sucesso foi tão grande que a imprensa passou a usar o termo <strong className="text-white">pony car</strong> para descrever a categoria que o Mustang ajudou a popularizar.</p>
            <p>Desde então, o nome atravessou crises de combustível, mudanças de legislação, transformações de design, globalização e eletrificação. Mesmo mudando bastante, o Mustang permaneceu em produção contínua e se tornou um dos nomes esportivos mais duradouros da América do Norte.</p>
          </div>
        </div>
      </section>

      <section id="geracoes" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">Linha do tempo completa</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">As 7 gerações</h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">Do primeiro pony car ao S650, cada geração respondeu ao seu tempo. Abra os cards para ver contexto, estilo, motorização e as principais versões.</p>
          <div className="mt-12 space-y-5">
            {generations.map((gen) => (
              <article key={gen.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <Img src={gen.image} alt={`Ford Mustang — ${gen.name}`} className="h-72 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 lg:h-full" />
                  <div className="p-6 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div><span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">Geração 0{gen.id}</span><h3 className="mt-2 text-3xl font-black sm:text-4xl">{gen.name}</h3></div>
                      <span className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">{gen.years}</span>
                    </div>
                    <p className="mt-5 leading-7 text-zinc-300">{gen.description}</p>
                    <div className="mt-7 grid gap-4 sm:grid-cols-3">
                      {[["Design", gen.style], ["Motores", gen.engine], ["Marco", gen.highlight]].map(([label, text]) => (
                        <div key={label} className="border-t border-white/10 pt-3"><strong className="text-xs uppercase tracking-wider text-red-500">{label}</strong><p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p></div>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {gen.models.map((model) => <span key={model} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-300">{model}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modelos" className="border-y border-white/10 bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">Arquivo Mustang</p>
          <h2 className="mt-3 text-4xl font-black sm:text-6xl">Modelos e versões lendárias</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black px-4 py-3">
              <Search size={18} className="text-zinc-500" /><span className="sr-only">Pesquisar modelos</span>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Pesquisar: Shelby, Bullitt, Mach 1..." className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-600" />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${category === item ? "bg-red-600 text-white" : "border border-white/10 bg-black text-zinc-400 hover:text-white"}`}>{item}</button>)}
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredModels.map((model) => (
              <article key={`${model.name}-${model.period}`} className="rounded-2xl border border-white/10 bg-black p-5 transition hover:-translate-y-1 hover:border-red-500/40">
                <div className="flex items-center justify-between gap-4"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">{model.category}</span><span className="text-xs text-zinc-600">{model.period}</span></div>
                <h3 className="mt-5 text-2xl font-black">{model.name}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{model.description}</p>
              </article>
            ))}
          </div>
          {filteredModels.length === 0 && <p className="mt-8 rounded-2xl border border-white/10 p-6 text-center text-zinc-500">Nenhum modelo encontrado com esse filtro.</p>}
        </div>
      </section>

      <section id="linha-2026" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div><div className="flex items-center gap-3 text-red-500"><Gauge size={18} /><span className="text-xs font-bold uppercase tracking-[0.3em]">Linha 2026</span></div><h2 className="mt-4 text-4xl font-black sm:text-6xl">V8, turbo e pista.</h2><p className="mt-5 max-w-2xl leading-7 text-zinc-400">A linha 2026 do Mustang tradicional continua dividida entre versões EcoBoost, GT e Dark Horse, além dos projetos especiais de altíssimo desempenho.</p></div>
            <div className="rounded-3xl border border-red-500/30 bg-red-600/10 p-6"><span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Destaque confirmado</span><strong className="mt-3 block text-4xl font-black">500 hp</strong><p className="mt-2 text-sm leading-6 text-zinc-300">O Mustang Dark Horse 2026 usa uma versão modificada do V8 5.0 Coyote de quarta geração, aspirado naturalmente.</p></div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {current2026.map((model) => <div key={model} className="rounded-2xl border border-white/10 bg-zinc-950 p-4 text-sm font-semibold">{model}</div>)}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-7"><span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Halo car</span><h3 className="mt-3 text-3xl font-black">Mustang GTD</h3><p className="mt-4 leading-7 text-zinc-400">Projeto extremo inspirado pela competição, com V8 5.2 supercharged, aerodinâmica ativa e soluções de suspensão muito diferentes de um Mustang de rua convencional. É o ápice tecnológico atual da família cupê.</p></article>
            <article className="rounded-3xl border border-white/10 bg-zinc-950 p-7"><span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Novidades S650</span><h3 className="mt-3 text-3xl font-black">Dark Horse SC + RTR</h3><p className="mt-4 leading-7 text-zinc-400">A Ford ampliou a sétima geração com o Dark Horse SC e com um pacote RTR para o EcoBoost, reforçando a variedade entre versões de entrada, V8 e configurações mais focadas em pista.</p></article>
          </div>
        </div>
      </section>

      <section id="mach-e" className="border-y border-white/10 bg-gradient-to-br from-zinc-950 to-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-3 text-cyan-400"><Zap size={18} /><span className="text-xs font-bold uppercase tracking-[0.3em]">Família elétrica</span></div>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">Mustang Mach-E</h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-300">O Mach-E é uma linha elétrica distinta do cupê esportivo tradicional. Ele usa o nome Mustang para comunicar uma proposta de desempenho e identidade visual, mas adota carroceria SUV, cinco lugares e propulsão totalmente elétrica.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {machE2026.map(([name, description]) => <article key={name} className="rounded-2xl border border-cyan-400/15 bg-black/40 p-5"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">2026</span><h3 className="mt-3 text-2xl font-black">{name}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section id="brasil" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div><div className="flex items-center gap-3 text-green-400"><Flag size={18} /><span className="text-xs font-bold uppercase tracking-[0.3em]">Mustang no Brasil</span></div><h2 className="mt-4 text-4xl font-black sm:text-6xl">Uma lenda também por aqui.</h2></div>
          <div className="space-y-5 leading-7 text-zinc-300"><p>Durante décadas, muitos Mustangs chegaram ao Brasil por importação independente e se tornaram objetos de desejo. A presença oficial da Ford aproximou o modelo de um público maior e consolidou o GT como um dos esportivos mais reconhecíveis do mercado brasileiro.</p><div className="rounded-3xl border border-green-400/20 bg-green-500/5 p-6"><strong className="text-xl text-white">Atualização de agosto de 2026</strong><p className="mt-3 text-zinc-300">A Ford apresentou ao público no Festival Interlagos, em São Paulo, o Mustang GT Performance 2026. A marca informou que ele chega ao mercado brasileiro ainda em 2026 como nova opção ao lado do Dark Horse.</p></div></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 py-24" aria-labelledby="comparador-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">Comparador</p><h2 id="comparador-title" className="mt-3 text-4xl font-black sm:text-5xl">Geração contra geração</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[{ value: compareA, setter: setCompareA }, { value: compareB, setter: setCompareB }].map((select, index) => (
              <label key={index} className="rounded-2xl border border-white/10 bg-black p-4 text-sm"><span className="mb-2 block text-xs uppercase tracking-wider text-zinc-500">Escolha {index === 0 ? "A" : "B"}</span><select value={select.value} onChange={(e) => select.setter(Number(e.target.value))} className="w-full bg-black py-2 font-bold outline-none">{generations.map((gen, i) => <option key={gen.id} value={i}>{gen.id}ª — {gen.name} ({gen.years})</option>)}</select></label>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {[a, b].map((gen) => <article key={`${gen.id}-${gen.name}`} className="rounded-3xl border border-white/10 bg-black p-6"><span className="text-xs font-bold uppercase tracking-wider text-red-500">{gen.years}</span><h3 className="mt-2 text-3xl font-black">{gen.name}</h3><dl className="mt-6 space-y-4 text-sm"><div><dt className="text-zinc-600">Estilo</dt><dd className="mt-1 text-zinc-300">{gen.style}</dd></div><div><dt className="text-zinc-600">Motorização típica</dt><dd className="mt-1 text-zinc-300">{gen.engine}</dd></div><div><dt className="text-zinc-600">Maior destaque</dt><dd className="mt-1 text-zinc-300">{gen.highlight}</dd></div></dl></article>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">Curiosidades</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Detalhes que viraram cultura</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Serial nº 1", "O primeiro Mustang serializado é um conversível branco preservado no museu The Henry Ford, em Dearborn."],
              ["Pony car", "O sucesso do Mustang ajudou a popularizar o nome de uma categoria inteira de cupês compactos e esportivos."],
              ["Cinema", "O Mustang apareceu cedo no cinema e se tornou especialmente famoso em filmes como Bullitt."],
              ["Mach 1", "O nome nasceu em 1969 e retornou em diferentes épocas, mantendo a ligação com desempenho e visual especial."],
              ["Bullitt", "A Ford transformou uma referência cinematográfica em edição especial de fábrica em três gerações diferentes."],
              ["Duas famílias", "Hoje o universo Mustang inclui tanto o cupê/convertível de motor a combustão quanto o SUV elétrico Mach-E."],
            ].map(([title, text]) => <article key={title} className="bg-zinc-950 p-6"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="galeria" className="border-t border-white/10 bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">Galeria</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Mustang em imagens</h2><div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">{gallery.map((src, index) => <button key={src + index} onClick={() => setLightbox(src)} className={`group overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 row-span-2" : ""}`} aria-label={`Abrir imagem ${index + 1}`}><Img src={src} alt={`Galeria Ford Mustang ${index + 1}`} className="h-full min-h-52 w-full object-cover transition duration-500 group-hover:scale-105" /></button>)}</div></div>
      </section>

      <footer className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 text-sm text-zinc-500 sm:px-6 lg:grid-cols-2"><div><strong className="text-zinc-200">Mustang — 60+ Anos de Lenda</strong><p className="mt-2 max-w-xl leading-6">Projeto editorial independente criado para fins informativos e de portfólio. Não é afiliado, patrocinado ou aprovado pela Ford Motor Company.</p></div><div className="lg:text-right"><p>Referências principais: Ford Motor Company, Ford.com e Ford From The Road.</p><p className="mt-2">Dados de modelos atuais podem mudar conforme mercado, ano-modelo e atualizações da fabricante.</p></div></div>
      </footer>

      {lightbox && <div className="fixed inset-0 z-[80] grid place-items-center bg-black/95 p-4" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={() => setLightbox(null)}><button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10" aria-label="Fechar imagem"><X /></button><Img src={lightbox} alt="Ford Mustang ampliado" className="max-h-[88vh] max-w-[95vw] rounded-2xl object-contain" /></div>}

      {showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-red-600 shadow-2xl transition hover:bg-red-500" aria-label="Voltar ao topo"><ArrowUp size={19} /></button>}
    </main>
  );
}
