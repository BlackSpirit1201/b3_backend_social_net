import { Router } from "express";
import { testUser, register, login, profile, listUsers, updateUser} from "../controllers/user.js";
import { ensureAuth } from "../middlewares/auth.js";

const router = Router();

// Definir rutas de user
router.get('/test-user', testUser, ensureAuth);
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', ensureAuth, profile)
router.get('/list/:page?', ensureAuth, listUsers)  // "?" es para dejar la variable opcional
router.put('/update', ensureAuth, updateUser);
//Exportar el Router
export default router;