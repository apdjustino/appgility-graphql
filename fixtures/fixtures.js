// import { createRun } from "./runs";
// import { createPerson, createDog } from "./people";
const { events } = require('./events.js')
const { createPerson, createDog } = require('./people.js')
const { createRun } = require('./runs.js')
const axios = require('axios')
const { datatype } = require('faker')
const { shuffle, sample } = require('lodash')

const ADD_EVENT = `
mutation AddEvent($data: CreateNewEventInput, $personId: String) {
  addEvent(data: $data, personId: $personId) {
    eventId    
  }
}`

const ADD_TRIAL = `
mutation AddEventTrial($eventTrial: AddEventTrial!) {
  addEventTrial(eventTrial: $eventTrial) {
    trialId    
  }
}`

const ADD_PERSON = `
mutation AddPerson($data: PersonInput, $password: String) {
  addPerson(data: $data, password: $password) {
    personId
  }
}`

const ADD_DOG = `
mutation AddDog($personId: String!, $secretaryId: String!, $dog: DogInput!) {
  addDog(personId: $personId, secretaryId: $secretaryId, dog: $dog) {
    dogId
  }
}`

const ADD_RUN = `
mutation AddNewRun($eventId: String!, $trialId: String!, $personId: String!, $dogId: String!, $run: RunInput!) {
  addRun(eventId: $eventId, trialId: $trialId, personId: $personId, dogId: $dogId, run: $run) {
    runId
  }
}`

const graphURL = 'http://localhost:7071/graphql'

const accessToken = 'fake'
const secretaryId = 'b733d506-2b21-45ab-a145-6f42b1362d68'

const addPeople = async (accessToken) => {
  const n = 250
  const personVector = []
  for (var i = 0; i <= n; i++) {
    const personObj = createPerson()
    personVector.push(personObj)
  }

  const response = await Promise.all(
    personVector.map(async (person) => {
      const { data } = await axios.post(graphURL, { query: ADD_PERSON, variables: { data: person } })
      const personId = data.data.addPerson.personId
      console.log(`Added person with personId ${personId}`)

      const hasTwoDogs = datatype.boolean()
      const dogVector = hasTwoDogs ? [createDog(), createDog()] : [createDog()]
      const dogIds = await Promise.all(
        dogVector.map(async (dog) => {
          const { data } = await axios.post(graphURL, { query: ADD_DOG, variables: { personId, secretaryId, dog } })
          const dogId = data.data.addDog.dogId
          console.log(`Added dog with dogId ${dogId} to person ${personId}`)
          return dogId
        }),
      )

      return { personId, dogIds }
    }),
  )

  return response
}

const addEventsAndTrials = async () => {
  const response = await Promise.all(
    events.map(async (eventObj) => {
      const { data } = await axios.post(
        graphURL,
        { query: ADD_EVENT, variables: { data: eventObj.event, personId: secretaryId } },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )

      const eventId = data.data.addEvent.eventId
      console.log(`Added event with eventId: ${eventId}`)
      const trialIds = await Promise.all(
        eventObj.trials.map(async (trial) => {
          trial.eventId = eventId
          const { data } = await axios.post(graphURL, { query: ADD_TRIAL, variables: { eventTrial: trial } })
          const trialId = data.data.addEventTrial.trialId
          console.log(`Added trial to event ${eventId} with trialId ${trialId}`)
          return trialId
        }),
      )
      return { eventId, trialIds }
    }),
  )

  return response
}

const addFixtures2 = async () => {
  const eventsAndTralIds = await addEventsAndTrials()
  const peopleAndDogs = await addPeople()

  eventsAndTralIds.forEach((eventAndTrial) => {
    const eventId = eventAndTrial.eventId
    eventAndTrial.trialIds.forEach(async (trialId) => {
      for (var i = 0; i < 87; i++) {
        const person = sample(peopleAndDogs)
        const dogId = sample(person.dogIds)
        const jumpHeights = [4, 8, 12, 16, 20, 24]
        const jumpHeight = sample(jumpHeights)
        const runsToAdd = [createRun('standard', jumpHeight), createRun('jumpers', jumpHeight), createRun('fast', jumpHeight), createRun('t2b', jumpHeight)]
        const runIds = await Promise.all(
          runsToAdd.map(async (run) => {
            const { data } = await axios.post(graphURL, { query: ADD_RUN, variables: { eventId, trialId, personId: person.personId, dogId, run } })
            const runId = data.data.addRun.runId
            return runId
          }),
        )
        console.log(`Runs added: ${runIds} in trial ${trialId}`)
      }
    })
  })
}

addFixtures2()
