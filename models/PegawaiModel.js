import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize;

const Pegawai = db.define('pegawai', {
    nik: {type: Sequelize.STRING, primaryKey: true},
    nama: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Pegawai;

(async()=> {
    await db.sync();
})();