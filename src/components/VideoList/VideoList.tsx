import Video from '../Video/Video';
import TVideo from '../models/TVideo';

interface IVideoListProps {
  list: TVideo[];
}

const VideoList = ({ list }: IVideoListProps) => {
  return list.map((item) => (
    <Video key={item.id} url={item.url} date={item.date} />
  ));
};

export default VideoList;
