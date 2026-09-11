// 기획안 최적버전을 페이지 없이 계산: node tools/optimize.js [index.html 경로] [도크 수]
// index.html 안의 배치 계산 코드(geo 등)를 그대로 가져와 같은 조건으로 탐색한다.
const fs = require('fs'), path = require('path');
const file = process.argv[2] || path.join(process.env.HOME, 'care-yard-parking/index.html');
const n = +(process.argv[3] || 30);
const src = fs.readFileSync(file, 'utf8');
const code = src.slice(src.indexOf('const B=3'), src.indexOf('// ── 그래픽'));
eval(code + `
let best = null;
for (const m of [1, 2, 3]) for (let k = 1; k <= 9; k++) for (let ex = 0; ex <= 40; ex += 2) {
  const T = {veh:'pv5', m, share:false, n:${n}, R:6.5, gap:+(4 + VEH.pv5.bw - VEH.pv5.W).toFixed(2), yr:+(k * .05).toFixed(2), ex};
  const G = geo(T);
  if (G.yard >= Math.max(3000, ${n} * 25) && (!best || G.area < best.G.area)) best = {T, G};
}
const c = coreDist(best.G);
console.log('조건', best.T);
console.log('부지', Math.round(best.G.area) + '㎡', best.G.W.toFixed(1) + ' × ' + best.G.PB.toFixed(1) + ' m');
console.log('공원', Math.round(best.G.yard) + '㎡', '가장 먼 차 → 코어', Math.round(c.max) + ' m');
`);
