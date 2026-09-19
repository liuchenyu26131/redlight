import { media } from "./media";

export function Cover() {
  return (
    <section
      className="ra-cover"
      aria-label="文章封面"
      data-ra-cover=""
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "min(100%, 48rem, calc((100vh - 8rem) * 3 / 4))",
        margin: "0 auto var(--ra-space-7, 3rem) auto",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        background: "var(--ra-color-bg)",
        color: "var(--ra-color-fg, var(--ra-color-text))",
        border: "1px solid var(--ra-color-border)",
        isolation: "isolate",
      }}
    >
      <img
        src={media.lampProduct}
        alt="ILUXRED 1500W 红光理疗灯"
        style={{ position: "absolute", inset: "0 0 58% 0", width: "100%", height: "42%", objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute",
          inset: "42% 0 34% 0",
          zIndex: 2,
          display: "grid",
          alignContent: "center",
          gap: "var(--ra-space-2)",
          padding: "var(--ra-space-4)",
          background: "var(--ra-color-bg)",
          borderTop: "4px solid var(--ra-color-accent)",
          borderBottom: "2px solid var(--ra-color-heading)",
        }}
      >
        <span style={{ fontFamily: "var(--ra-font-mono)", fontSize: "var(--ra-text-xs)", letterSpacing: "var(--ra-tracking-caps)", color: "var(--ra-color-accent)", fontWeight: "var(--ra-weight-bold)" }}>
          PRODUCT COMPARISON
        </span>
        <h1 style={{ margin: 0, fontSize: "clamp(1.7rem, 5.2vw, var(--ra-text-4xl))", lineHeight: 0.98, letterSpacing: "var(--ra-tracking-tighter)" }}>
          ILUXRED 1500W
          <br />VS 红光能量毯
        </h1>
        <p style={{ margin: 0, color: "var(--ra-color-muted)", fontSize: "var(--ra-text-sm)" }}>
          7波长12模式 · 局部深层靶向 / 三波长贴合 · 全身颈部护理
        </p>
      </div>
      <img
        src={media.blanketHero}
        alt="红光能量毯"
        style={{ position: "absolute", inset: "66% 0 0 0", width: "100%", height: "34%", objectFit: "cover", objectPosition: "center" }}
      />
    </section>
  );
}