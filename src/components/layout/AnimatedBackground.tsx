const AnimatedBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg transition-colors duration-300"
    >
      <div
        className="absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-70 animate-blob-drift"
        style={{ backgroundColor: "var(--bg-accent-1)" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-72 w-72 sm:h-[28rem] sm:w-[28rem] rounded-full blur-3xl opacity-70 animate-blob-drift-slow"
        style={{ backgroundColor: "var(--bg-accent-2)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-64 w-64 sm:h-80 sm:w-80 rounded-full blur-3xl opacity-50 animate-blob-drift"
        style={{ backgroundColor: "var(--bg-accent-1)", animationDelay: "4s" }}
      />
    </div>
  );
};

export default AnimatedBackground;