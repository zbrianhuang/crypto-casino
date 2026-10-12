import PlayingCard from "./PlayingCard";

const CARD_W = 120;
const CARD_H = CARD_W * 1.5;
const OVERLAP = CARD_W * 0.45;

export default function BlackjackTable() {
  return (
    <div className="min-h-screen bg-neutral-950 p-4 sm:p-8 flex items-center justify-center">
      {/* Felt */}
      <div
        className="relative w-full max-w-5xl min-h-[44rem] rounded-[2.5rem] border-[10px] border-amber-900 shadow-[0_0_0_2px_rgba(0,0,0,0.6),inset_0_0_80px_rgba(0,0,0,0.55)] flex flex-col justify-between px-10 py-8 text-white"
        style={{ background: "radial-gradient(ellipse at center, rgb(0,110,60) 0%, rgb(0,81,44) 55%, rgb(0,52,28) 100%)" }}
      >
        {/* Dealer + deck */}
        <div className="relative flex justify-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Dealer</span>
            <div className="flex items-center justify-center" style={{ height: CARD_H, minWidth: CARD_W * 2 }}>
              {/* dealerHand.map((c, i) => (
                <div key={i} style={{ marginLeft: i ? -OVERLAP : 0 }}>
                  <PlayingCard {...c} width={CARD_W} />
                </div>
              )) */}
            </div>
          </div>

          {/* Deck, top right */}
          <div className="absolute right-0 top-0 flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Deck</span>
            <div
              className="rounded-2xl border border-white/20 bg-gradient-to-br from-red-900 to-red-950 shadow-xl"
              style={{ width: CARD_W, height: CARD_H }}
            />
          </div>
        </div>

        {/* Insurance arc */}
        <div className="flex justify-center">
          <div className="w-[26rem] h-44 rounded-b-full border-4 border-t-0 border-yellow-400/80 bg-yellow-400/10 flex items-start justify-center pt-5">
            <div className="text-center leading-tight">
              <div className="text-lg font-bold uppercase tracking-[0.35em] text-yellow-300">Insurance</div>
              <div className="text-[0.65rem] uppercase tracking-widest text-yellow-300/70">Pays 2 to 1</div>
            </div>
          </div>
        </div>

        {/* Player */}
        <div className="relative flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center" style={{ height: CARD_H, minWidth: CARD_W * 2 }}>
              <PlayingCard suit="Spade" value="10" color="Black" scale="0.35" />
              {/* userHand.map((c, i) => (
                <div key={i} style={{ marginLeft: i ? -OVERLAP : 0 }}>
                  <PlayingCard {...c} width={CARD_W} />
                </div>
              )) */}
            </div>
            <div className="rounded-full bg-black/50 px-5 py-1 text-xl font-bold tabular-nums ring-1 ring-white/20">
              0
            </div>
          </div>

          {/* Betting circle, to the right of the hand */}
          <div className="absolute right-[18%] top-1/2 -translate-y-1/2 flex h-24 w-24 items-center justify-center rounded-full border-4 border-yellow-400/70 text-[0.65rem] font-semibold uppercase tracking-widest text-yellow-300/80">
            Bet
          </div>
        </div>
      </div>
    </div>
  );
}
