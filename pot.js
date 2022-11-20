// A1: 野獸之爪 A2:巨獸之爪 A3: 惡魔之爪
// B1: 毒之粉 B2: 星之粉 B3: 暗之粉
// C1: 鐵錠 C2: 段鐵錠 C3:純源鐵錠
// D1: 史來姆殘液 D2: 高級合劑 D3: 彩虹合劑
// E1: 純淨水 E2:月光水 E3: 精靈露水
// 6: 獅鷲之喙
// 7: 熊皮
// 8: 儀式之油
// 9: 精緻尾羽
// 10: 蟲巢之絲

const mat = [
  // 潛1
  // 【野獸之爪x1，毒之粉x1】ATK2%，【野獸之爪x2，毒之粉x2】ATK2%，【鐵錠x2，史來姆殘液x2】HP3%，
  // 【鐵錠x2，史來姆殘液x2】HP3%，【鐵錠x2，史來姆殘液x2】HP3%，【鐵錠x1，史來姆殘液x1】HP3%
  {
    tier1: [
      { A1: 1, B1: 1 },
      { A1: 2, B1: 2 },
      { C1: 2, D1: 2 },
      { C1: 2, D1: 2 },
      { C1: 2, D1: 2 },
      { C1: 1, D1: 1 },
    ],
  },
  {
    // 潛2
    // 【野獸之爪x2，毒之粉x2】ATK2%，【野獸之爪x2，毒之粉x2】ATK2%，【鐵錠x2，史來姆殘液x2】HP3.5%，
    // 【鐵錠x3，史來姆殘液x3】HP3.5%，【鐵錠x2，史來姆殘液x2】HP3.5%，【鐵錠x3，史來姆殘液x3】HP3.5%
    tier1: [
      { A1: 2, B1: 2 },
      { A1: 2, B1: 2 },
      { C1: 2, D1: 2 },
      { C1: 3, D1: 3 },
      { C1: 2, D1: 2 },
      { C1: 3, D1: 3 },
    ],
  },
  {
    // 潛3
    // 【巨獸之爪x1，星之粉x1】ATK2%，【巨獸之爪x1，星之粉x1】ATK2%，【巨獸之爪x1，星之粉x1】ATK2%，
    // 【巨獸之爪x1，星之粉x1】ATK2%，【段鐵錠x2，高級合劑x2】HP3.5%，【段鐵錠x2，高級合劑x2】HP3.5%
    tier1: [
      { A1: 6, B1: 6 },
      { A1: 6, B1: 6 },
      { A1: 6, B1: 6 },
      { A1: 6, B1: 6 },
      { C1: 12, D1: 12 },
      { C1: 12, D1: 12 },
    ],
    tier2: [
      { A2: 1, B2: 1 },
      { A2: 1, B2: 1 },
      { A2: 1, B2: 1 },
      { A2: 1, B2: 1 },
      { C2: 2, D2: 2 },
      { C2: 2, D2: 2 },
    ],
  },

  //潛4
  // 【巨獸之爪x2，星之粉x2】ATK2%，【巨獸之爪x1，星之粉x1】ATK2%，【巨獸之爪x1，星之粉x1】ATK2%，
  // 【段鐵錠x3，高級合劑x3】HP3.5%，【段鐵錠x3，高級合劑x3】HP3.5%，【段鐵錠x3，高級合劑x3】HP3.5%
  {
    tier1: [
      { A1: 12, B1: 12 },
      { A1: 6, B1: 6 },
      { A1: 6, B1: 6 },
      { C1: 18, D1: 18 },
      { C1: 18, D1: 18 },
      { C1: 18, D1: 18 },
    ],
  },
  // 潛5
  // 【惡魔之爪x1，暗之粉x1】ATK2%，【巨獸之爪x1，星之粉x1】ATK2%，【巨獸之爪x2，星之粉x2】ATK2%，
  // 【段鐵錠x4，高級合劑x4】HP3.5%，【段鐵錠x4，高級合劑x4】HP3.5%，【段鐵錠x4，高級合劑x4】HP3.5%
  {
    tier1: [
      { A1: 18, B1: 18 },
      { A1: 6, B1: 6 },
      { A1: 12, B1: 12 },
      { C1: 24, D1: 24 },
      { C1: 24, D1: 24 },
      { C1: 24, D1: 24 },
    ],
  },
  // 潛6
  // 技石x1，【惡魔之爪x2，暗之粉x2】ATK2%，【惡魔之爪x1，暗之粉x1】ATK2%，【惡魔之爪x2，暗之粉x2】ATK2%，
  // 【純源鐵錠x4，彩虹合劑x4】HP3.5%，【純源鐵錠x4，彩虹合劑x4】HP3.5%
  {
    tier1: [
      { stone: 1 },
      { A1: 36, B1: 36 },
      { A1: 18, B1: 18 },
      { A1: 36, B1: 36 },
      { C1: 72, D1: 72 },
      { C1: 72, D1: 72 },
    ],
  },
  //潛7
  // 【惡魔之爪x2，暗之粉x2】ATK2.5%，【惡魔之爪x3，暗之粉x3】ATK2.5%，【惡魔之爪x2，暗之粉x2】ATK2.5%，
  // 【惡魔之爪x2，暗之粉x2】ATK2.5%，【純源鐵錠x4，彩虹合劑x4】HP3.5%，【純源鐵錠x4，彩虹合劑x4】HP3.5%
  {
    tier1: [
      { A1: 36, B1: 36 },
      { A1: 52, B1: 52 },
      { A1: 36, B1: 36 },
      { A1: 36, B1: 36 },
      { C1: 72, D1: 72 },
      { C1: 72, D1: 72 },
    ],
  },
  // 潛8
  // 【惡魔之爪x2，暗之粉x2】ATK2.5%，【惡魔之爪x2，暗之粉x2】ATK2.5%，【惡魔之爪x3，暗之粉x3】ATK2.5%，
  // 【惡魔之爪x2，暗之粉x2】ATK2.5%，【純源鐵錠x4，彩虹合劑x4】HP3.5%，【純源鐵錠x4，彩虹合劑x4】HP3.5%
  {
    tier1: [
      { A1: 36, B1: 36 },
      { A1: 36, B1: 36 },
      { A1: 52, B1: 52 },
      { A1: 36, B1: 36 },
      { C1: 72, D1: 72 },
      { C1: 72, D1: 72 },
    ],
  },
  // 潛9
  // 【堅固之角x2，劇毒蛇牙x2】ATK2.5%，【堅固之角x3，劇毒蛇牙x3】ATK2.5%，【堅固之角x3，劇毒蛇牙x3】ATK2.5%，
  // 【堅固之角x2，劇毒蛇牙x2】ATK2.5%，【銀錠x5，腐蝕之塵x5】HP3.5%，【銀錠x5，腐蝕之塵x5】HP3.5%
  {
    tier1: [
      { A1: 96, B1: 8, E1: 8 },
      { A1: 144, B1: 12, E1: 12 },
      { A1: 144, B1: 12, E1: 12 },
      { A1: 96, B1: 8, E1: 8 },
      { C1: 120, B1: 120, E1: 20, A1: 20 },
      { C1: 120, B1: 120, E1: 20, A1: 20 },
    ],
  },
  // 潛10
  // 【獅鷲之喙x3，蟲巢之絲x3】ATK3%，【獅鷲之喙x2，蟲巢之絲x2】ATK3%，【獅鷲之喙x2，蟲巢之絲x2】ATK3%，
  // 【獅鷲之喙x3，蟲巢之絲x3】ATK3%，【熊皮x6，精緻尾羽x6】HP3.5%，【熊皮x6，精緻尾羽x6】HP3.5%
  {
    tier1: [
      { C1: 84, B1: 12, E1: 72 },
      { C1: 56, B1: 8, E1: 48 },
      { C1: 56, B1: 8, E1: 48 },
      { C1: 84, B1: 12, E1: 72 },
      { C1: 24, D1: 312 },
      { C1: 24, D1: 312 },
    ],
  },
  // 潛11
  // 【狂牛之角x1，邪龍毒牙x1】ATK3%，【狂牛之角x1，邪龍毒牙x1】ATK3%，【狂牛之角x1，邪龍毒牙x1】ATK3%，
  // 【狂牛之角x1，邪龍毒牙x1】ATK3%，【聖銀錠x1，暗龍結晶x1】3.5%HP，【聖銀錠x1，暗龍結晶x1】3.5%HP
  {
    tier1: [
      { A1: 96, B1: 26, E1: 8, D1: 18 },
      { A1: 96, B1: 26, E1: 8, D1: 18 },
      { A1: 96, B1: 26, E1: 8, D1: 18 },
      { A1: 96, B1: 26, E1: 8, D1: 18 },
      { A1: 8, C1: 48, B1: 48, D1: 18, E1: 26 },
      { A1: 8, C1: 48, B1: 48, D1: 18, E1: 26 },
    ],
  },
  // 潛12
  // 技石x2，【聖鷲之喙x1，蛛后之絲】ATK3%，【聖鷲之喙x1，蛛后之絲】ATK3%，【聖鷲之喙x1，蛛后之絲】ATK3%，
  // 【聖鷲之喙x1，蛛后之絲】ATK3%，【巨鹿毛皮x1，女妖尾羽x1】HP4%
  {
    tier1: [
      { stone: 2 },
      { A1: 18, C1: 74, B1: 8, E1: 48 },
      { A1: 18, C1: 74, B1: 8, E1: 48 },
      { A1: 18, C1: 74, B1: 8, E1: 48 },
      { A1: 18, C1: 74, B1: 8, E1: 48 },
      { D1: 104, A1: 18, C1: 8, E1: 18 },
    ],
  },
];
function potMessage(potential) {
  //A1
  const matA1 = "<:item_101:1020688126949204018>";
  //B1
  const matB1 = "<:item_105:1020688138932342894>";
  //C1
  const matC1 = "<:item_102:1020688130023632896>";
  //D1
  const matD1 = "<:item_104:1020688136541585418>";
  //E1
  const matE1 = "<:item_103:1020688133047730186>";

  let tier1Message = `初階素材: \n野獸之爪 ${matA1} : ${potential[0].A1}  毒之粉 ${matB1}: ${potential[0].B1}  鐵錠 ${matC1}: ${potential[0].C1}  史來姆殘液 ${matD1}: ${potential[0].D1}  純淨水 ${matE1}: ${potential[0].E1}`;
  return tier1Message;
}

