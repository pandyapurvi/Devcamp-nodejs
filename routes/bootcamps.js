const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.send({
    success: true,
    msg: "Get data from all bootcamps"
  })
})

router.get('/:id', (req, res) => {
  res.send({
    success: true,
    msg: `Get bootcamp ${req.params.id}`
  })
})



router.post('/', (req, res) => {
  res.send({
    success: true,
    msg: "Create new bootcamp"
  })
})

router.put('/:id', (req, res) => {
  res.send({
    success: true,
    msg: `Update bootcamp ${req.params.id}`
  })
})

router.delete('/:id', (req, res) => {
  res.send({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`
  })
})

module.exports = router