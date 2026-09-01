import { useMemo, useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, BarChart3, Bell, BriefcaseBusiness,
  CalendarDays, Check, ChevronDown, CircleDollarSign, CreditCard, DollarSign,
  FileText, Gauge, Headphones, LayoutDashboard, Lightbulb, Menu, MessageCircle,
  MoreHorizontal, Plus, Search, Settings, Target, TrendingUp, UsersRound, X
} from "lucide-react";

const orange = "#ff5a1f";
const leadsData = [
  { name: "Mariana Ribeiro", service: "Seguro Empresarial", value: "R$ 2.480", status: "Em negociação", date: "Hoje" },
  { name: "Rafael Almeida", service: "Seguro Auto", value: "R$ 890", status: "Novo lead", date: "Hoje" },
  { name: "Juliana Martins", service: "Consórcio de imóvel", value: "R$ 148.000", status: "Proposta enviada", date: "Ontem" },
  { name: "Carlos Eduardo", service: "Seguro de vida", value: "R$ 1.260", status: "Aguardando retorno", date: "Ontem" },
];
const campaigns = [
  { name: "Seguro Auto · SP", channel: "Meta Ads", spend: "R$ 1.280", leads: 46, cpl: "R$ 27,82", ctr: "2,8%", color: "orange" },
  { name: "Consórcio Imóvel", channel: "Google Ads", spend: "R$ 960", leads: 31, cpl: "R$ 30,96", ctr: "4,1%", color: "dark" },
  { name: "Seguro Empresarial", channel: "Meta Ads", spend: "R$ 740", leads: 18, cpl: "R$ 41,11", ctr: "1,9%", color: "light" },
];

function Metric({ label, value, change, icon: Icon, negative = false }: any) {
  return <article className="metric-card"><div className="metric-top"><span>{label}</span><span className="metric-icon"><Icon size={18}/></span></div><strong>{value}</strong><small className={negative ? "negative" : "positive"}>{negative ? <ArrowDownRight size={13}/> : <ArrowUpRight size={13}/>} {change} <i>vs. mês anterior</i></small></article>;
}