module.exports = function produceMaterial(start, end) {
  // A1: 野獸之爪 A2:巨獸之爪 A3: 惡魔之爪
  // B1: 毒之粉 B2: 星之粉 B3: 暗之粉
  // C1: 鐵錠 C2: 段鐵錠 C3:純源鐵錠
  // D1: 史來姆殘液 D2: 高級合劑 D3: 彩虹合劑
  // E1: 純淨水 E2:月光水 E3: 精靈露水
  //1.1 > 3.1
  const initialNum = parseInt(start.toString().split(".")[0]);
  const initialNumDecimal = parseInt(start.toString().split(".")[1]);
  const lastNum = parseInt(end.toString().split(".")[0]);
  const lastNumDecimal = parseInt(end.toString().split(".")[1]);

  let potential;
  potential = mat.slice(initialNum - 1, lastNum);
  if (initialNum !== 0) {
    potential[0].tier1 = potential[0].tier1.slice(initialNumDecimal - 1, 6);
  }
  if (lastNumDecimal !== 6) {
    potential[potential.length - 1].tier1 = potential[
      potential.length - 1
    ].tier1.slice(0, lastNumDecimal);
  }
  let tier1 = { A1: 0, B1: 0, C1: 0, D1: 0, E1: 0, stone: 0 };
  console.log("初階:");
  for (let i = 0; i < potential.length; i++) {
    for (let j = 0; j < potential[i].tier1.length; j++) {
      for (let x in potential[i].tier1[j]) {
        switch (x) {
          case "A1":
            tier1.A1 += parseInt(potential[i].tier1[j][x]);
            break;
          case "B1":
            tier1.B1 += parseInt(potential[i].tier1[j][x]);
            break;
          case "C1":
            tier1.C1 += parseInt(potential[i].tier1[j][x]);
            break;
          case "D1":
            tier1.D1 += parseInt(potential[i].tier1[j][x]);
            break;
          case "E1":
            tier1.E1 += parseInt(potential[i].tier1[j][x]);
            break;
          case "Stone":
            tier1.stone += parseInt(potential[i].tier1[j][x]);
            break;
        }
      }
    }
  }
  console.log(tier1);
  return potMessage([tier1]);
  // let tier2 = {
  //   A1: 0,
  //   B1: 0,
  //   C1: 0,
  //   D1: 0,
  //   E1: 0,
  //   A2: 0,
  //   B2: 0,
  //   C2: 0,
  //   D2: 0,
  //   E2: 0,
  // };
};
