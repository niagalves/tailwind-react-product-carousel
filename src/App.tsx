import { useEffect, useState } from 'react';
import json from './json/data.json';
import Carousel from './components/Carousel';

function App() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    function populateImages(): void {
      setImages(json);
    }

    populateImages();
  }, [images]);

  return (
    <section>
      <Carousel images={images} />
    </section>
  );
}

export default App;
