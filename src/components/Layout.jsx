export default function Layout({ children }) {
  return (
    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        bg-gradient-to-b
        from-gray-950
        via-gray-900
        to-gray-950
        text-white
      "
    >
      {/* Glow global sutil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
