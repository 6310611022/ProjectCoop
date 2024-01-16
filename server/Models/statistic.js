module.exports = (sequelize, Sequelize) => {
    const statistic = sequelize.define(
      "statistic",
      {
        statisticID: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          field: "statisticID",
        },
        leave_rights: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "leave_rights",
        },
        VL_accumulatedDays: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "VL_accumulatedDays",
        },
        VL_total: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "VL_total",
        },
        VL_lastLeave: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "VL_lastLeave",
        },
        VL_thisLeave: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "VL_thisLeave",
        },
        VL_remaining: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "VL_remaining",
        },
        leave_count: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "leave_count",
        },
        SL_lastLeave: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "SL_lastLeave",
        },
        SL_thisLeave: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "SL_thisLeave",
        },
        SL_remaining: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "SL_lastLeave",
        },
        PL_lastLeave: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "PL_lastLeave",
        },
        PL_thisLeave: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "PL_thisLeave",
        },
        PL_remaining: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "PL_remaining",
        },
        ML_DayCount: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "ML_DayCount",
        },
        OL_DayCount: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "OL_DayCount",
        },
        STL_DayCount: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          field: "SL_lastLeave",
        },
      },
      {
        tableName: "statistic",
      }
    );
  
    return statistic;
  };
  