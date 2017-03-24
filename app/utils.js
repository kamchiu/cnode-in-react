const timeAgo = (date) => {
  const now = new Date();
  const timeStamp = now - new Date(date);

  const year = `${Math.floor(timeStamp / 1000 / 60 / 60 / 24 / 30 / 12)}年前`;
  const month = `${Math.floor(timeStamp / 1000 / 60 / 60 / 24 / 30)} + 个月前`;
  const day = `${Math.floor(timeStamp / 1000 / 60 / 60 / 24)}天前`;
  const hour = `${Math.floor(timeStamp / 1000 / 60 / 60)}小时前`;
  const min = `${Math.floor(timeStamp / 1000 / 60)}分钟前`;

  return [year, month, day, hour, min].filter(val => (
    parseInt(val, 10)
  ))[0];
};

export default timeAgo;
