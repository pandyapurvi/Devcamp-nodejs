//@desc: Get all bootcapms
//@route: GET /api/v1/bootcamps
//@access: Public
exports.getBootcamps = (req, res, next) => {
  res.send({
    success: true,
    msg: "Get data from all bootcamps"
  })
}

//@desc: Get one bootcapm
//@route: GET /api/v1/bootcamps/:id
//@access: Public
exports.getBootcamp = (req, res, next) => {
  res.send({
    success: true,
    msg: `Get bootcamp ${req.params.id}`
  })
}

//@desc: Create a bootcapm
//@route: POST /api/v1/bootcamps
//@access: Private
exports.createBootcamp = (req, res, next) => {
  res.send({
    success: true,
    msg: "Create new bootcamp"
  })
}

//@desc: Update a bootcapm
//@route: PUT /api/v1/bootcamps/:id
//@access: Private
exports.updateBootcamp = (req, res, next) => {
  res.send({
    success: true,
    msg: `Update bootcamp ${req.params.id}`
  })
}

//@desc: Delete a bootcapm
//@route: DELETE /api/v1/bootcamps/:id
//@access: Private
exports.deleteBootcamp = (req, res, next) => {
  res.send({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`
  })
}