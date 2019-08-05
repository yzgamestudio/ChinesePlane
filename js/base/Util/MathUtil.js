export class MathUtil {
    static  radFromAngle(angle) {
        let  rad = angle * Math.PI / 180;
        return rad;
    }

    static angleFromRad(rad) {
        let angle = rad * 180 / Math.PI;
		return angle;
    }

    static computeXWithAngleAndY(angle, y) {
        let rad = this.radFromAngle(angle);
        return y / Math.tan(rad);
    }

    static computeYWithAngleAndX(angle, x) {
        let rad = this.radFromAngle(angle);
		return Math.tan(rad) * x;
    }

    // 给出模和角度算出偏移
    static computeXYWithAngleAndMod(angle, mod) {
        // debugger;
        let rad = this.radFromAngle(angle);
        let y = Math.sin(rad) * mod;
        let x = Math.cos(rad) * mod;
        return [x,y];
    }

    /**
     * 已知目标向量的(x,y)
     * @param x 向量x方向投影值
     * @param y 向量y方向投影值
     * @return angle x正方向与向量方向夹角，夹角范围是0~360
     */
	static computeAngleWithXAndY(x,y){
		let rad = Math.atan2(y, x); // (-PI, PI);
		let angle = this.angleFromRad(rad);  (-180,+180);
		if(angle < 0){ 
			angle += 360; //----> 【0, 360）
		}
		return angle; 
	}
}