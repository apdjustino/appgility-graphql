const { name, animal, helpers, datatype, random, address, date } = require('faker')
const { v4: uuid } = require('uuid')

const Sex = {
  Male: 'MALE',
  Female: 'FEMALE',
}

const generateSex = () => {
  const sex = datatype.boolean() ? Sex.Male : Sex.Female
  return sex
}

const createPerson = () => {
  const id = uuid()
  const user = helpers.userCard()
  return {
    id,
    personId: id,
    name: user.name,
    email: user.email,
    role: 'exhibitor',
    phone: user.phone,
    address: user.address.street,
    city: user.address.city,
    state: user.address.state,
    zip: user.address.zipcode,
    claimed: false,
  }
}

const createDog = () => {
  return {
    callName: name.findName(),
    akcNumber: datatype.number().toString(),
    akcName: `${random.word()} ${random.word()} ${random.word()}`,
    withersHeight: datatype.number(24).toString(),
    needsMeasured: datatype.boolean(),
    breed: animal.dog(),
    variety: '',
    placeOfBirth: `${address.cityName()}, ${address.stateAbbr()}`,
    dob: date.between(new Date(2011, 1, 1), new Date(2020, 12, 31)).toString(),
    sex: generateSex(),
    breeder: `${random.word()} ${random.word()} ${random.word()}`,
    sire: `${random.word()} ${random.word()} ${random.word()}`,
    dam: `${random.word()} ${random.word()} ${random.word()}`,
  }
}

exports.createPerson = createPerson
exports.createDog = createDog
