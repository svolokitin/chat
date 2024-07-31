import Router from 'express';
import controller from './controller.js';

const router = new Router();

router.get('/users');
router.get('/user:id');
router.post('/reg', controller.registration);
router.post('/log', controller.login);
router.put('/user:id');
router.delete('/userDel:id', controller.deleteUser);

export default router;
