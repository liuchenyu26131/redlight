export function Cover() {
  return (
    <section
      className="ra-cover"
      aria-label="文章封面"
      data-ra-cover=""
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "min(100%, 44rem, calc((100vh - 8rem) * 3 / 4))",
        margin: "0 auto var(--ra-space-7, 3rem) auto",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        background: "var(--ra-color-bg)",
        color: "var(--ra-color-text)",
        border: "1px solid var(--ra-color-border)",
        isolation: "isolate",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--ra-color-border) 1px, transparent 1px), linear-gradient(90deg, var(--ra-color-border) 1px, transparent 1px)",
          backgroundSize: "12.5% 12.5%",
          opacity: 0.45,
        }}
      />
      <div style={{ position: "absolute", inset: 0, padding: "var(--ra-space-7) var(--ra-space-6)", display: "grid", alignContent: "space-between" }}>
        <div>
          <p style={{ margin: 0, fontFamily: "var(--ra-font-mono)", fontSize: "var(--ra-text-xs)", letterSpacing: "var(--ra-tracking-caps)", color: "var(--ra-color-accent)" }}>
            RED LIGHT DEVICE SELECTOR
          </p>
          <div style={{ height: "6px", background: "var(--ra-color-accent)", marginTop: "var(--ra-space-3)" }} />
        </div>

        <div>
          <p style={{ margin: 0, fontFamily: "var(--ra-font-mono)", fontSize: "var(--ra-text-sm)", color: "var(--ra-color-muted)" }}>LOCAL / DEEP / FACE</p>
          <h1 style={{ margin: "var(--ra-space-2) 0 0", fontSize: "clamp(2rem, 7vw, var(--ra-text-4xl))", lineHeight: 0.95, letterSpacing: "var(--ra-tracking-tighter)" }}>
            大红光
            <br />
            <span style={{ color: "var(--ra-color-accent)" }}>还是</span>
            <br />
            能量毯？
          </h1>
          <p style={{ margin: "var(--ra-space-4) 0 0", color: "var(--ra-color-muted)", fontSize: "var(--ra-text-sm)", maxWidth: "24em" }}>
            只看使用方式和核心需求，不看冗长参数。3个问题得到推荐结果。
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--ra-color-heading)", paddingTop: "var(--ra-space-3)", display: "flex", justifyContent: "space-between", gap: "var(--ra-space-3)", fontFamily: "var(--ra-font-mono)", fontSize: "var(--ra-text-xs)" }}>
          <span>局部 · 深层 · 专业调参</span>
          <span>全身 · 贴合 · 便携</span>
        </div>
      </div>
    </section>
  );
}