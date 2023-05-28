import { useEffect, useState } from 'react';
import S from './styles.module.css';

type Props = {
  images: Image[];
};

function Carousel({ images }: Props) {
  const [preview, setPreview] = useState<Image | null>(null);

  useEffect(() => {
    function setInitialPreview(): void {
      if (!images) return;

      setPreview(images[0]);
    }

    setInitialPreview();
  }, [images]);

  return images.length ? (
    <div className={S.carousel}>
      {preview ? (
        <div className={S.carousel__background}>
          <figure className={S.carousel__figure} title={preview.title}>
            <img
              src={preview.url}
              className={S.carousel__figure__img}
              alt={preview.title}
            />
          </figure>
        </div>
      ) : null}
      <ul className={S.carousel__list}>
        {images.map((item, i) => (
          <li key={i}>
            <figure className={S.carousel__list__figure} title={item.title}>
              <img
                src={item.url}
                className={S.carousel__list__figure__img}
                alt={item.title}
                onClick={() => setPreview(item)}
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default Carousel;
