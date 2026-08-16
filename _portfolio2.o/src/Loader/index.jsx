import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);

  const commands = [
    "sudo init vikas-portfolio",
    "Loading developer profile",
    "Initializing React environment",
    "Loading projects",
    "Loading experience",
    "Loading skills",
    "Compiling portfolio",
    "Starting development server",
  ];

  useEffect(() => {
    if (current >= commands.length) {
      setTimeout(() => {
        setReady(true);
      }, 700);

      return;
    }

    const timeout = setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, current === 0 ? 700 : 550);

    return () => clearTimeout(timeout);
  }, [current]);

  useEffect(() => {
    if (!ready) return;

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ready, onComplete]);

  const progress = Math.min(
    Math.round((current / commands.length) * 100),
    100
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#05070a] text-gray-300 font-mono">

      {/* Ambient glow */}
      <div className="absolute top-3.5 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(#64748b 1px, transparent 1px),
            linear-gradient(90deg, #64748b 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Main terminal */}
      <div className="relative flex h-full w-full flex-col">

        {/* Top bar */}
        <header className="flex h-12 shrink-0 items-center border-b border-[#1f2937] bg-[#0b0f14] px-5">

          {/* <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_8px_rgba(255,95,87,0.5)]" />

            <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.4)]" />

            <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_8px_rgba(40,200,64,0.4)]" />

          </div> */}

          <div className="absolute left-1/2 -translate-x-1/2 text-lg text-gray-500">
            vikas@portfolio — zsh
          </div>

          <div className="ml-auto text-[10px] text-gray-600">
            PORTFOLIO OS
          </div>

        </header>

        {/* Terminal content */}
        <main className="flex flex-1 flex-col justify-center px-6 sm:px-12 lg:px-24">

          {/* Intro */}
          <div className="mb-2 max-w-4xl">

            <div className="mb-2 text-xs tracking-[0.3em] text-blue-500">
              SYSTEM INITIALIZATION
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              VIKAS
              <span className="text-blue-500">.</span>
              DEV
            </h1>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Full Stack Developer · React · Node.js
            </p>

          </div>

          {/* Terminal */}
          <div className="max-w-4xl">

            {/* Prompt */}
            <div className="mb-2 flex flex-wrap items-center text-sm sm:text-base">

              <span className="text-green-400">
                vikas
              </span>

              <span className="text-gray-600">
                @
              </span>

              <span className="text-blue-400">
                portfolio
              </span>

              <span className="text-gray-600">
                :
              </span>

              <span className="text-purple-400">
                ~
              </span>

              <span className="mx-2 text-gray-600">
                $
              </span>

              <span className="text-gray-200">
                ./start-portfolio.sh
              </span>

            </div>

            {/* Commands */}
            <div className="space-y-3 text-sm sm:text-base">

              {commands.map((command, index) => {

                const completed = index < current;
                const active = index === current;

                if (index > current) return null;

                return (
                  <div
                    key={command}
                    className="flex items-center gap-3"
                  >

                    {/* Status */}
                    <span
                      className={
                        completed
                          ? "text-green-400"
                          : "text-blue-400"
                      }
                    >
                      {completed ? "✓" : ">"}
                    </span>

                    {/* Command */}
                    <span
                      className={
                        completed
                          ? "text-gray-500"
                          : "text-gray-200"
                      }
                    >
                      {command}
                      {active && (
                        <span className="ml-1 animate-pulse text-blue-400">
                          ...
                        </span>
                      )}
                    </span>

                    {completed && (
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-green-500/60">
                        done
                      </span>
                    )}

                  </div>
                );
              })}

            </div>

            {/* Progress */}
            <div className="mt-10 max-w-xl">

              <div className="mb-2 flex justify-between text-[10px] tracking-widest text-gray-600">
                <span>
                  BUILDING WORKSPACE
                </span>

                <span>
                  {progress}%
                </span>
              </div>

              <div className="h-[2px] overflow-hidden bg-[#1f2937]">

                <div
                  className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            {/* Ready */}
            {ready && (
              <div className="mt-10">

                <div className="mb-4 flex items-center gap-3 text-green-400">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_#22c55e]" />

                  <span>
                    SYSTEM READY
                  </span>

                </div>

                <button
                  onClick={onComplete}
                  className="group flex items-center gap-3 border border-[#374151] bg-[#111827] px-5 py-3 text-sm text-gray-300 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
                >

                  <span className="text-gray-500 group-hover:text-blue-400">
                    [
                  </span>

                  <span>
                    PRESS ENTER TO START
                  </span>

                  <span className="animate-pulse text-blue-400">
                    _
                  </span>

                  <span className="text-gray-500 group-hover:text-blue-400">
                    ]
                  </span>

                </button>

              </div>
            )}

          </div>

        </main>

        {/* Bottom status bar */}
        <footer className="flex h-8 shrink-0 items-center border-t border-[#1f2937] bg-[#0b0f14] px-5 text-[10px] text-gray-600">

          <span className="text-green-500">
            ●
          </span>

          <span className="ml-2">
            ONLINE
          </span>

          <span className="ml-6">
            UTF-8
          </span>

          <span className="ml-6">
            LF
          </span>

          <span className="ml-auto">
            VIKAS CODE v1.0.0
          </span>

        </footer>

      </div>
    </div>
  );
};

export default LoadingScreen;