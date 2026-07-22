"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function Page() {
  const botLink = "https://t.me/oddsaltascabreloa_bot?start=6a5fd9482a4a5ab7410ca85a";

  const handleLeadClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Grupo Odds Altas Cabreloa",
        content_category: "Bingo Blindado"
      });
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col hero-bg">
      {/* Overlay: fade vertical no mobile, fade horizontal no desktop */}
      <div className="flex-1 w-full flex flex-col hero-overlay">
        {/* Container principal — coluna no mobile, linha no desktop */}
        <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center px-6 md:px-12">
          {/* Mobile: espaçador que empurra o texto pra baixo pra dar espaço pro mago */}
          <div className="flex-1 min-h-[36vh] md:hidden" />

          {/* Bloco de texto — centralizado no mobile, esquerda no desktop */}
          <div className="w-full md:max-w-xl flex flex-col items-center md:items-start text-center md:text-left gap-5 sm:gap-6 pb-10 md:pb-0 md:py-16">
            {/* Chip topo */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/15 border border-brand-neon/50 text-brand-neon text-[11px] sm:text-xs font-bold uppercase tracking-widest">
              Grupo Gratuito
            </div>

            {/* Título ACESSO LIBERADO */}
            <h1
              className="leading-[0.85] tracking-tight"
              style={{ fontFamily: "var(--font-anton), Anton, Impact, sans-serif" }}
            >
              <span className="block text-7xl sm:text-8xl md:text-9xl text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Acesso
              </span>
              <span className="block text-8xl sm:text-9xl md:text-[10rem] text-brand-neon uppercase drop-shadow-[0_2px_20px_rgba(180,94,255,0.55)]">
                Liberado
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide max-w-md leading-tight">
              Entre no <span className="text-brand-neon">grupo de odds altas</span> do
              Cabreloa
            </p>

            {/* Botão CTA */}
            <a
              href={botLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLeadClick}
              className="shine-cta pulse-cta group mt-2 w-full max-w-md inline-flex items-center justify-center gap-2 py-5 px-6 rounded-full bg-brand-neon text-white font-black text-lg sm:text-xl uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition"
            >
              <span>Quero entrar agora</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>

            {/* Micro texto abaixo do CTA */}
            <p className="text-[11px] sm:text-xs text-white/60 mt-1 max-w-md">
              Bingo blindado de estreia liberado dentro do grupo
            </p>
          </div>

          {/* Desktop: espaço vazio à direita reservado pro mago aparecer no bg */}
          <div className="hidden md:block flex-1" />
        </div>

        {/* Rodapé compliance */}
        <footer className="w-full bg-black/90 border-t border-brand-neon/20 px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-3">
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
