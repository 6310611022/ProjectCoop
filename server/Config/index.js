const { Sequelize } = require('sequelize')
require("dotenv").config('../.env');

const sequelize = new Sequelize(
    'request_leave',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        define:{
            timestamps: false
        }
    }
);

const dbSeq = {};

dbSeq.Sequelize = Sequelize;
dbSeq.sequelize = sequelize;

dbSeq.users = require('../Models/users')(sequelize,Sequelize);
dbSeq.statistic = require('../Models/statistic')(sequelize,Sequelize);

dbSeq.users.hasMany(
    dbSeq.statistic,
    {
        foreignKey:{name:'citizenID_fk', field:'citizenID_fk'}
    }
);

dbSeq.statistic.belongsTo(dbSeq.users,{foreignKey:'citizenID_fk'});

module.exports = dbSeq