import { Article, Raw } from "reacticle";
import { ZoomableImage } from "./ImageZoom";
import { navigateToView } from "./ViewTabs";

type DetailImage = {
  src: string;
  alt: string;
};

type StackedImageDetailProps = {
  eyebrow: string;
  title: string;
  images: DetailImage[];
};

export function StackedImageDetail({ eyebrow, title, images }: StackedImageDetailProps) {
  return (
    <Article width="wide">
      <Raw title="">
        <main className="iluxred-image-detail">
          <header className="iluxred-image-detail__header">
            <p>{eyebrow}</p>
            <h1>{title}</h1>
          </header>

          {images.map((image, index) => (
            <ZoomableImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              eager={index === 0}
              className="iluxred-image-detail__item"
            />
          ))}

          <button type="button" className="iluxred-image-detail__return" onClick={() => navigateToView("select")}>
            返回选购对比
          </button>
        </main>
      </Raw>
    </Article>
  );
}