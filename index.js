
const express = require('express')
const { getAllTeams, getTeamById } = require('./controllers/teams')

const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamById)

app.listen(1221, () => {
  console.log('Listening on port 1221...') // eslint-disable-line no-console
})
