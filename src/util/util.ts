export const conversionDate = (date: string) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const commentDate = new Date(date);
  const year = commentDate.getFullYear();
  const month = commentDate.getMonth();

  return `${monthNames[month]} ${year}`;
};
