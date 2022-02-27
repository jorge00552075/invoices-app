function createUID() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let str = letters[Math.floor(Math.random() * letters.length)].concat(
    letters[Math.floor(Math.random() * letters.length)]
  );

  return str.concat(Math.floor(1000 + Math.random() * 9000));
}

export default createUID;
