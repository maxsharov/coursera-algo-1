export class UnionFindBase {
  ids: number[]

  constructor(n: number) {
    // @ts-ignore
    this.ids = [...Array(n).keys()]
    for (let i = 0; i < n; i++) {
      this.ids[i] = i
    }
  }
}