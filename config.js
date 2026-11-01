// MiniWord settings. Edit this file while testing.
// Board: T = triple word, D = double word, t = triple letter, d = double letter,
// * = centre star (double word), . = plain square. Row 0 is the top.
window.CONFIG = {
  name: "MiniWord",
  rackSize: 6,
  bingo: 40,
  // Help my luck. pairs = pairs of the same letter always allowed in a rack, pairChance = % chance a draw may allow one pair,
  // vmin/vmax = hard limits on vowels in a rack (a blank counts as either), vowelPct = soft target share of vowels (0 = off),
  // tierW = draw weight for tile tiers 1-4 (see tiers below), maxHigh = most tier 3-4 tiles allowed in a rack.
  luck: { pairs: 0, pairChance: 10, vmin: 2, vmax: 3, vowelPct: 42, tierW: [1, 1, 1, 1], maxHigh: 3 },
  // Testing options (also on the developer page).
  dev: { confirmRestart: false, noSBlank: false },
  // Tile tiers: 1 = super common, 2 = common, 3 = mid, 4 = rare.
  tiers: { R:1, S:1, T:1, N:1, E:1, A:1, D:2, G:2, I:2, L:2, O:2, U:2, C:2, M:2, H:2, B:3, F:3, P:3, W:3, Y:3, K:3, V:3, J:4, X:4, Q:4, Z:4 },
  board: [
    "T..t..T..t..T",
    ".D.........D.",
    "..D..d.d..D..",
    "t..D..d..D..t",
    "....t...t....",
    "..d.......d..",
    "T..d..*..d..T",
    "..d.......d..",
    "....t...t....",
    "t..D..d..D..t",
    "..D..d.d..D..",
    ".D.........D.",
    "T..t..T..t..T"
  ],
  // Tiles in the bag (76). ? = blank.
  bag: {
    A:7, B:1, C:2, D:4, E:9, F:1, G:2, H:2, I:5, J:1, K:1, L:3, M:2,
    N:5, O:5, P:2, Q:1, R:5, S:4, T:5, U:2, V:1, W:1, X:1, Y:1, Z:1, "?":2
  },
  // Letter values. A blank scores 0.
  values: {
    A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3,
    N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10
  }
};
