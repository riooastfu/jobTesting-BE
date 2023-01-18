import Pegawai from "../models/PegawaiModel.js";
import DataPegawai from "../models/DataPegawaiModel.js";

export const createDataPegawai = async (req,res) => {
    try {
        await DataPegawai.create(req.body);
        res.status(201).json({ msg: "Pegawai ditambah" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDTPegawai = async (req, res) => {
    try {
        await DataPegawai.update(req.body, {
            where: {
                nik: req.params.nik
            }
        });
        res.status(200).json({ msg: "Pegawai terupdate" });
    } catch (error) {
        console.log("error",error.message);
    }
}

export const getPegawai = async (req, res) => {
    try {
        const response = await DataPegawai.findAll({
            include: [{
                model: Pegawai
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPegawaiByNIK = async (req, res) => {
    try {
        const response = await DataPegawai.findOne(
            {
                where: {
                    nik: req.params.nik
                },
                include: [{
                    model: Pegawai
                }]
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPegawai = async (req, res) => {
    try {
        console.log("req: ", req.body);

        const {nik, nama, tempat_lahir, tgl_lahir, departemen, pt, lokasi_kerja} = req.body
        await Pegawai.create({nik, nama});
        await DataPegawai.create({tempat_lahir, tgl_lahir, departemen, pt, lokasi_kerja, nik});
        res.status(201).json({ msg: "Pegawai ditambah" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePegawai = async (req, res) => {
    try {
        await Pegawai.update(req.body, {
            where: {
                nik: req.params.nik
            }
        });
        await DataPegawai.update(req.body, {
            where: {
                nik: req.params.nik
            }
        })
        res.status(200).json({ msg: "Pegawai terupdate" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDataPegawai = async (req, res) => {
    try {
        await DataPegawai.destroy({
            where: {
                nik: req.params.nik
            }
        });
        res.status(200).json({ msg: "Data Pegawai dihapus" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePegawai = async (req, res) => {
    try {
        await Pegawai.destroy({
            where: {
                nik: req.params.nik
            }
        });
        res.status(200).json({ msg: "Pegawai dihapus" });
    } catch (error) {
        console.log(error.message);
    }
}