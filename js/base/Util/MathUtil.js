export class MathUtil {
    static  radFromAngle(angle) {
        let  rad = angle * Math.PI / 180;
        return rad;
    }

    static computeXWithAngleAndY(angle, y) {
        let rad = this.radFromAngle(angle);
        return y / rad;
    }

    static computeYWithAngleAndX(angle, x) {
        let rad = this.radFromAngle(angle);
        return  rad * x;
    }

    // 给出模和角度算出偏移
    static computeXYWithAngleAndMod(angle, mod) {
        debugger;
        let rad = this.radFromAngle(angle);
        let y = Math.sin(rad) * mod;
        let x = Math.cos(rad) * mod;
        return [x,y];
    }
}