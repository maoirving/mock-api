var express = require("express");
var router = express.Router();

// 职位列表选项
router.get("/delivery/options", async function (req, res, next) {
  setTimeout(() => {
    res.json({
      DefaultDate: "2022-06-21T00:00:00.0000000+00:00",
      DefaultTimeSlot: "14:00-17:00",
      Dates: [
        // "2022-06-21T00:00:00.0000000+00:00",
        // "2022-06-22T00:00:00.0000000+00:00",
        "2022-06-23T00:00:00.0000000+00:00",
        "2022-06-24T00:00:00.0000000+00:00",
        "2022-06-27T00:00:00.0000000+00:00",
        "2022-06-28T00:00:00.0000000+00:00",
        "2022-06-29T00:00:00.0000000+00:00",
        "2022-06-30T00:00:00.0000000+00:00",
        "2022-07-01T00:00:00.0000000+00:00",
        "2022-07-04T00:00:00.0000000+00:00",
      ],
      FromTime: "14:00",
      CutoffGrootgoed: "14:00",
      CutoffKleingoed: "19:00",
      TimeSlots: [
        {
          Value: "07:00-14:00",
          Title: "tussen 7:00 en 14:00",
          DisabledNextDay: true,
        },
        {
          Value: "14:00-17:00",
          Title: "tussen 14:00 en 17:00",
          DisabledNextDay: false,
        },
        {
          Value: "07:00-14:00",
          Title: "tussen 7:00 en 14:00",
          DisabledNextDay: true,
        },
        {
          Value: "14:00-17:00",
          Title: "tussen 14:00 en 17:00",
          DisabledNextDay: false,
        },
      ],
      IsNextDay: true,
      OverrideCurrentTime: "0001-01-01T00:00:00.0000000",
    });
  }, 1000);
});

module.exports = router;
