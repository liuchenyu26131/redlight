import { Article, Raw } from "reacticle";
import { ZoomableImage } from "./ImageZoom";
import { navigateToView } from "./ViewTabs";
import { WavelengthDepthExplainer } from "./WavelengthDepthExplainer";

type DetailImage = {
  src: string;
  alt: string;
};

type DetailVideo = {
  src: string;
  poster?: string;
  title: string;
  aspectRatio?: string;
};

type StackedImageDetailProps = {
  eyebrow: string;
  title: string;
  images: DetailImage[];
  video?: DetailVideo;
};

export function StackedImageDetail({ eyebrow, title, images, video }: StackedImageDetailProps) {
  const firstImage = images[0];
  const remainingImages = images.slice(1);

  return (
    <Article width="wide">
      <Raw title="">
        <main className="iluxred-image-detail">
          <header className="iluxred-image-detail__header">
            <p>{eyebrow}</p>
            <h1>{title}</h1>
          </header>

          {firstImage ? (
            <ZoomableImage
              src={firstImage.src}
              alt={firstImage.alt}
              eager
              className="iluxred-image-detail__item"
            />
          ) : null}

          {video ? (
            <section className="iluxred-detail-video" aria-label={video.title}>
              <h2>{video.title}</h2>
              <video controls playsInline preload="metadata" poster={video.poster} style={video.aspectRatio ? { aspectRatio: video.aspectRatio } : undefined}>
                <source src={video.src} type="video/mp4" />
                当前浏览器不支持视频播放。
              </video>
            </section>
          ) : null}

          {remainingImages.map((image) => (
            <ZoomableImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="iluxred-image-detail__item"
            />
          ))}

          <WavelengthDepthExplainer variant="footer" />

          <button type="button" className="iluxred-image-detail__return" onClick={() => navigateToView("select")}>
            返回选购对比
          </button>
        </main>
      </Raw>
    </Article>
  );
}