//custom hook that takes in a date and determines how many minutes have gone by and returns t/f if it's more than 4 days
const useCheckDate = (date) => {
  let currentDate = new Date();
  let previousDate = new Date(date);

  let minutesSinceLastInteraction = Math.round(
    (currentDate - previousDate) / 1000 / 60
  );

  return minutesSinceLastInteraction > 5760 ? true : false;
};

export default useCheckDate;
