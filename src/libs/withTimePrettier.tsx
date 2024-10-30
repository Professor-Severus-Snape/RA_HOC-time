import { ComponentType } from 'react';

const getMinutes = (minute: number) => {
  if (minute % 10 === 1 && minute !== 11) {
    return `${minute} минута назад`;
  } else if (
    (minute % 10 === 2 || minute % 10 === 3 || minute % 10 === 4) &&
    Math.round(minute / 10) !== 1
  ) {
    return `${minute} минуты назад`;
  }
  return `${minute} минут назад`;
};

const getHours = (hour: number) => {
  if (hour === 1 || hour === 21) {
    return `${hour} час назад`;
  } else if (
    hour === 2 ||
    hour === 3 ||
    hour === 4 ||
    hour === 22 ||
    hour === 23
  ) {
    return `${hour} часа назад`;
  }
  return `${hour} часов назад`;
};

const getDays = (day: number) => {
  if (day % 10 === 1 && day !== 11) {
    return `${day} день назад`;
  } else if (
    (day % 10 === 2 || day % 10 === 3 || day % 10 === 4) &&
    Math.round(day / 10) !== 1
  ) {
    return `${day} дня назад`;
  }
  return `${day} дней назад`;
};

const getYears = (year: number) => {
  let checkYear = year;

  if (checkYear > 99) {
    checkYear = checkYear % 100;
  }

  if (checkYear % 10 === 1 && checkYear !== 11) {
    return `${year} год назад`;
  } else if (
    (checkYear % 10 === 2 || checkYear % 10 === 3 || checkYear % 10 === 4) &&
    Math.round(checkYear / 10) !== 1
  ) {
    return `${year} года назад`;
  }
  return `${year} лет назад`;
};

// преобразование даты в нужный формат:
const changeTimeView = (date: string) => {
  const now = new Date(); // Wed Oct 30 2024 21:12:23 GMT+0300 (Москва, стандартное время)
  const gotDate = new Date(date); // Wed Oct 30 2024 12:10:00 GMT+0300 (Москва, стандартное время)

  const dateDiff = Number(now) - Number(gotDate); // разница в милисекундах -> 32543897

  const years = Math.round(dateDiff / (365.25 * 24 * 60 * 60 * 1000)); // разница в годах
  const days = Math.round(dateDiff / (24 * 60 * 60 * 1000)); // разница в днях
  const hours = Math.round(dateDiff / (60 * 60 * 1000)); // разница в часах
  const minutes = Math.round(dateDiff / (60 * 1000)); // разница в минутах

  if (hours < 1) {
    return getMinutes(minutes);
  } else if (hours < 24) {
    return getHours(hours);
  } else if (years < 1) {
    return getDays(days);
  }
  return getYears(years);
};

const withTimePrettier = (Component: ComponentType<{ date: string }>) => {
  return ({ date }: { date: string }) => {
    const newTime = changeTimeView(date);
    return <Component date={newTime} />;
  };
};

export default withTimePrettier;
