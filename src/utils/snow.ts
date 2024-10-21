let _id = 1;
/**
 * 雪花id生成器
 */
export function snowflake() {
  const time = new Date().getTime();
  const random = Math.floor(Math.random() * 1000000000);
  const id = time + random + _id;
  _id++;
  return id;
}
