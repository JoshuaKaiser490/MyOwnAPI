import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
  usersArray,
} from "../controller/controller.js";
import { hideSensitiveInfo } from "../middleware/Logger.js";

const router = Router();

router.use("/:id", (req, res, next) => {
  const { id } = req.params;
  const user = usersArray.find((user) => user.id === parseInt(id));
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(404).json({ error: `User mit der ID ${id} nicht gefunden` });
  }
});

router.post("/", createUser);
router.get("/:id", hideSensitiveInfo, getUser);
router.put("/:id", updateUser);
router.patch("/:id", updateUser);

export default router;
