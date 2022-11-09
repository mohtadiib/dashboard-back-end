import express from "express";
import Crud from "../controllers/crud.js";

const router = express.Router()

//1.PORTS
const _ports = new Crud('PORTS')
router.get('/ports',_ports.getAllData)
// router.get('/AM_ALKHARE/:id',getUserById)

//2.OPERATIONS
const _operation = new Crud('operations')
router.get('/operations',_operation.getAllData)



// router.get('/:id',getUserById)
// router.post('/',createAmAlkhare)
// router.patch('/:id',updateAmAlkhare)
// router.delete('/:id',deleteAmAlkhare)
//

export default router