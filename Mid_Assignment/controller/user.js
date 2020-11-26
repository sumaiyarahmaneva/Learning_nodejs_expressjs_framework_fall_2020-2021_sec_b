const express = require('express');
const userModel	= require.main.require('./models/userModel');
const router = express.Router();

router.get('/create', (req, res)=>{
	res.render('user/create'); 
})

//Create Customer

router.post('/create', (req, res)=>{

	var user = {
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/create');
		}
	});
})

//edit customer
router.get('/edit/:id', (req, res)=>{

	var user ={
		id: req.params.id
	};
	userModel.getById(user, function(results){
		//console.log(results);
		res.render('user/edit', {value: results});
	});
})


router.post('/edit/:id', (req, res)=>{

	var user = {
		id 		: 	req.body.id,
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};
	userModel.update(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/edit/:id');
		}
	});
})

//delete customer
router.get('/delete/:id', (req, res)=>{
	var user ={
		id: req.params.id
	};
	userModel.getById(user, function(results){
		console.log(results);
		res.render('user/delete', {value: results});
	});
})

router.post('/delete/:id', (req, res)=>{
	var user ={
		id: req.params.id
	};
	userModel.delete(user, function(status){
		if(status)
		{
			res.redirect('/home/userlist');	
		}
		else
		{
			res.redirect('user/delete/:id');
		}
		
	});
})

//delete medicine
router.get('/deleteMedicine/:id', (req, res)=>{
	var medicine ={
		id: req.params.id
	};
	userModel.getByIdM(medicine, function(results){
		console.log(results);
		res.render('user/deleteMedicine', {value: results});
	});
})

router.post('/deleteMedicine/:id', (req, res)=>{
	var medicine ={
		id: req.params.id
	};
	userModel.deleteMedicine(medicine, function(status){
		if(status)
		{
			res.redirect('/home/medicineDetails');	
		}
		else
		{
			res.redirect('user/deleteMedicine/:id');
		}
		
	});
})

//edit medicine
router.get('/editMedicine/:id', (req, res)=>{

	var medicine ={
		id: req.params.id
	};
	userModel.getByIdM(medicine, function(results){
		//console.log(results);
		res.render('user/editMedicine', {value: results});
	});
})


router.post('/editMedicine/:id', (req, res)=>{

	var medicine = {
		id 		: 	req.body.id,
		medicinename: 	req.body.medicinename,
		type	: 	req.body.type,
		price: 	req.body.price,
		availability: 	req.body.availability
	};
	userModel.editMedicine(medicine, function(status){
		if(status){
			res.redirect('/home/medicineDetails');
		}else{
			res.redirect('user/editMedicine/:id');
		}
	});
})


module.exports = router;