export default function Home() {
  const [range, setRange] = useState("Este mês");
  const [menuOpen, setMenuOpen] = useState(false);
  const [agentOpen, setAgentOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState(["Revisar campanha de Consórcio Imóvel", "Retornar proposta de Mariana Ribeiro", "Enviar documentos para a Porto Seguro"]);
  const [newTask, setNewTask] = useState("");
  const [activeNav, setActiveNav] = useState("Visão geral");

  const greeting = useMemo(() => new Date().getHours() < 12 ? "Bom dia" : "Boa tarde", []);
  const addTask = () => { if (newTask.trim()) { setTasks([...tasks, newTask.trim()]); setNewTask(""); } };
  const agentResponse = query ? `Vou analisar “${query}” com base nos seus dados e preparar um próximo passo objetivo.` : "Olá, Claudineia. Posso acompanhar seus ganhos, campanhas, leads e agenda. Por onde começamos?";

  return <div className="dashboard-shell">
    <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
      <div className="side-brand"><span className="brand-mark">S</span><div><strong>SEGURALTA</strong><small>painel pessoal</small></div><button className="close-side" onClick={() => setMenuOpen(false)}><X size={18}/></button></div>
      <div className="profile-mini"><div className="profile-avatar">CA</div><div><strong>Claudineia</strong><small>Administradora</small></div><span className="online-dot"/></div>
      <nav className="side-nav"><p>MENU PRINCIPAL</p>{[[LayoutDashboard,"Visão geral"],[CircleDollarSign,"Financeiro"],[Target,"Tráfego pago"],[UsersRound,"Leads e clientes"],[CalendarDays,"Agenda"]].map(([Icon, label]: any) => <button className={activeNav===label ? "active" : ""} key={label} onClick={() => {setActiveNav(label); setMenuOpen(false)}}><Icon size={18}/>{label}{label === "Leads e clientes" && <b>4</b>}</button>)}<p>FERRAMENTAS</p>{[[FileText,"Relatórios"],[Headphones,"Consultoria"],[Settings,"Configurações"]].map(([Icon,label]: any)=><button key={label} onClick={() => {setActiveNav(label);setMenuOpen(false)}}><Icon size={18}/>{label}</button>)}</nav>
      <div className="side-help"><Lightbulb size={19}/><strong>Seu agente pessoal</strong><p>Tenha clareza para decidir o próximo passo.</p><button onClick={() => setAgentOpen(true)}>Conversar agora <ArrowUpRight size={14}/></button></div>
      <div className="side-footer"><span>SEGURALTA · 2026</span><button> Sair <ArrowDownRight size={14}/></button></div>
    </aside>

    <main className="dashboard-main">
      <header className="dash-header"><button className="mobile-menu" onClick={() => setMenuOpen(true)}><Menu/></button><div className="breadcrumb"><span>Workspace</span><b>/</b><strong>{activeNav}</strong></div><div className="header-actions"><button className="search-trigger"><Search size={17}/><span>Buscar</span><kbd>⌘ K</kbd></button><button className="icon-btn"><Bell size={18}/><i/></button><div className="header-avatar">CA</div></div></header>
      <div className="dashboard-content">
        <section className="welcome-row"><div><p className="eyebrow-dash">{greeting}, Claudineia <span>✦</span></p><h1>Visão geral do seu negócio.</h1><p className="muted">Aqui está o que importa hoje. Acompanhe, decida e avance.</p></div><div className="date-filter"><CalendarDays size={16}/><select value={range} onChange={e=>setRange(e.target.value)}><option>Este mês</option><option>Últimos 30 dias</option><option>Este ano</option></select><ChevronDown size={14}/></div></section>
        <section className="metrics-grid"><Metric label="Receita estimada" value="R$ 18.740" change="12,8%" icon={CircleDollarSign}/><Metric label="Comissões recebidas" value="R$ 9.462" change="8,4%" icon={DollarSign}/><Metric label="Leads gerados" value="95" change="24,1%" icon={UsersRound}/><Metric label="Investimento em anúncios" value="R$ 2.980" change="6,2%" icon={BarChart3} negative/></section>
        <section className="main-grid"><article className="panel finance-panel"><div className="panel-header"><div><p className="panel-kicker">DESEMPENHO FINANCEIRO</p><h2>Receita e comissões</h2></div><button className="more-btn"><MoreHorizontal/></button></div><div className="chart-legend"><span><i className="dot orange-dot"/> Receita estimada</span><span><i className="dot black-dot"/> Comissões</span><strong>R$ 28.202 <small>total no período</small></strong></div><div className="chart"><div className="y-axis"><span>20k</span><span>15k</span><span>10k</span><span>5k</span><span>0</span></div><div className="chart-area"><div className="grid-lines"><i/><i/><i/><i/><i/></div><svg viewBox="0 0 700 240" preserveAspectRatio="none" aria-label="Gráfico de desempenho"><path className="area orange-area" d="M0,190 C65,165 70,180 125,145 S190,132 220,150 S290,105 330,125 S390,100 430,118 S500,62 545,92 S610,42 700,24 L700,240 L0,240Z"/><path className="line orange-line" d="M0,190 C65,165 70,180 125,145 S190,132 220,150 S290,105 330,125 S390,100 430,118 S500,62 545,92 S610,42 700,24"/><path className="line black-line" d="M0,210 C70,205 75,190 125,180 S190,180 220,187 S285,155 330,168 S390,150 430,155 S500,126 545,138 S610,105 700,90"/></svg><div className="x-axis"><span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Set</span></div></div></div></article>
        <article className="panel goal-panel"><div className="panel-header"><div><p className="panel-kicker">META DO MÊS</p><h2>Rumo ao objetivo</h2></div><Target size={20} className="orange-icon"/></div><div className="goal-ring"><div><strong>74%</strong><span>alcançado</span></div></div><h3>R$ 25.000 <small>meta de receita</small></h3><div className="goal-status"><Check size={14}/> Você está R$ 2.840 acima do ritmo esperado.</div><button className="text-button">Ver detalhes <ArrowRightIcon/></button></article></section>
        <section className="lower-grid"><article className="panel"><div className="panel-header"><div><p className="panel-kicker">OPORTUNIDADES</p><h2>Leads recentes</h2></div><button className="text-button">Ver todos <ArrowRightIcon/></button></div><div className="lead-list">{leadsData.map((lead,i)=><div className="lead-item" key={lead.name}><div className={`lead-avatar av-${i}`}>{lead.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div><div className="lead-info"><strong>{lead.name}</strong><span>{lead.service}</span></div><div className="lead-value"><strong>{lead.value}</strong><span>{lead.date}</span></div><span className={`status status-${i}`}>{lead.status}</span><button className="more-btn"><MoreHorizontal size={17}/></button></div>)}</div></article><article className="panel tasks-panel"><div className="panel-header"><div><p className="panel-kicker">FOCO DE HOJE</p><h2>Próximas tarefas</h2></div><button className="add-task" onClick={addTask}><Plus size={16}/></button></div><div className="task-list">{tasks.map((task,i)=><label key={task} className="task-item"><input type="checkbox" onChange={e=>e.currentTarget.parentElement?.classList.toggle("done",e.currentTarget.checked)}/><span>{task}</span><small>{i===0?"10:00":i===1?"11:30":"14:00"}</small></label>)}</div><div className="new-task"><input value={newTask} onChange={e=>setNewTask(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addTask()} placeholder="Adicionar uma tarefa..."/><button onClick={addTask}><Plus size={16}/></button></div></article></section>
        <section className="panel campaigns-panel"><div className="panel-header"><div><p className="panel-kicker">MÍDIA PAGA</p><h2>Campanhas em andamento</h2></div><button className="button-dash" onClick={() => setActiveNav("Tráfego pago")}><Plus size={15}/> Nova campanha</button></div><div className="campaign-table"><div className="campaign-head"><span>CAMPANHA</span><span>INVESTIMENTO</span><span>LEADS</span><span>CPL</span><span>CTR</span><span>STATUS</span></div>{campaigns.map(c=><div className="campaign-row" key={c.name}><div className="campaign-name"><i className={`campaign-icon ${c.color}`}><Activity size={15}/></i><span><strong>{c.name}</strong><small>{c.channel}</small></span></div><strong>{c.spend}</strong><strong>{c.leads}</strong><strong>{c.cpl}</strong><strong>{c.ctr}</strong><span className="live-status"><i/> Ativa</span></div>)}</div></section>
      </div>
    </main>

    <button className="agent-fab" onClick={() => setAgentOpen(true)}><SparkleIcon/><span>Agente Seguralta</span></button>
    {agentOpen && <div className="agent-overlay"><div className="agent-modal"><button className="modal-x" onClick={()=>setAgentOpen(false)}><X/></button><div className="agent-heading"><div className="agent-symbol"><Lightbulb size={23}/></div><div><p className="panel-kicker">AGENTE PESSOAL</p><h2>Como posso ajudar hoje?</h2></div></div><div className="agent-message"><strong>{agentResponse}</strong>{!query && <div className="suggestions"><button onClick={()=>setQuery("Quais campanhas merecem mais investimento?")}>Analisar campanhas <ArrowRightIcon/></button><button onClick={()=>setQuery("Qual minha previsão de ganhos este mês?")}>Ver previsão financeira <ArrowRightIcon/></button><button onClick={()=>setQuery("Quais leads devo priorizar hoje?")}>Priorizar meus leads <ArrowRightIcon/></button></div>}</div><div className="agent-input"><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&setQuery(query)} placeholder="Pergunte sobre seus números..."/><button onClick={()=>setQuery(query||"Me dê um resumo do meu negócio") }><ArrowUpRight size={18}/></button></div><small>O agente usa os dados deste painel para sugerir próximos passos. Os valores exibidos são demonstrativos.</small></div></div>}
  </div>;
}
function ArrowRightIcon(){return <ArrowUpRight size={14}/>}
function SparkleIcon(){return <span className="sparkle-icon">✦</span>}
