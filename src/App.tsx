import VideoList from './components/VideoList/VideoList';
import data from './data/data.json';

export default function App() {

  return <VideoList list={data} />;
}
