import { Sequelize } from "sequelize";
import db from "../config/Database.js"

import Pegawai from "./PegawaiModel.js";

const {DataTypes} = Sequelize;

const DataPegawai = db.define('dt_pegawai', {
    tempat_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    departemen: DataTypes.STRING,
    pt: DataTypes.STRING,
    lokasi_kerja: DataTypes.STRING,
    nik: DataTypes.STRING
}, {
    freezeTableName: true
});

DataPegawai.hasOne(Pegawai, { foreignKey: 'nik' });
DataPegawai.belongsTo(Pegawai, { foreignKey: 'nik' });

export default DataPegawai;