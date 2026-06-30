import { useState, useEffect } from "react";
import { RefreshCw, Gamepad2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/common/ScrollReveal";

const games = [
  { file: "flappy-bird.html", name: "Flappy Bird", emoji: "bird" },
  { file: "pinball.html", name: "Pinball", emoji: "pinball" },
  { file: "runner.html", name: "Runner", emoji: "runner" },
  { file: "speed-tap.html", name: "Speed Tap", emoji: "tap" },
  { file: "survive.html", name: "Survive", emoji: "survive" },
  { file: "tile-master.html", name: "Tile Master", emoji: "tile" },
];

function getRandomGame(exclude?: string) {
  const pool = exclude ? games.filter((g) => g.file !== exclude) : games;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function Review() {
  const [currentGame, setCurrentGame] = useState(games[0]);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    setCurrentGame(getRandomGame());
  }, []);

  const handleShuffle = () => {
    const next = getRandomGame(currentGame.file);
    setCurrentGame(next);
    setIframeKey((k) => k + 1);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <Gamepad2 className="h-4 w-4 text-accent-400" />
            <span className="text-sm font-medium text-white">Game Arcade</span>
          </div>
          <h1 className="text-display-md text-white mb-4">
            Play & <span className="text-gradient-light">Review</span>
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            A random game appears every time you visit. Play, enjoy, and share your feedback!
          </p>
        </div>
      </section>

      {/* Game Display */}
      <section className="py-12 bg-cloud">
        <div className="container">
          <ScrollReveal>
            {/* Game header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient shadow-glow">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-brand-700">
                    {currentGame.name}
                  </h2>
                  <p className="text-sm text-ink-muted">Now Playing</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShuffle}
                  className="btn-primary"
                >
                  <RefreshCw className="h-4 w-4" />
                  Shuffle Game
                </button>
                <a
                  href={`/games/${currentGame.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink className="h-4 w-4" />
                  Fullscreen
                </a>
              </div>
            </div>

            {/* Game iframe */}
            <div className="rounded-2xl overflow-hidden shadow-card bg-brand-700">
              <div className="flex items-center gap-2 px-4 py-3 bg-brand-800">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-sm text-brand-200 ml-2">{currentGame.name} — VSCommission Arcade</span>
              </div>
              <iframe
                key={iframeKey}
                src={`/games/${currentGame.file}`}
                title={currentGame.name}
                className="w-full"
                style={{ height: "70vh", minHeight: "500px", border: "none" }}
                allow="fullscreen; autoplay; gamepad"
              />
            </div>
          </ScrollReveal>

          {/* Game grid */}
          <ScrollReveal delay={200}>
            <div className="mt-12">
              <h3 className="text-xl font-display font-bold text-brand-700 text-center mb-6">
                All 6 Games
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {games.map((game) => (
                  <button
                    key={game.file}
                    onClick={() => {
                      setCurrentGame(game);
                      setIframeKey((k) => k + 1);
                      window.scrollTo({ top: 200, behavior: "smooth" });
                    }}
                    className={`group rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 ${
                      currentGame.file === game.file
                        ? "bg-accent-500 text-white shadow-glow"
                        : "bg-white text-brand-700 shadow-soft hover:shadow-card"
                    }`}
                  >
                    <div className="text-2xl mb-2">🎮</div>
                    <div className="text-sm font-semibold">{game.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container text-center max-w-2xl">
          <h2 className="text-display-md text-brand-700 mb-4">
            Back to <span className="text-gradient">Business</span>
          </h2>
          <p className="text-lg text-ink-soft mb-8">
            Enjoyed the game? Explore how VSCommission can grow your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary">Back to Home</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
