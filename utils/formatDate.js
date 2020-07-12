const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatDate(iso) {
  const [year, month, day] = iso.split('-');
  return `${Number(day)} ${monthNames[Number(month) - 1]} ${year}`;
}
