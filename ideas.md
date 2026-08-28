# Direção de design — Ford Mustang: Asphalt Chronicle

## Três direções consideradas

### 1. Arquivo de Pista
**Very Brief Intro:** Um editorial de automobilismo com a energia precisa de um pôster de corrida e a disciplina visual de um arquivo histórico. A experiência transforma a cronologia Mustang em uma sequência de momentos mecânicos marcantes.

**Probability:** 0.07

### 2. Estrada Americana ao Entardecer
**Very Brief Intro:** Uma leitura quente e cinematográfica da cultura das highways, com cores solares, paisagens abertas e nostalgia de fotografia analógica. O Mustang aparece como companheiro de viagem, não como objeto de museu.

**Probability:** 0.03

### 3. Caderno de Engenharia
**Very Brief Intro:** Uma linguagem técnica, clara e quase industrial que privilegia dados, diagramas e materiais de oficina. A história é organizada como um dossiê de projeto de alto desempenho.

**Probability:** 0.09

---

## Direção escolhida: Arquivo de Pista

### Design Movement
**Racing editorial contemporâneo**, inspirado em pôsteres de endurance, sinalização de paddock e projetos gráficos de revistas automotivas de alta tiragem. A referência é um ponto de partida de conteúdo; a nova experiência amplia a narrativa com mais ritmo, hierarquia e interação útil.

### Core Principles

1. **Ritmo em marcha:** títulos grandes, números de corrida e progressões lineares fazem a página parecer uma viagem contínua, não uma coleção de blocos.
2. **Matéria antes do ornamento:** metal escovado, grão fotográfico, linhas de medição e luz direcional substituem efeitos genéricos.
3. **Dados com intenção editorial:** especificações aparecem como evidência do caráter de cada carro, com leitura rápida e contexto humano.
4. **Contraste disciplinado:** fundos carvão e aço recebem texto claro; o vermelho sinaliza velocidade, estado ativo e chamadas de ação.

### Color Philosophy
O **carvão profundo** ancora a página como asfalto noturno e cria uma base séria para imagens automobilísticas. O **off-white quente** evita a frieza de interfaces monocromáticas e remete a papel editorial. O vermelho proprietário funciona como pulso visual e nunca como preenchimento decorativo; ele marca passagem, performance e foco.

### Layout Paradigm
Em vez de uma grade centralizada repetitiva, a página usa uma **linha de corrida assimétrica**: uma régua vertical de progresso nas laterais, títulos que atravessam a tela e painéis de conteúdo que mudam de posição como curvas. Em desktop, conteúdo e imagens se deslocam entre margens; em mobile, a linha se torna um trilho de leitura horizontal no topo de cada capítulo.

### Signature Elements

1. **Marcadores de quilometragem:** números como `01/05`, anos e distâncias fictícias de capítulo aparecem junto a linhas finas.
2. **Três barras:** um motivo gráfico de três traços verticais homenageia as lanternas do Mustang em detalhes, divisores e botões.
3. **Cartão de telemetria:** fichas compactas com dados de motor, potência e foco de condução estruturam a linha atual.

### Interaction Philosophy
Toda interação deve parecer um comando preciso: seleção de gerações troca a evidência visual e os dados; a navegação acompanha o capítulo ativo; links de âncora encurtam a viagem sem quebrar o fluxo. Estados de hover usam deslocamento mínimo, sublinhado de trilho e alteração de contraste, sem efeitos chamativos.

### Animation
Entradas de capítulos sobem discretamente 14px com opacidade e atraso progressivo de 50–80ms. O trilho de navegação progride com transição de cor e escala; imagens revelam apenas por máscara suave. A duração padrão é **180–260ms**, com curvas `cubic-bezier(0.23, 1, 0.32, 1)`. Para usuários com redução de movimento, toda animação não essencial fica desativada.

### Typography System
**Archivo Black** é usado em títulos e números de impacto por sua presença compacta, de pôster. **Barlow Condensed** sustenta rótulos, anos e dados técnicos em caixa alta. **Manrope** compõe os textos corridos com legibilidade contemporânea. Títulos usam escala extrema, espaçamento de letras apertado e quebras deliberadas; corpo permanece arejado e limitado em largura de leitura.

### Brand Essence
**Uma crônica visual do Mustang para entusiastas que tratam design e desempenho como memória em movimento.** Personalidade: **precisa, visceral, culta**.

### Brand Voice
As manchetes devem soar como legendas de corrida e não como publicidade. CTAs são verbos de movimento e microcopy explica a próxima descoberta com precisão.

> “A silhueta mudou. A intenção continua acelerando.”

> “Entre na curva que redefiniu o pony car.”

### Wordmark & Logo
Um monograma geométrico **AC** comprimido, com três cortes verticais no traço do “A”, transforma as lanternas traseiras em sinal gráfico. O wordmark usa Barlow Condensed em caixa alta, espaçado, acompanhado de uma pequena coordenada editorial `DET · 1964`.

### Signature Brand Color
**Signal Red — `#E0442E`**. Um vermelho seco, inspirado em pintura de competição, reservado para direção, seleção e potência.

### Especificação da referência
O site de referência apresenta uma landing page escura, centrada na história do Ford Mustang, dividida em origem, linhagem, DNA e linha atual. A implementação proposta preserva essa narrativa e inclui uma navegação mais clara, uma progressão visual mais marcada, seleção interativa da linhagem, especificações organizadas e melhor adaptação para telas pequenas.
