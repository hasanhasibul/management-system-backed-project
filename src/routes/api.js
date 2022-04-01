const express = require('express');
const userController =  require('../controllers/userController')
const membersControllers =  require('../controllers/membersControllers')
const trainersControllers =  require('../controllers/trainersControllers')
const packagesController =  require('../controllers/packagesController')
const planController =  require('../controllers/planController')
const memberShipAsignController =  require('../controllers/memberShipAsignController')
const scheduleController =  require('../controllers/scheduleController')
const verifyAuthMiddleware =  require('../middlewares/verifyAuthMiddleware')
const router = express.Router();

// user api end point
router.post('/createUser',userController.createUser);
router.post('/userLogin',userController.userLogin);

// members api end point
router.post('/createMember',verifyAuthMiddleware.verifyAuthToken,membersControllers.createMember);
router.get('/readMember',verifyAuthMiddleware.verifyAuthToken,membersControllers.readMember);
router.post('/updateMember',verifyAuthMiddleware.verifyAuthToken,membersControllers.updateMember);
router.post('/deleteMember',verifyAuthMiddleware.verifyAuthToken,membersControllers.deleteMember);

// trainer api end point
router.post('/createTrainer',verifyAuthMiddleware.verifyAuthToken,trainersControllers.createTrainer);
router.get('/readTrainers',verifyAuthMiddleware.verifyAuthToken,trainersControllers.readTrainers);
router.post('/updateTrainer',verifyAuthMiddleware.verifyAuthToken,trainersControllers.updateTrainer);
router.post('/deleteTrainer',verifyAuthMiddleware.verifyAuthToken,trainersControllers.deleteTrainer);

// package api end point
router.post('/createPackage',verifyAuthMiddleware.verifyAuthToken,packagesController.createPackage);
router.get('/readPackage',verifyAuthMiddleware.verifyAuthToken,packagesController.readPackage);
router.post('/updatePackage',verifyAuthMiddleware.verifyAuthToken,packagesController.updatePackage);
router.post('/deletePackage',verifyAuthMiddleware.verifyAuthToken,packagesController.deletePackage);

// plan api end point 
router.post('/createPlan',verifyAuthMiddleware.verifyAuthToken,planController.createPlan);
router.get('/readPlan',verifyAuthMiddleware.verifyAuthToken,planController.readPlan);
router.post('/updatePlan',verifyAuthMiddleware.verifyAuthToken,planController.updatePlan);
router.post('/deletePlan',verifyAuthMiddleware.verifyAuthToken,planController.deletePlan);

// membership api end point 
router.post('/createMembership',verifyAuthMiddleware.verifyAuthToken,memberShipAsignController.createMembership);
router.get('/readMembership',verifyAuthMiddleware.verifyAuthToken,memberShipAsignController.readMembership);
router.post('/updateMembership',verifyAuthMiddleware.verifyAuthToken,memberShipAsignController.updateMembership);
router.post('/deleteMembership',verifyAuthMiddleware.verifyAuthToken,memberShipAsignController.deleteMembership);

// schedule api point
router.post('/createSchedule',verifyAuthMiddleware.verifyAuthToken,scheduleController.createSchedule);
router.get('/readSchedule',verifyAuthMiddleware.verifyAuthToken,scheduleController.readSchedule);





module.exports = router ;