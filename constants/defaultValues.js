export const defaultUpgradeValues = [
  {name: 'clicker', image: './assets/clicker-white.png', cost: 10, increase: 1, type: "upgrade"},
  {name: 'pickaxe', image: './assets/pickaxe.webp', cost: 60, increase: 4, type: "upgrade"},
  {name: 'miner', image: './assets/miner.webp', cost: 480, increase: 32, type: "upgrade"},
  {name: 'factory', image: './assets/factory.png', cost: 4240, increase: 410, type: "upgrade"},
  {name: 'potion', image: './assets/potion.webp', cost: 52800, increase: 5500, type: "upgrade"},
]

export const defaultSkillValues = [
 {
  name: "Stronger Clicks",
  description: "Double your clicking power for 30 seconds",
  image: "./assets/skills/skill1.png",
  cd: 600,
  cost: 12000,
  type: "skill"
 },
 {
  name: "Lucky Day",
  description: "Gain 600 x GPS worth of gems instantly",
  image: "./assets/skills/skill1.png",
  cd: 900,
  cost: 480000,
  type: "skill"
 }
]

export const defaultArtifactValues = [
  {
    name: "Artifact 1",
    description: "Permanently increase all gems gained by x amount",
    image: "",
    type: "artifact"
  }
]