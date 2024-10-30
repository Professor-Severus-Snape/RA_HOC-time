import DateTime from '../DateTime/DateTime';
import TVideo from '../models/TVideo';
import './video.css';

const Video = ({ url, date }: TVideo) => {
  return (
    <div className="video">
      <iframe
        src={url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTime date={date} />
    </div>
  );
};

export default Video;
