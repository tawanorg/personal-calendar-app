import XDate from 'xdate';
 
export const formatDate = (newDate) => {
  var d = new XDate(newDate);
  return d.toString("MMM dS, yyyy"); // "Jun 8th, 2012"
}

export const formatDay = (newDate) => {
  var d = new XDate(newDate);
  return d.toString("dddd dS, yyyy"); // "Sunday 8th, 2012"
}