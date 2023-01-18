import express from "express";
import { getPegawai, createPegawai, updatePegawai, getPegawaiByNIK, deleteDataPegawai, deletePegawai,updateDTPegawai, createDataPegawai} from "../controller/PegawaiController.js";

const router = express.Router();

router.post('/dt_pegawai');
router.patch('/dt_pegawai/:nik', updateDTPegawai);

router.get('/pegawai', getPegawai);
router.get('/pegawai/:nik', getPegawaiByNIK);
router.post('/pegawai', createPegawai);
router.patch('/pegawai/:nik', updatePegawai);
router.delete('/dt_pegawai/:nik', deleteDataPegawai);
router.delete('/pegawai/:nik', deletePegawai);

export default router;