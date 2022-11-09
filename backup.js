import express from "express";
import AM_ALKHARE from "../controllers/am_alkhare.js";
import AM_MARIN_OPERATION from "../controllers/am_alkhare.js";
import AM_MOAN_SHDO from "../controllers/am_alkhare.js";
import AM_NORTH_GREEN from "../controllers/am_alkhare.js";
import AM_OSMAN_DEGNA from "../controllers/am_alkhare.js";
import AM_SH_W_TOGET_S from "../controllers/am_alkhare.js";
import AM_SHIP_EX_ARR from "../controllers/am_alkhare.js";
import AM_SOUTH_CO_DIS from "../controllers/am_alkhare.js";
import AM_SOUTH_CONT_SHIP from "../controllers/am_alkhare.js";
import AM_SOUTH_CONT_ST_AR from "../controllers/am_alkhare.js";
import AM_SOUTH_MOVE_SHIP from "../controllers/am_alkhare.js";
import AM_SOUTH_SOPA from "../controllers/am_alkhare.js";

const router = express.Router()

//1.AM_ALKHARE
const _AM_ALKHARE = new AM_ALKHARE('AM_ALKHARE')
router.get('/AM_ALKHARE',_AM_ALKHARE.getAllData)
// router.get('/AM_ALKHARE/:id',getUserById)

//2.MARIN OPERATION
const _AM_MARIN_OPERATION = new AM_MARIN_OPERATION('AM_MARIN_OPERATION')
router.get('/AM_MARIN_OPERATION',_AM_MARIN_OPERATION.getAllData)
router.get('/AM_MARIN_OPERATION/:id',_AM_MARIN_OPERATION.getDataById)

//3.AM_MOAN_SHDO
const _AM_MOAN_SHDO = new AM_MOAN_SHDO('AM_MOAN_SHDO')
router.get('/AM_MOAN_SHDO',_AM_MOAN_SHDO.getAllData)
router.get('/AM_MOAN_SHDO/:id',_AM_MOAN_SHDO.getDataById)

//4.AM_NORTH_GREEN
const _AM_NORTH_GREEN = new AM_NORTH_GREEN('AM_NORTH_GREEN')
router.get('/AM_NORTH_GREEN',_AM_NORTH_GREEN.getAllData)
router.get('/AM_NORTH_GREEN/:id',_AM_NORTH_GREEN.getDataById)

//5.AM_OSMAN_DEGNA
const _AM_OSMAN_DEGNA = new AM_OSMAN_DEGNA('AM_OSMAN_DEGNA')
router.get('/AM_OSMAN_DEGNA',_AM_OSMAN_DEGNA.getAllData)

//6.AM_SH_W_TOGET_S
const _AM_SH_W_TOGET_S = new AM_SH_W_TOGET_S('AM_SH_W_TOGET_S')
router.get('/AM_SH_W_TOGET_S',_AM_SH_W_TOGET_S.getAllData)

//7.AM_SHIP_EX_ARR
const _AM_SHIP_EX_ARR = new AM_SHIP_EX_ARR('AM_SHIP_EX_ARR')
router.get('/AM_SHIP_EX_ARR',_AM_SHIP_EX_ARR.getAllData)

//8.AM_SOUTH_CO_DIS
const _AM_SOUTH_CO_DIS = new AM_SOUTH_CO_DIS('AM_SOUTH_CO_DIS')
router.get('/AM_SOUTH_CO_DIS',_AM_SOUTH_CO_DIS.getAllData)

//9.AM_SOUTH_CONT_SHIP
const _AM_SOUTH_CONT_SHIP = new AM_SOUTH_CONT_SHIP('AM_SOUTH_CONT_SHIP')
router.get('/AM_SOUTH_CONT_SHIP',_AM_SOUTH_CONT_SHIP.getAllData)

//10.AM_SOUTH_CONT_ST_AR
const _AM_SOUTH_CONT_ST_AR = new AM_SOUTH_CONT_ST_AR('AM_SOUTH_CONT_ST_AR')
router.get('/AM_SOUTH_CONT_ST_AR',_AM_SOUTH_CONT_ST_AR.getAllData)

//11.AM_SOUTH_MOVE_SHIP
const _AM_SOUTH_MOVE_SHIP = new AM_SOUTH_MOVE_SHIP('AM_SOUTH_MOVE_SHIP')
router.get('/AM_SOUTH_MOVE_SHIP',_AM_SOUTH_MOVE_SHIP.getAllData)

//12.AM_SOUTH_SOPA
const _AM_SOUTH_SOPA = new AM_SOUTH_SOPA('AM_SOUTH_SOPA')
router.get('/AM_SOUTH_SOPA',_AM_SOUTH_SOPA.getAllData)


// router.get('/:id',getUserById)
// router.post('/',createAmAlkhare)
// router.patch('/:id',updateAmAlkhare)
// router.delete('/:id',deleteAmAlkhare)
//

export default router