import json from './json/data.json';
import Carousel from './components/Carousel';

function App() {
  return <Carousel images={json} />;
}

export default App;
