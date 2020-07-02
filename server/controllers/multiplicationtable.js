const ErrorResponse = require('../utils/errorResponce');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc    Send config(setting of multiplication table)
//          and get the test
// @route   GET /api/v1/training/multiplicationtable/test
// @access  Private
exports.getmultiplicationtest = asyncHandler(async (req, res, next) => {
  const {
    type,
    multiplicationExamples,
    timeLimit,
    timeLimitSecond,
    numberofrepetitions
  } = req.body;

  if (type === 'practice') {
    let examples = multiplicationExamples.map(objTable => {
      return objTable.examples.map(num => {
        if (!num.disable) {
          return {
            nums: [objTable.table, num.num]
            // example: `${objTable.table} + ${num}`
          };
        }
      });
    });
    // console.log('EXAMPLES');
    // console.log(examples);

    const refinedExamples = examples.map(el => {
      return el.filter(array => array != null);
    });
    const finallyRefinedExamples = refinedExamples.flat().map(obj => obj.nums);

    // const refinedExamples = examples.flat().map(obj => obj.nums);
    // console.log(finallyRefinedExamples);

    const examplesMultiplied = [];

    for (let i = 0; i < numberofrepetitions; i++) {
      examplesMultiplied.push(...finallyRefinedExamples);
    }

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    shuffle(examplesMultiplied);

    res.status(200).json({ success: true, examplesMultiplied });
  } else if (type === 'exam') {
    return next(new ErrorResponse('exam is now in development(', 400));
  } else {
    return next(new ErrorResponse('wrong type', 400));
  }
});

exports.getmultiplicationresult = asyncHandler(async (req, res, next) => {
  const { allAnswers, rightAnswers } = req.body;

  if (!allAnswers || !rightAnswers) {
    return next(new ErrorResponse('Need allAnswers or rightAnswers', 400));
  }

  const experience = (allAnswers + rightAnswers) * 10;

  const user = await User.findById(req.user.id);

  user.experience += experience;

  if (user.experience > 3000) {
    user.experience = 0;
    user.level++;
  }

  await User.findByIdAndUpdate(req.user.id, user);
  console.log(user);

  res.status(200).json({ success: true, experience });
});
