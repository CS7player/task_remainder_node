const routes = require('express').Router()


routes.get("/health_check", (req, res) => {
    const data = { uptime: process.uptime(), message: 'Ok', date: new Date() }
    res.status(200).send(data);
  });
  routes.post('/', (req, res) => {
    res.status(200).json({ 'message': 'connected' })
  })
  module.exports = routes