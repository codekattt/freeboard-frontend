export const getDate = (date: string) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = (_date.getMonth() + 1).toString().padStart(2, '0');
  const dd = _date.getDate().toString().padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export const getDateTime = (date: string) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = (_date.getMonth() + 1).toString().padStart(2, '0');
  const dd = _date.getDate().toString().padStart(2, '0');
  const hour = _date.getHours();
  const min = _date.getMinutes();
  return `${yyyy}-${mm}-${dd} | ${hour}시${min}분`;
};
