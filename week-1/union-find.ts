import { UnionFindBase } from "./union-find-base";

class UnionFind extends UnionFindBase {
  connected(p: number, q: number) {
    return this.ids[p] === this.ids[q]
  }

  union(p:number, q:number) {
    const pid = this.ids[p]
    const qid = this.ids[q]
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === pid) {
        this.ids[i] = qid
      }
    }
  }
}

const unionFind = new UnionFind(10)
console.log('are 1 and 4 connected?', unionFind.connected(1,4))
console.log('are 2 and 3 connected?', unionFind.connected(2,3))
unionFind.union(1,4)
unionFind.union(2,3)
unionFind.union(1,3)
console.log('are 1 and 4 connected?', unionFind.connected(1,4))
console.log('are 3 and 2 connected?', unionFind.connected(3,2))
