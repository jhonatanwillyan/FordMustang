import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BriefcaseBusiness, Building2, Check, ChevronDown, ChevronLeft, ChevronRight,
  Clock3, Facebook, HeartPulse, Home as HomeIcon, Instagram, Linkedin, Menu, MessageCircle,
  ShieldCheck, Sparkles, Star, UserRound, UsersRound, WalletCards, X, CarFront
} from "lucide-react";

const ORANGE = "#ff5a1f";
const whatsappNumber = "5511999999999";

const services = [
  { title: "Seguro Auto", icon: CarFront, desc: "Proteção completa para o seu carro, todos os dias.", detail: "Conte com assistência 24 horas, cobertura para colisão, roubo, furto, terceiros e carro reserva. Comparamos as melhores opções para o seu perfil." },
  { title: "Seguro Residencial", icon: HomeIcon, desc: "Sua casa protegida do jeito que ela merece.", detail: "Proteção para incêndio, danos elétricos, roubo, responsabilidade civil e serviços emergenciais para sua residência." },
  { title: "Seguro de Vida", icon: HeartPulse, desc: "Cuidado para quem importa, hoje e sempre.", detail: "Planos individuais e familiares para trazer tranquilidade financeira nos momentos em que sua família mais precisa." },
  { title: "Seguro Empresarial", icon: BriefcaseBusiness, desc: "Seu negócio seguro para continuar crescendo.", detail: "Coberturas sob medida para patrimônio, equipamentos, responsabilidade civil e operação da sua empresa." },
  { title: "Seguro Saúde", icon: ShieldCheck, desc: "Acesso à saúde com mais tranquilidade.", detail: "Analisamos operadoras, redes credenciadas e opções de coparticipação para encontrar o plano ideal." },
  { title: "Consórcio", icon: Building2, desc: "Planejamento para conquistar sem juros bancários.", detail: "Consórcio de imóveis, veículos e serviços com orientação clara para você escolher prazo e parcela." },
];

const testimonials = [
  { name: "Mariana Ribeiro", role: "Empresária, São Paulo", text: "A Claudineia entendeu exatamente o que eu precisava. Resolveu meu seguro empresarial com agilidade e transparência.", initials: "MR" },
  { name: "Rafael Almeida", role: "Cliente desde 2019", text: "Renovei meu seguro auto economizando e com uma cobertura melhor. O atendimento próximo faz toda a diferença.", initials: "RA" },
  { name: "Juliana Martins", role: "Cliente de consórcio", text: "Foi tudo muito claro desde a primeira conversa. Hoje estou mais perto do meu imóvel e sei que posso contar com a Seguralta.", initials: "JM" },
];

