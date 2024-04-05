import express from 'express';
import { create,view,update,remove} from '../controller/medical.controller';

const router = express.Router();

router.post("/create", create);
router.put("/update", update);
router.get("/view", view);
router.delete("/remove", remove);

export default router;