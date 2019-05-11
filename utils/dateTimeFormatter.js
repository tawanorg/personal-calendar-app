import XDate from 'xdate';
 
export const formatDate = (newDate) => {
  var d = new XDate(newDate);
  return d.toString("MMM dS, yyyy"); // "Jun 8th, 2012"
}