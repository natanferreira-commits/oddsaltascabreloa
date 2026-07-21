export default function Page() {
  const botLink = "https://t.me/+txgd2kz5u38xZjYx";

  return (
    <main className="min-h-screen w-full flex flex-col hero-bg">
      {/* Overlay escuro pra garantir legibilidade */}
      <div className="flex-1 w-full flex flex-col bg-gradient-to-b from-transparent via-black/40 to-black/95">
        {/* espaçador que empurra o conteúdo pra baixo, deixando o mago à mostra */}
        <div className="flex-1 min-h-[52vh] sm:min-h-[45vh]" />

        {/* Conteúdo */}
        <div className="w-full max-w-2xl mx-auto px-6 pb-8 sm:pb-12 flex flex-col items-center text-center gap-4 sm:gap-5">
          {/* Chip topo */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/40 text-brand-lime text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            Grupo Gratuito
          </div>

          {/* Título ACESSO LIBERADO */}
          <h1
            className="font-display leading-[0.9] tracking-tight"
            style={{ fontFamily: "Anton, Impact, sans-serif" }}
          >
            <span className="block text-4xl sm:text-6xl text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Acesso
            </span>
            <span className="block text-5xl sm:text-7xl text-brand-lime uppercase drop-shadow-[0_2px_16px_rgba(192,255,0,0.4)]">
              Liberado
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-white text-base sm:text-xl font-bold uppercase tracking-wide max-w-md leading-tight">
            Entre no <span className="text-brand-lime">grupo de odds altas</span> do
            Cabreloa
          </p>

          {/* Botão CTA */}
          <a
            href={botLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta group mt-2 w-full max-w-md inline-flex items-center justify-center gap-2 py-5 px-6 rounded-full bg-brand-lime text-black font-black text-lg sm:text-xl uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition"
          >
            Quero entrar agora
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>

          {/* Micro texto abaixo do CTA */}
          <p className="text-[11px] sm:text-xs text-white/60 mt-1 max-w-md">
            Bingo blindado de estreia liberado dentro do grupo
          </p>
        </div>

        {/* Rodapé compliance */}
        <footer className="w-full bg-black/90 border-t border-brand-purple/20 px-6 py-6">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start gap-3">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/40 text-white/70 text-[10px] font-black">
              +18
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed">
              Conteúdo destinado a maiores de 18 anos. Aposta com responsabilidade.
              Apostas são uma forma de entretenimento e envolvem risco. Aposte apenas
              o valor que você está disposto a perder. Odds altas representam maior
              risco. Resultados passados não garantem resultados futuros. Este
              conteúdo não promete ganhos ou retornos. Ministério da Fazenda adverte:
              aposta não é investimento.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
