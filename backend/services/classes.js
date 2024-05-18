// const classesModel = require("../models/classes");

// var getAllClasses = (req, res, next) => {
//   classesModel.find({}, (err, sub) => {
//     if (err) {
//       res.status(500).json({
//         success: false,
//         message: "Internal server error",
//       });
//     } else {
//       var classes = [];
//       sub.forEach((class) => {
//         classes.push({
//           id: class._id,
//           class: class.name,
//           status: class.status,
//         });
//       });
//       res.json({
//         success: true,
//         classes: classes,
//       });
//     }
//   });
// };

// var getAllActiveClasses = (req, res, next) => {
//   classesModel.find({ status: true }, (err, sub) => {
//     if (err) {
//       res.status(500).json({
//         success: false,
//         message: "Internal server error",
//       });
//     } else {
//       var classes = [];
//       sub.forEach((classes) => {
//         classes.push({
//           id: classes._id,
//           classes: classes.name,
//           status: classes.status,
//         });
//       });
//       res.json({
//         success: true,
//         classes: classes,
//       });
//     }
//   });
// };

// var getStatusCount = (req, res, next) => {
//   classesModel
//     .aggregate([
//       { $match: {} },
//       { $group: { _id: "$status", count: { $sum: 1 } } },
//     ])
//     .then((result) => {
//       var trueCount = 0;
//       var falseCount = 0;
//       result.forEach((x) => {
//         if (x._id == true) {
//           trueCount = x.count;
//         }
//         if (x._id == false) {
//           falseCount = x.count;
//         }
//       });
//       res.json({
//         success: true,
//         active: trueCount,
//         blocked: falseCount,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         success: false,
//         message: "Internal server error",
//       });
//     });
// };

// module.exports = {
//   getAllClasses,
//   getStatusCount,
//   getAllActiveClasses,
// };

// const classesModel = require("../models/classes");

// var getAllClasses = (req, res, next) => {
//   classesModel.find({}, (err, sub) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Internal server error",
//       });
//     } else {
//       let classes = [];
//       sub.forEach((cls) => {
//         console.log("cls", cls);
//         classes.push({
//           id: cls._id,
//           class: cls.name,
//           status: cls.status,
//         });
//       });
//       res.json({
//         success: true,
//         classes: classes,
//       });
//     }
//   });
// };

// var getAllActiveClasses = (req, res, next) => {
//   classesModel.find({ status: true }, (err, sub) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Internal server error",
//       });
//     }
//     const classes = sub.map((cls) => ({
//       id: cls._id,
//       class: cls.name,
//       status: cls.status,
//     }));
//     res.json({
//       success: true,
//       classes: classes,
//     });
//   });
// };

// var getStatusCount = (req, res, next) => {
//   classesModel
//     .aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])
//     .then((result) => {
//       const counts = result.reduce((acc, curr) => {
//         acc[curr._id ? "active" : "blocked"] = curr.count;
//         return acc;
//       }, {});
//       res.json({
//         success: true,
//         ...counts,
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({
//         success: false,
//         message: "Internal server error",
//       });
//     });
// };

// module.exports = {
//   getAllClasses,
//   getStatusCount,
//   getAllActiveClasses,
// };

const classesModel = require("../models/classes");

var getAllClasses = (req, res, next) => {
  classesModel.find({}, (err, sub) => {
    console.log("sub", sub);
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    } else {
      let classes = [];
      sub.forEach((cls) => {
        console.log("cls", cls);
        classes.push({
          id: cls._id,
          class: cls.name,
          status: cls.status,
        });
      });
      res.json({
        success: true,
        classes: classes,
      });
    }
  });
};

var getAllActiveClasses = (req, res, next) => {
  classesModel.find({ status: true }, (err, sub) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
    const classes = sub.map((cls) => ({
      id: cls._id,
      class: cls.name,
      status: cls.status,
    }));
    res.json({
      success: true,
      classes: classes,
    });
  });
};

var getStatusCount = (req, res, next) => {
  classesModel
    .aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])
    .then((result) => {
      const counts = result.reduce((acc, curr) => {
        acc[curr._id ? "active" : "blocked"] = curr.count;
        return acc;
      }, {});
      res.json({
        success: true,
        ...counts,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    });
};

module.exports = {
  getAllClasses,
  getStatusCount,
  getAllActiveClasses,
};
