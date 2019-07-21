export class RandomUtil {
  // 随机生成区间在min max之间的随机数
  static random(min, max) {
    let random = min + (max - min) * Math.random();
    return random;
  }

}