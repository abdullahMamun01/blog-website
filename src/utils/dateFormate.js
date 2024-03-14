const dateFormate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - date;
  
    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = millisecondsPerSecond * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;
    const millisecondsPerWeek = millisecondsPerDay * 7;
  
    if (differenceInMilliseconds < millisecondsPerMinute) {
      return "Just now";
    } else if (differenceInMilliseconds < millisecondsPerHour) {
      const minutes = Math.floor(
        differenceInMilliseconds / millisecondsPerMinute
      );
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (differenceInMilliseconds < millisecondsPerDay) {
      const hours = Math.floor(differenceInMilliseconds / millisecondsPerHour);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (differenceInMilliseconds < millisecondsPerWeek) {
      const days = Math.floor(differenceInMilliseconds / millisecondsPerDay);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else {
      // If more than a week has passed, return the date in a specific format
  
      return getDateFormate(date);
    }
  };
  
  export const getDateFormate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  
  export default dateFormate;