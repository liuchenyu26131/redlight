type PairItem = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  wide?: boolean;
};

export function ProductImagePair({ items }: { items: [PairItem, PairItem] }) {
  return (
    <div className="iluxred-pair__grid">
      {items.map((item) => (
        <figure className="iluxred-pair__item" key={item.src}>
          <img className={`iluxred-pair__image${item.wide ? " iluxred-pair__image--wide" : ""}`} src={item.src} alt={item.alt} loading="lazy" />
          <figcaption>
            <span className="iluxred-product__label">{item.label}</span>
            <span> {item.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}