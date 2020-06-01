const Bootcamp = require('../models/Bootcamp');

//@desc: Get all bootcapms
//@route: GET /api/v1/bootcamps
//@access: Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({
      success: true,
      count: bootcamp.length,
      data: bootcamp
    })
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}

//@desc: Get one bootcapm
//@route: GET /api/v1/bootcamps/:id
//@access: Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    //When we have two res in same block remember to return in If statement
    if (!bootcamp) {
      return res.status(400).json({
        success: false
      })
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    })
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}

//@desc: Create a bootcapm
//@route: POST /api/v1/bootcamps
//@access: Private
exports.createBootcamp = async (req, res, next) => {
  //console.log(req.body);
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    })
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }

}

//@desc: Update a bootcapm
//@route: PUT /api/v1/bootcamps/:id
//@access: Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!bootcamp) {
      return res.status(400).json({
        success: false
      })
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    })
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}

//@desc: Delete a bootcapm
//@route: DELETE /api/v1/bootcamps/:id
//@access: Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false
      })
    }
    res.status(200).json({
      success: true,
      data: {}
    })

  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}