import './dateTime.css';

interface IDateTimeProps {
  date: string;
}

const DateTime = ({ date }: IDateTimeProps) => {
  return <p className="date">{date}</p>;
};

export default DateTime;
