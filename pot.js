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
    tier2: [],
    original: [
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
    tier2: [],
    original: [
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
    original: [
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
    tier2: [
      { A2: 2, B2: 2 },
      { A2: 1, B2: 1 },
      { A2: 1, B2: 1 },
      { A2: 1, B2: 1 },
      { C2: 3, D2: 3 },
      { C2: 3, D2: 3 },
    ],
    original: [
      { A2: 2, B2: 2 },
      { A2: 1, B2: 1 },
      { A2: 1, B2: 1 },
      { C2: 3, D2: 3 },
      { C2: 3, D2: 3 },
      { C2: 3, D2: 3 },
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
    tier2: [
      { A2: 3, B2: 3 },
      { A2: 1, B2: 1 },
      { A2: 2, B2: 2 },
      { C2: 4, D2: 4 },
      { C2: 4, D2: 4 },
      { C2: 4, D2: 4 },
    ],
    original: [
      { A3: 1, B3: 1 },
      { A2: 1, B2: 1 },
      { A2: 2, B2: 2 },
      { C2: 4, D2: 4 },
      { C2: 4, D2: 4 },
      { C2: 4, D2: 4 },
    ],
  },
  // 潛6
  // 技石x1，【惡魔之爪x2，暗之粉x2】ATK2%，【惡魔之爪x1，暗之粉x1】ATK2%，【惡魔之爪x2，暗之粉x2】ATK2%，
  // 【純源鐵錠x4，彩虹合劑x4】HP3.5%，【純源鐵錠x4，彩虹合劑x4】HP3.5%
  {
    tier1: [
      { stone: 1 },
      { A1: 18, B1: 18 },
      { A1: 18, B1: 18 },
      { A1: 36, B1: 36 },
      { C3: 72, D3: 72 },
      { C3: 72, D3: 72 },
    ],
    tier2: [
      { stone: 1 },
      { A2: 6, B2: 6 },
      { A2: 3, B2: 3 },
      { A2: 6, B2: 6 },
      { C2: 12, D2: 12 },
      { C2: 12, D2: 12 },
    ],
    original: [
      { stone: 1 },
      { A3: 2, B3: 2 },
      { A3: 1, B3: 1 },
      { A3: 2, B3: 2 },
      { C3: 4, D3: 4 },
      { C3: 4, D3: 4 },
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
    tier2: [
      { A2: 6, B2: 6 },
      { A2: 9, B2: 9 },
      { A2: 9, B2: 9 },
      { A2: 6, B2: 6 },
      { C2: 12, D2: 12 },
      { C2: 12, D2: 12 },
    ],
    original: [
      { A3: 2, B3: 2 },
      { A3: 3, B3: 3 },
      { A3: 2, B3: 2 },
      { A3: 2, B3: 2 },
      { C3: 4, D3: 4 },
      { C3: 4, D3: 4 },
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
    tier2: [
      { A2: 6, B2: 6 },
      { A2: 6, B2: 6 },
      { A2: 9, B2: 9 },
      { A2: 6, B2: 6 },
      { C2: 12, D2: 12 },
      { C2: 12, D2: 12 },
    ],
    original: [
      { A3: 2, B3: 2 },
      { A3: 2, B3: 2 },
      { A3: 3, B3: 3 },
      { A3: 2, B3: 2 },
      { C3: 4, D3: 4 },
      { C3: 4, D3: 4 },
    ],
  },
  // 潛9
  // 【堅固之角x2，劇毒蛇牙x2】ATK2.5%，【堅固之角x3，劇毒蛇牙x3】ATK2.5%，【堅固之角x3，劇毒蛇牙x3】ATK2.5%，
  // 【堅固之角x2，劇毒蛇牙x2】ATK2.5%，【銀錠x5，腐蝕之塵x5】HP3.5%，【銀錠x5，腐蝕之塵x5】HP3.5%
  //F1:堅固之角
  //F2:劇毒蛇牙
  //F3:銀錠
  //F4:腐蝕之塵
  //F5:獅鷲之喙
  //F6:蟲巢之絲
  //F7:熊皮
  //F8:精緻尾羽
  //G1:狂牛之角
  //G2:邪龍毒牙
  //G3:聖銀錠
  //G4:暗龍結晶
  //G5:聖鷲之喙
  //G6:蛛后之絲
  //G7:巨鹿毛皮
  //G8:女妖尾羽

  {
    tier1: [
      { A1: 96, B1: 8, E1: 8 },
      { A1: 144, B1: 12, E1: 12 },
      { A1: 144, B1: 12, E1: 12 },
      { A1: 96, B1: 8, E1: 8 },
      { C1: 120, B1: 120, E1: 20, A1: 20 },
      { C1: 120, B1: 120, E1: 20, A1: 20 },
    ],
    tier2: [
      { A2: 16, B1: 8, E1: 8 },
      { A2: 24, B1: 12, E1: 12 },
      { A2: 24, B1: 12, E1: 12 },
      { A2: 16, B1: 8, E1: 8 },
      { A1: 20, B2: 20, C2: 20, E1: 20 },
      { A1: 20, B2: 20, C2: 20, E1: 20 },
    ],
    original: [
      { F1: 2, F2: 2 },
      { F1: 3, F2: 3 },
      { F1: 3, F2: 3 },
      { F1: 2, F2: 2 },
      { F3: 5, F4: 5 },
      { F3: 5, F4: 5 },
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
    tier2: [
      { B1: 12, C1: 12, C2: 12, E2: 12 },
      { B1: 8, C1: 8, C2: 8, E2: 8 },
      { B1: 8, C1: 8, C2: 8, E2: 8 },
      { B1: 12, C1: 12, C2: 12, E2: 12 },
      { C1: 24, D1: 24, D2: 48 },
      { C1: 24, D1: 24, D2: 48 },
    ],
    original: [
      { F5: 3, F6: 3 },
      { F5: 2, F6: 2 },
      { F5: 2, F6: 2 },
      { F5: 3, F6: 3 },
      { F7: 6, F8: 6 },
      { F7: 6, F8: 6 },
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
    tier2: [
      { A2: 16, B2: 3, B1: 8, D2: 3, E1: 8 },
      { A2: 16, B2: 3, B1: 8, D2: 3, E1: 8 },
      { A2: 16, B2: 3, B1: 8, D2: 3, E1: 8 },
      { A2: 16, B2: 3, B1: 8, D2: 3, E1: 8 },
      { A1: 8, B2: 8, C2: 8, D2: 3, E1: 8, E2: 3 },
      { A1: 8, B2: 8, C2: 8, D2: 3, E1: 8, E2: 3 },
    ],
    original: [
      { G1: 1, G2: 1 },
      { G1: 1, G2: 1 },
      { G1: 1, G2: 1 },
      { G1: 1, G2: 1 },
      { G3: 1, G4: 1 },
      { G3: 1, G4: 1 },
    ],
    tier4: [
      { F1: 2, B2: 3, F2: 2, D2: 3 },
      { F1: 2, B2: 3, F2: 2, D2: 3 },
      { F1: 2, B2: 3, F2: 2, D2: 3 },
      { F1: 2, B2: 3, F2: 2, D2: 3 },
      { F3: 2, D2: 3, F4: 2, E2: 3 },
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
    tier2: [
      { stone: 2 },
      { A2: 3, B1: 8, C1: 8, C2: 11, E2: 8 },
      { A2: 3, B1: 8, C1: 8, C2: 11, E2: 8 },
      { A2: 3, B1: 8, C1: 8, C2: 11, E2: 8 },
      { A2: 3, B1: 8, C1: 8, C2: 11, E2: 8 },
      { A2: 8, C1: 8, D1: 8, D2: 16, E2: 3 },
    ],
    original: [
      { stone: 2 },
      { G5: 1, G6: 1 },
      { G5: 1, G6: 1 },
      { G5: 1, G6: 1 },
      { G5: 1, G6: 1 },
      { G7: 1, G8: 1 },
    ],
    tier4: [
      { stone: 2 },
      { F5: 2, A2: 3, F6: 2, C2: 3 },
      { F5: 2, A2: 3, F6: 2, C2: 3 },
      { F5: 2, A2: 3, F6: 2, C2: 3 },
      { F5: 2, A2: 3, F6: 2, C2: 3 },
      { F7: 2, A2: 3, F8: 2, E2: 3 },
    ],
  },
];
function potMessage(potential) {
  const matA1 = "<:item_101:1020688126949204018>";
  const matB1 = "<:item_105:1020688138932342894>";
  const matC1 = "<:item_102:1020688130023632896>";
  const matD1 = "<:item_104:1020688136541585418>";
  const matE1 = "<:item_103:1020688133047730186>";
  const matStone = "<:item_02:856492852205191198>";
  const matA2 = "<:item_201:1020688141960609802>";
  const matB2 = "<:item_205:1020688154858094732>";
  const matA3 = "<:item_301:1020688157919940698>";
  const matB3 = "<:item_305:1020688171039723560>";
  const matC3 = "<:item_302:1020688159882870865>";
  const matD3 = "<:item_304:1020688167860453406>";
  const matE3 = "<:item_303:1020688164458876949>";
  const matC2 = "<:item_202:1020688144808546434>";
  const matD2 = "<:item_204:1020688151628501142>";
  const matE2 = "<:item_203:1020688147971063948>";
  const matF1 = "<:item_401:1020688172922978395>";
  const matF2 = "<:item_405:1020688183542952047>";
  const matF3 = "<:item_402:1020688174957215864>";
  const matF4 = "<:item_404:1020688180657262673>";
  const matF5 = "<:item_406:1020688185635901530>";
  const matF6 = "<:item_410:1020688196834697246>";
  const matF7 = "<:item_407:1020688189603729479>";
  const matF8 = "<:item_409:1020688194582368336>";
  const matG1 = "<:item_501:1020688199439351829>";
  const matG2 = "<:item_505:1020688211003048037>";
  const matG3 = "<:item_502:1020688201687507046>";
  const matG4 = "<:item_504:1020688208717164565>";
  const matG5 = "<:item_506:1020688214996041768>";
  const matG6 = "<:item_510:1020688227658637362>";
  const matG7 = "<:item_507:1020688218485686453>";
  const matG8 = "<:item_509:1020688224550649879>";

  let tier1Message = "初階素材：\n";
  let tier2Message = "\n\n中初階素材:\n";
  let originalMessage = "素材需求：\n";
  // for (let x in potential[0]) {
  //   switch (x) {
  //     case "A1":
  //       tier1Message += `\n${matA1}:${potential[0].A1}`;
  //       break;
  //     case "B1":
  //       tier1Message += `\n${matB1}:${potential[0].B1}`;
  //       break;
  //     case "C1":
  //       tier1Message += `\n${matC1}:${potential[0].C1}`;
  //       break;
  //     case "D1":
  //       tier1Message += `\n${matD1}:${potential[0].D1}`;
  //       break;
  //     case "E1":
  //       tier1Message += `\n${matE1}:${potential[0].E1}`;
  //       break;
  //     case "stone":
  //       tier1Message += `\n${matStone}:${potential[0].stone}`;
  //       break;
  //   }
  // }

  // for (let x in potential[1]) {
  //   switch (x) {
  //     case "A1":
  //       tier2Message += `\n${matA1}:${potential[1].A1} ${matA2}:${potential[1].A2}`;
  //       break;
  //     case "B1":
  //       tier2Message += `\n${matB1}:${potential[1].B1} ${matB2}:${potential[1].B2}`;
  //       break;
  //     case "C1":
  //       tier2Message += `\n${matC1}:${potential[1].C1}`;
  //       break;
  //     case "D1":
  //       tier2Message += `\n${matD1}:${potential[1].D1}`;
  //       break;
  //     case "E1":
  //       tier2Message += `\n${matE1}:${potential[1].E1}`;
  //       break;
  //     case "stone":
  //       tier2Message += `\n${matStone}:${potential[1].stone}`;
  //       break;
  //     // case "A2":
  //     //   tier2Message += `\n${matA2}:${potential[1].A2}`;
  //     //   break;
  //     // case "B2":
  //     //   tier2Message += `${matB2}:${potential[1].B2}`;
  //     //   break;
  //     case "C2":
  //       tier2Message += `${matC2}:${potential[1].C2}`;
  //       break;
  //     case "D2":
  //       tier2Message += `${matD2}:${potential[1].D2}`;
  //       break;
  //     case "E2":
  //       tier2Message += `${matE2}:${potential[1].E2}`;
  //       break;
  //   }
  // }
  console.log(potential[2]);

  for (let x in potential[2]) {
    switch (x) {
      case "stone":
        originalMessage += `${matStone} ${potential[2].stone}`;
        break;
      case "A1":
        originalMessage += `${matA1} ${potential[2].A1}\t`;
        break;
      case "B1":
        originalMessage += `${matB1} ${potential[2].B1}\t`;
        break;
      case "C1":
        originalMessage += `${matC1} ${potential[2].C1}\t`;
        break;
      case "D1":
        originalMessage += `${matD1} ${potential[2].D1}\t`;
        break;
      case "E1":
        originalMessage += `${matE1} ${potential[2].E1}\t`;
        break;
      case "A2":
        originalMessage += `${matA2} ${potential[2].A2}\t`;
        break;
      case "B2":
        originalMessage += `${matB2} ${potential[2].B2}\t`;
        break;
      case "C2":
        originalMessage += `${matC2} ${potential[2].C2}\t`;
        break;
      case "D2":
        originalMessage += `${matD2} ${potential[2].D2}\t`;
        break;
      case "E2":
        originalMessage += `${matE2} ${potential[2].E2}\t`;
        break;
      case "A3":
        originalMessage += `${matA3} ${potential[2].A3}\t`;
        break;
      case "B3":
        originalMessage += `${matB3} ${potential[2].B3}\t`;
        break;
      case "C3":
        originalMessage += `${matC3} ${potential[2].C3}\t`;
        break;
      case "D3":
        originalMessage += `${matD3} ${potential[2].D3}\t`;
        break;
      case "E3":
        originalMessage += `${matE3} ${potential[2].E3}\t`;
        break;
      case "F1":
        originalMessage += `${matF1} ${potential[2].F1}\t`;
        break;
      case "F2":
        originalMessage += `${matF2} ${potential[2].F2}\t`;
        break;
      case "F3":
        originalMessage += `${matF3} ${potential[2].F3}\t`;
        break;
      case "F4":
        originalMessage += `${matF4} ${potential[2].F4}\t`;
        break;
      case "F5":
        originalMessage += `${matF5} ${potential[2].F5}\t`;
        break;
      case "F6":
        originalMessage += `${matF6} ${potential[2].F6}\t`;
        break;
      case "F7":
        originalMessage += `${matF7} ${potential[2].F7}\t`;
        break;
      case "F8":
        originalMessage += `${matF8} ${potential[2].F8}\t`;
        break;

      case "G1":
        originalMessage += `${matG1} ${potential[2].G1}\t`;
        break;
      case "G2":
        originalMessage += `${matG2} ${potential[2].G2}\t`;
        break;
      case "G3":
        originalMessage += `${matG3} ${potential[2].G3}\t`;
        break;
      case "G4":
        originalMessage += `${matG4} ${potential[2].G4}\t`;
        break;
      case "G5":
        originalMessage += `${matG5} ${potential[2].G5}\t`;
        break;
      case "G6":
        originalMessage += `${matG6} ${potential[2].G6}\t`;
        break;
      case "G7":
        originalMessage += `${matG7} ${potential[2].G7}\t`;
        break;
      case "G8":
        originalMessage += `${matG8} ${potential[2].G8}\t`;
        break;
    }
  }

  // return tier1Message + tier2Message;
  return originalMessage;
}

module.exports = function produceMaterial(start, end) {
  // function produceMaterial(start, end) {
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
    potential[0].tier2 = potential[0].tier2.slice(initialNumDecimal - 1, 6);
    potential[0].original = potential[0].original.slice(
      initialNumDecimal - 1,
      6
    );
  }
  if (lastNumDecimal !== 6) {
    potential[potential.length - 1].tier1 = potential[
      potential.length - 1
    ].tier1.slice(0, lastNumDecimal);
    potential[potential.length - 1].tier2 = potential[
      potential.length - 1
    ].tier2.slice(0, lastNumDecimal);
    potential[potential.length - 1].original = potential[
      potential.length - 1
    ].tier2.slice(0, lastNumDecimal);
  }
  let tier1 = { A1: 0, B1: 0, C1: 0, D1: 0, E1: 0, stone: 0 };
  let tier2 = {
    A1: 0,
    B1: 0,
    C1: 0,
    D1: 0,
    E1: 0,
    A2: 0,
    B2: 0,
    C2: 0,
    D2: 0,
    E2: 0,
    stone: 0,
  };
  let original = {
    A1: 0,
    B1: 0,
    C1: 0,
    D1: 0,
    E1: 0,
    A2: 0,
    B2: 0,
    C2: 0,
    D2: 0,
    E2: 0,
    stone: 0,
    A3: 0,
    B3: 0,
    C3: 0,
    D3: 0,
    E3: 0,
    F1: 0,
    F2: 0,
    F3: 0,
    F4: 0,
    F5: 0,
    F6: 0,
    F7: 0,
    F8: 0,
    G1: 0,
    G2: 0,
    G3: 0,
    G4: 0,
    G5: 0,
    G6: 0,
    G7: 0,
    G8: 0,
  };
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
          case "stone":
            tier1.stone += parseInt(potential[i].tier1[j][x]);
            break;
        }
      }
      if (potential[i].hasOwnProperty("tier2")) {
        for (let x in potential[i].tier2[j]) {
          switch (x) {
            case "A1":
              tier2.A1 += parseInt(potential[i].tier2[j][x]);
              break;
            case "B1":
              tier2.B1 += parseInt(potential[i].tier2[j][x]);
              break;
            case "C1":
              tier2.C1 += parseInt(potential[i].tier2[j][x]);
              break;
            case "D1":
              tier2.D1 += parseInt(potential[i].tier2[j][x]);
              break;
            case "E1":
              tier2.E1 += parseInt(potential[i].tier2[j][x]);
              break;
            case "stone":
              tier2.stone += parseInt(potential[i].tier2[j][x]);
              break;
            case "A2":
              tier2.A2 += parseInt(potential[i].tier2[j][x]);
              break;
            case "B2":
              tier2.B2 += parseInt(potential[i].tier2[j][x]);
              break;
            case "C2":
              tier2.C2 += parseInt(potential[i].tier2[j][x]);
              break;
            case "D2":
              tier2.D2 += parseInt(potential[i].tier2[j][x]);
              break;
            case "E2":
              tier2.E2 += parseInt(potential[i].tier2[j][x]);
              break;
          }
        }
      }
    }
  }
  console.log(potential);
  for (let i = 0; i < potential.length; i++) {
    for (let j = 0; j < potential[i].original.length; j++) {
      for (let x in potential[i].original[j]) {
        switch (x) {
          case "A1":
            original.A1 += parseInt(potential[i].original[j][x]);
            break;
          case "B1":
            original.B1 += parseInt(potential[i].original[j][x]);
            break;
          case "C1":
            original.C1 += parseInt(potential[i].original[j][x]);
            break;
          case "D1":
            original.D1 += parseInt(potential[i].original[j][x]);
            break;
          case "E1":
            original.E1 += parseInt(potential[i].original[j][x]);
            break;
          case "stone":
            original.stone += parseInt(potential[i].original[j][x]);
            break;
          case "A2":
            original.A2 += parseInt(potential[i].original[j][x]);
            break;
          case "B2":
            original.B2 += parseInt(potential[i].original[j][x]);
            break;
          case "C2":
            original.C2 += parseInt(potential[i].original[j][x]);
            break;
          case "D2":
            original.D2 += parseInt(potential[i].original[j][x]);
            break;
          case "E2":
            original.E2 += parseInt(potential[i].original[j][x]);
            break;
          case "A3":
            original.A3 += parseInt(potential[i].original[j][x]);
            break;
          case "B3":
            original.B3 += parseInt(potential[i].original[j][x]);
            break;
          case "C3":
            original.C3 += parseInt(potential[i].original[j][x]);
            break;
          case "D3":
            original.D3 += parseInt(potential[i].original[j][x]);
            break;
          case "E3":
            original.E3 += parseInt(potential[i].original[j][x]);
            break;
          case "F1":
            original.F1 += parseInt(potential[i].original[j][x]);
            break;
          case "F2":
            original.F2 += parseInt(potential[i].original[j][x]);
            break;
          case "F3":
            original.F3 += parseInt(potential[i].original[j][x]);
            break;
          case "F4":
            original.F4 += parseInt(potential[i].original[j][x]);
            break;
          case "F5":
            original.F5 += parseInt(potential[i].original[j][x]);
            break;
          case "F6":
            original.F6 += parseInt(potential[i].original[j][x]);
            break;
          case "F7":
            original.F7 += parseInt(potential[i].original[j][x]);
            break;
          case "F8":
            original.F8 += parseInt(potential[i].original[j][x]);
            break;
          case "G1":
            original.G1 += parseInt(potential[i].original[j][x]);
            break;
          case "G2":
            original.G2 += parseInt(potential[i].original[j][x]);
            break;
          case "G3":
            original.G3 += parseInt(potential[i].original[j][x]);
            break;
          case "G4":
            original.G4 += parseInt(potential[i].original[j][x]);
            break;
          case "G5":
            original.G5 += parseInt(potential[i].original[j][x]);
            break;
          case "G6":
            original.G6 += parseInt(potential[i].original[j][x]);
            break;
          case "G7":
            original.G7 += parseInt(potential[i].original[j][x]);
            break;
          case "G8":
            original.G8 += parseInt(potential[i].original[j][x]);
            break;
        }
      }
    }
  }
  const newData = [tier1, tier2, original].map((e) =>
    Object.fromEntries(Object.entries(e).filter(([key, value]) => value !== 0))
  );
  console.log(newData);
  return potMessage(newData);
};

// console.log();
// produceMaterial(11.0, 11.6);
// console.log(produceMaterial(7.0, 12.6));
