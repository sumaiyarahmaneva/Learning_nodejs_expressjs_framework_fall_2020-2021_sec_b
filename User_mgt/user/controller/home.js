const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	
	//req.session.uname != null
	if(req.cookies['uname'] != null){
		
		res.render('home/index');
	}else{
		res.redirect('/login');
	}
})


router.get('/userlist', (req, res)=>{

	var users = [
			['1','Wiley', 'CSE', '3.8'],
			['2','Rose', 'CSSE', '3.9'],
			['3','Senil', 'SE', '3.7']
		];

	res.render('home/userlist', {userlist: users});
});

module.exports = router;