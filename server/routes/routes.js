const express=require('express');
const {handleGenerateNewShortURL,analytics}=require('../controllers/controller')
const router=express.Router();


router.post('/',handleGenerateNewShortURL); //Used to update data in db
router.get('/analytics/:shortId',analytics)

module.exports=router;