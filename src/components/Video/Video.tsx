// import DateTime from '../DateTime/DateTime';
import DateTimePretty from '../DateTimePretty/DateTimePretty';
import TVideo from '../models/TVideo';
import './video.css';

const Video = ({ url, date }: TVideo) => {
  return (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen />
      {/* <DateTime date={date} /> */}
      <DateTimePretty date={date} />
    </div>
  );
};

export default Video;
