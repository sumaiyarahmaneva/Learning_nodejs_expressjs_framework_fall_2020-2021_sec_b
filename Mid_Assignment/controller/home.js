const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
	}
})

router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		console.log(results);
		res.render('home/userlist', {userlist: results});
	});

});
//medicinelist
router.get('/medicinelist', (req, res)=>{

	userModel.getAllMedicine(function(results){
		console.log(results);
		res.render('home/medicinelist', {medicinelist: results});
	});

});
//medicinedetails
router.get('/medicinedetails', (req, res)=>{

	userModel.getAllMedicineDetails(function(results){
		console.log(results);
		res.render('home/medicinedetails', {medicinedetails: results});
	});

});

module.exports = router;