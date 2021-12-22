const ability = [
  {
    label: 'Novice',
    value: 'nov',
  },
  {
    label: 'Open',
    value: 'open',
  },
  {
    label: 'Excellent',
    value: 'exc',
  },
  {
    label: 'Masters',
    value: 'mast',
  },
]

const createTrial = (date) => {
  const trial = {
    eventId: 'placeholder',
    akcTrialNumber: Math.floor(Math.random() * 1000000000).toString(),
    trialDate: date,
    onlineEntries: 250,
    mailEntries: 150,
    standardClass: true,
    standardAbility: ability,
    standardPreferred: ability,
    jumpersClass: true,
    jumpersAbility: ability,
    jumpersPreferred: ability,
    fastClass: true,
    fastAbility: ability,
    fastPreferred: ability,
    t2bClass: true,
    premierStandard: true,
    premierJumpers: true,
    runLimit: 350,
  }

  return trial
}

const events = [
  {
    event: {
      name: 'January AKC Agility Trial',
      locationCity: 'Albuquerque',
      locationState: 'NM',
      trialSite: 'EXPO NM Horse Arena',
      hostClub: 'SWAT',
    },
    trials: ['2022/01/14', '2022/01/15', '2022/01/16'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'February AKC Agility Trial',
      locationCity: 'Denver',
      locationState: 'CO',
      trialSite: 'National Western Stock Complex',
      hostClub: 'SWAT',
    },
    trials: ['2022/02/18', '2022/02/19', '2022/02/20'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'March AKC Agility Trial',
      locationCity: 'Amarillo',
      locationState: 'TX',
      trialSite: 'Amarillo Horse Arena',
      hostClub: 'SWAT',
    },
    trials: ['2022/03/18', '2022/03/19', '2022/03/20'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'April AKC Agility Trial',
      locationCity: 'Lakewood',
      locationState: 'CO',
      trialSite: 'Schaefer Sports Complex',
      hostClub: 'SWAT',
    },
    trials: ['2022/04/15', '2022/04/16', '2022/04/17'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'May AKC Agility Trial',
      locationCity: 'Albuquerque',
      locationState: 'NM',
      trialSite: 'State Fairgrounds',
      hostClub: 'SWAT',
    },
    trials: ['2022/05/20', '2022/05/21', '2022/05/222'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'June AKC Agility Trial',
      locationCity: 'Las Cruces',
      locationState: 'NM',
      trialSite: 'Dona Ana County Fairgrounds',
      hostClub: 'SWAT',
    },
    trials: ['2022/06/17', '2022/06/18', '2022/06/19'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'July AKC Agility Trial',
      locationCity: 'Castle Rock',
      locationState: 'CO',
      trialSite: 'Douglas County Fairgrounds',
      hostClub: 'Front Range Agility Club',
    },
    trials: ['2022/07/15', '2022/07/16', '2022/07/17'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'August AKC Agility Trial',
      locationCity: 'Boulder',
      locationState: 'CO',
      trialSite: 'Boulder Sports Complex',
      hostClub: 'Front Range Agility Club',
    },
    trials: ['2022/08/19', '2022/08/20', '2022/08/21'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'September AKC Agility Trial',
      locationCity: 'Tulsa',
      locationState: 'OK',
      trialSite: 'Tulsa Sports Complex',
      hostClub: 'Tulsa Agiity',
    },
    trials: ['2022/09/16', '2022/09/17', '2022/09/18'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'October AKC Agility Trial',
      locationCity: 'Phoenix',
      locationState: 'AZ',
      trialSite: 'Valley of the Sun Sports Complex',
      hostClub: 'Phoenix Agility Club',
    },
    trials: ['2022/10/14', '2022/10/15', '2022/10/16'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'November AKC Agility Trial',
      locationCity: 'Albuquerque',
      locationState: 'NM',
      trialSite: 'Bernallio Sheriff Complex',
      hostClub: 'SWAT',
    },
    trials: ['2022/11/18', '2022/11/19', '2022/11/20'].map((date) => createTrial(date)),
  },
  {
    event: {
      name: 'December AKC Agility Trial',
      locationCity: 'Denver',
      locationState: 'CO',
      trialSite: 'National Western Sports Complex',
      hostClub: 'Front Range Agilty Club',
    },
    trials: ['2022/12/16', '2022/12/17', '2022/12/18'].map((date) => createTrial(date)),
  },
]

exports.events = events
