const { shuffle } = require('lodash')
const { datatype } = require('faker')

const jumpHeights = [4, 8, 12, 16, 20, 24]

const AgilityAbility = {
  Novice: 'NOVICE',
  Open: 'OPEN',
  Excellent: 'EXCELLENT',
  Masters: 'MASTERS',
}

const AgilityClass = {
  Standard: 'STANDARD',
  Jumpers: 'JUMPERS',
  Fast: 'FAST',
  T2B: 'T2B',
  PremierStandard: 'PREMIER_STANDARD',
  PremierJumpers: 'PREMIER_JUMPERS',
}

const classes = [
  {
    name: 'standard',
    enum: AgilityClass.Standard,
    prob: 6,
  },
  {
    name: 'jumpers',
    enum: AgilityClass.Jumpers,
    prob: 6,
  },
  {
    name: 'fast',
    enum: AgilityClass.Fast,
    prob: 3,
  },
  {
    name: 't2b',
    enum: AgilityClass.T2B,
    prob: 3,
  },
  {
    name: 'premier_jumpers',
    enum: AgilityClass.PremierJumpers,
    prob: 1,
  },
  {
    name: 'premier_standard',
    enum: AgilityClass.PremierStandard,
    prob: 1,
  },
]

const levels = [
  {
    name: 'nov',
    enum: AgilityAbility.Novice,
    prob: 3,
  },
  {
    name: 'open',
    enum: AgilityAbility.Open,
    prob: 2,
  },
  {
    name: 'excl',
    enum: AgilityAbility.Excellent,
    prob: 1,
  },
  {
    name: 'mast',
    enum: AgilityAbility.Masters,
    prob: 14,
  },
]

const getProbabilityArray = (arr) => {
  const classesProb = []
  arr.forEach((classObj) => {
    for (var i = 0; i < classObj.prob; i++) {
      classesProb.push(classObj)
    }
  })

  return classesProb
}

const createRun = (className, jumpHeight) => {
  const classesProb = getProbabilityArray(classes)
  const abilityProb = getProbabilityArray(levels)

  const selectedClass = classes.find((c) => c.name === className)
  const selectedLevel = shuffle(abilityProb)[0]

  const useLevel = selectedClass.enum === AgilityClass.Standard || selectedClass.enum === AgilityClass.Jumpers || selectedClass.enum === AgilityClass.Fast

  const runInput = {
    agilityClass: selectedClass.enum,
    level: useLevel ? selectedLevel.enum : undefined,
    jumpHeight: jumpHeight,
    preferred: datatype.boolean(),
    group: useLevel ? `${selectedClass.name}-${selectedLevel.name}-${jumpHeight}` : `${selectedClass.name}-${jumpHeight}`,
  }

  return runInput
}

exports.createRun = createRun
