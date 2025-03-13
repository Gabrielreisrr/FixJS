
class Vec {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    plus(otherVec) {
        return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }


    minus(otherVec) {
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }


    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}


const vec1 = new Vec(3, 4);
const vec2 = new Vec(1, 2);


const vecSum = vec1.plus(vec2);
console.log(`Soma de vetores: (${vecSum.x}, ${vecSum.y})`);

const vecDifference = vec1.minus(vec2);
console.log(`Diferença de vetores: (${vecDifference.x}, ${vecDifference.y})`);

console.log(`Comprimento do vetor 1: ${vec1.length}`);

console.log(`Comprimento do vetor 2: ${vec2.length}`);