const articles = [
  { category: "Consórcio", title: "Como funciona o consórcio de imóvel?", text: "Entenda as etapas, os prazos e como planejar sua carta de crédito.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80" },
  { category: "Seguro Auto", title: "Seguro auto mais barato em 2026", text: "O que realmente influencia o preço e como encontrar a cobertura certa.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80" },
  { category: "Seguro de Vida", title: "Dúvidas sobre seguro de vida", text: "Um guia direto para proteger sua família com escolhas conscientes.", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80" },
];

function openWhatsApp(message: string) {
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<(typeof services)[number] | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [leads, setLeads] = useState<{name:string; phone:string; interest:string; city:string; date:string}[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("seguralta-leads");
    if (stored) setLeads(JSON.parse(stored));
  }, []);

  const nav = useMemo(() => [["Serviços", "#servicos"], ["Por que nós", "#diferenciais"], ["Conteúdo", "#conteudo"], ["FAQ", "#faq"]], []);
  const faqs = [
    ["Por que contratar um corretor de seguros?", "Um corretor independente compara diferentes seguradoras e traduz as coberturas para que você decida com segurança, sem perder tempo."],
    ["A Seguralta atende em todo o Brasil?", "Sim. Fazemos atendimento remoto em todo o território nacional e acompanhamento próximo durante toda a jornada."],
    ["Consórcio é melhor que financiamento?", "Depende do seu momento e objetivo. Avaliamos prazo, parcela e urgência para indicar a opção mais coerente com seu planejamento."],
    ["Quanto tempo leva para receber uma cotação?", "Respondemos em até 10 minutos durante o horário comercial. Para propostas mais específicas, combinamos o próximo passo com você."],
    ["A Seguralta faz tráfego pago e consultoria financeira?", "Sim, além de corretagem, oferecemos consultoria em organização financeira e gestão de tráfego pago para empresas parceiras."],
  ];

  function maskPhone(value: string) { return value.replace(/\D/g, "").slice(0, 11).replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2"); }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lead = { name: String(data.get("name")), phone, interest: String(data.get("interest")), city: String(data.get("city")), date: new Date().toLocaleDateString("pt-BR") };
    const next = [lead, ...leads]; setLeads(next); localStorage.setItem("seguralta-leads", JSON.stringify(next)); setSubmitted(true);
    openWhatsApp(`Olá, sou ${lead.name}. Tenho interesse em ${lead.interest}. Meu WhatsApp é ${lead.phone} e moro em ${lead.city}.`);
  }

  return <main className="seguralta-site">
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Seguralta início"><span className="brand-mark">S</span><span><strong>SEGURALTA</strong><small>Segurança em primeiro lugar. Sempre.</small></span></a>
      <nav className="desktop-nav">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <button className="button button-small" onClick={() => openWhatsApp("Olá, quero falar com um especialista da Seguralta.")}>Falar com especialista <ArrowRight size={15}/></button>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
      {menuOpen && <nav className="mobile-nav">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<button className="button" onClick={() => openWhatsApp("Olá, quero falar com um especialista da Seguralta.")}>Falar com especialista</button></nav>}
    </header>

    <section id="inicio" className="hero">
      <div className="hero-photo"/><div className="hero-shade"/>
      <div className="hero-content"><p className="eyebrow"><span/> CORRETAGEM DE SEGUROS & CONSÓRCIOS</p><h1>Proteção e<br/><em>conquistas</em> com<br/>quem entende.</h1><p className="hero-copy">Seguros e consórcios personalizados para você, sua família e seu negócio. Atendimento humano e as melhores seguradoras do mercado.</p><div className="hero-actions"><a className="button" href="#simulador">Simular meu seguro <ArrowRight size={17}/></a><button className="button button-ghost" onClick={() => openWhatsApp("Olá, quero falar com um especialista da Seguralta.")}><MessageCircle size={17}/> Falar com especialista</button></div><p className="trust"><Check size={15}/> +15 anos de mercado <span/> Atendimento em todo o Brasil</p></div>
      <div className="hero-note"><span>SEGURALTA</span><strong>01</strong><small>Proteção que<br/>acompanha você.</small></div>
    </section>

    <section className="partners"><p>Trabalhamos com as seguradoras mais confiáveis do país</p><div className="partner-list"><b>porto.</b><b>bradesco<br/><i>seguros</i></b><b>sulAmérica</b><b>ALLIANZ</b><b>MAPFRE</b><b>HDI</b><b>Liberty</b><b>tokio marine</b></div></section>

    <section id="servicos" className="section services-section"><div className="section-heading"><div><p className="eyebrow orange">O QUE FAZEMOS</p><h2>Proteção para cada<br/><em>fase da sua vida.</em></h2></div><p>Escolhas importantes pedem orientação clara. Encontre a solução que faz sentido para o seu momento.</p></div><div className="service-grid">{services.map((service, i) => { const Icon = service.icon; return <article className="service-card" key={service.title}><span className="card-number">0{i+1}</span><Icon size={27} strokeWidth={1.5}/><h3>{service.title}</h3><p>{service.desc}</p><button onClick={() => setModal(service)}>Saiba mais <ArrowRight size={15}/></button></article> })}</div></section>

    <section id="diferenciais" className="section difference-section"><div className="portrait"><div className="portrait-image"/><div className="portrait-label"><strong>Claudineia Antunes<br/>Plaza Barbosa</strong><span>Corretora responsável<br/>SUSEP: 202012345</span></div></div><div className="difference-copy"><p className="eyebrow orange">POR QUE A SEGURALTA</p><h2>Você fala com<br/><em>quem resolve.</em></h2><p className="lead">Na Seguralta, o atendimento é próximo, estratégico e feito para simplificar decisões. Sem robôs. Sem letras pequenas.</p><div className="difference-list"><div><span>01</span><div><h3>Atendimento personalizado</h3><p>Você fala diretamente com a Claudineia e recebe orientação de verdade.</p></div></div><div><span>02</span><div><h3>As melhores taxas</h3><p>Comparamos seguradoras para encontrar o equilíbrio entre preço e cobertura.</p></div></div><div><span>03</span><div><h3>Pós-venda diferenciado</h3><p>Acompanhamento próximo em sinistros, renovações e regularizações.</p></div></div></div></div></section>

    <section id="simulador" className="simulator"><div className="simulator-intro"><p className="eyebrow">VAMOS CONVERSAR</p><h2>Uma cotação<br/><em>começa aqui.</em></h2><p>Preencha seus dados. A gente entende o seu momento e apresenta as opções mais adequadas.</p><div className="contact-line"><MessageCircle size={19}/><span>WhatsApp direto<br/><strong>(11) 99999-9999</strong></span></div></div><div className="form-card">{submitted ? <div className="success"><div className="success-icon"><Check/></div><p className="eyebrow orange">RECEBEMOS SEUS DADOS</p><h3>Obrigado pelo contato.</h3><p>Já abrimos uma conversa no WhatsApp. Em até 10 minutos, um especialista retorna para você.</p><button className="button" onClick={() => setSubmitted(false)}>Enviar nova solicitação</button></div> : <form onSubmit={handleSubmit}><div className="form-top"><span>SIMULAÇÃO RÁPIDA</span><Clock3 size={18}/></div><label>Seu nome<input name="name" required placeholder="Como podemos chamar você?"/></label><label>WhatsApp<input name="phone" required value={phone} onChange={e => setPhone(maskPhone(e.target.value))} placeholder="(11) 99999-9999"/></label><label>O que você procura?<select name="interest" required defaultValue=""><option value="" disabled>Selecione uma opção</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>Cidade<input name="city" required placeholder="Ex.: São Paulo, SP"/></label><button className="button button-full" type="submit">Receber minha cotação por WhatsApp <ArrowRight size={17}/></button><small className="form-note"><ShieldCheck size={14}/> Seus dados estão protegidos. Respondemos em até 10 minutos.</small></form>}</div></section>

    <section className="section testimonials"><div className="section-heading"><div><p className="eyebrow orange">QUEM CONFIA</p><h2>Proximidade que<br/><em>se percebe.</em></h2></div><div className="rating"><strong>4.9</strong><span>{[1,2,3,4,5].map(s => <Star key={s} size={16} fill={ORANGE}/>)}</span><small>Nota no Google Meu Negócio</small></div></div><div className="testimonial-stage"><button className="arrow-button" onClick={() => setTestimonial((testimonial + 2) % 3)}><ChevronLeft/></button><div className="testimonial-card"><div className="avatar">{testimonials[testimonial].initials}</div><div className="stars">★★★★★</div><blockquote>“{testimonials[testimonial].text}”</blockquote><strong>{testimonials[testimonial].name}</strong><small>{testimonials[testimonial].role}</small></div><button className="arrow-button" onClick={() => setTestimonial((testimonial + 1) % 3)}><ChevronRight/></button></div><div className="dots">{testimonials.map((_,i)=><button key={i} className={testimonial===i?"active":""} onClick={()=>setTestimonial(i)} aria-label={`Depoimento ${i+1}`}/>)}</div></section>

    <section id="conteudo" className="section content-section"><div className="section-heading"><div><p className="eyebrow orange">INFORMAÇÃO QUE AJUDA</p><h2>Conteúdo para<br/><em>decidir melhor.</em></h2></div><a className="text-link" href="#conteudo">Ver todos os artigos <ArrowRight size={16}/></a></div><div className="article-grid">{articles.map(article => <article className="article-card" key={article.title}><img loading="lazy" src={article.image} alt=""/><div><span>{article.category}</span><h3>{article.title}</h3><p>{article.text}</p><a href="#conteudo">Ler artigo <ArrowRight size={15}/></a></div></article>)}</div></section>

    <section id="faq" className="section faq-section"><div><p className="eyebrow orange">AINDA TEM DÚVIDAS?</p><h2>Perguntas<br/><em>frequentes.</em></h2></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${faqOpen===i?"open":""}`} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></section>

    <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#inicio"><span className="brand-mark">S</span><span><strong>SEGURALTA</strong><small>Segurança em primeiro lugar. Sempre.</small></span></a><p>Corretagem de seguros e consórcios com atendimento humano, próximo e estratégico.</p><div className="socials"><a href="#footer"><Instagram size={17}/></a><a href="#footer"><Facebook size={17}/></a><a href="#footer"><Linkedin size={17}/></a></div></div><div><h4>Explorar</h4><a href="#servicos">Serviços</a><a href="#diferenciais">Por que nós</a><a href="#conteudo">Conteúdo</a><a href="#faq">Perguntas frequentes</a></div><div><h4>Serviços</h4>{services.slice(0,4).map(s=><a href="#servicos" key={s.title}>{s.title}</a>)}</div><div><h4>Contato</h4><p>São Paulo, SP<br/>Atendimento em todo o Brasil</p><a href="mailto:contato@seguralta.com.br">contato@seguralta.com.br</a><a href={`https://wa.me/${whatsappNumber}`}>+55 11 99999-9999</a></div></div><div className="footer-bottom"><span>© 2026 SEGURALTA. Todos os direitos reservados.</span><span>CNPJ 00.000.000/0001-00 · SUSEP 202012345</span><button onClick={()=>setAdminOpen(true)}>Área administrativa</button></div></footer>
    <button className="floating-whatsapp" onClick={() => openWhatsApp("Olá, quero falar com um especialista da Seguralta.")} aria-label="Falar no WhatsApp"><MessageCircle/></button>

    {modal && <div className="modal-backdrop" onClick={()=>setModal(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setModal(null)}><X/></button><div className="modal-icon"><modal.icon size={28}/></div><p className="eyebrow orange">SEGURALTA</p><h2>{modal.title}</h2><p>{modal.detail}</p><button className="button" onClick={()=>openWhatsApp(`Olá, tenho interesse em ${modal.title}.`)}>Falar com especialista <ArrowRight size={16}/></button></div></div>}
    {adminOpen && <div className="modal-backdrop"><div className="modal admin-modal"><button className="modal-close" onClick={()=>setAdminOpen(false)}><X/></button>{!authenticated ? <><p className="eyebrow orange">ACESSO RESTRITO</p><h2>Área administrativa</h2><p>Digite a senha para visualizar os leads capturados.</p><input type="password" value={adminPassword} onChange={e=>setAdminPassword(e.target.value)} placeholder="Senha"/><button className="button button-full" onClick={()=>adminPassword === "seguralta2026" ? setAuthenticated(true) : alert("Senha incorreta")}>Entrar</button><small>Demo: seguralta2026</small></> : <><p className="eyebrow orange">DASHBOARD</p><h2>Leads capturados</h2><div className="lead-table">{leads.length ? leads.map((lead,i)=><div className="lead-row" key={i}><strong>{lead.name}</strong><span>{lead.phone}</span><span>{lead.interest}</span><small>{lead.date}</small></div>) : <p>Nenhum lead capturado ainda.</p>}</div></>}</div></div>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":["InsuranceAgency","LocalBusiness"],name:"Seguralta",founder:"Claudineia Antunes Plaza Barbosa",telephone:"+55 11 99999-9999",email:"contato@seguralta.com.br",areaServed:"Brasil"})}} />
  </main>;
}
