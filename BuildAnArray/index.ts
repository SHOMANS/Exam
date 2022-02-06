class myArray {
  data = {};
  length = 0;
  constructor(data?: any, length?: number) {
    this.data = data;
    this.length = length;
  }
  Shift() {
    for (let i = 0; i <= this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  UnShift(item: any) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    return this.length;
  }

  pop() {
    delete this.data[this.length];
  }

  push(item: any) {
    // console.log(this.data, this.length);
    this.length += 1;
    this.data[this.length] = item;
    return this.length;
  }

  insert(item: any, index: number) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
  }
}

const arr = new myArray({ 1: "1" }, 1);

arr.push(1);

console.log("length", arr.length);
console.log("data", arr.data);
console.log("arr", arr);

arr.pop();

console.log("length", arr.length);
console.log("data", arr.data);
console.log("arr", arr);
