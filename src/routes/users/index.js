import { Router } from "express";

import { userController } from "../../controllers";

const router = Router();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
// router.post("/socialLogin", userController.socialLogin);

export default router;
