const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(user, callback){
		var sql = "select * from user where id='"+user.id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	getByIdM: function(medicine, callback){
		var sql = "select * from medicine where id='"+medicine.id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	//customer
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	
	//medicinelist
	getAllMedicine: function(callback){
		var sql = "select * from medicine";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	//medicinedetails
	getAllMedicineDetails: function(callback){
		var sql = "select * from medicine";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	//user_insert_update_delete
	insert: function(user, callback){
		var sql = "insert into user VALUES ('', '"+user.username+"' , '"+user.password+"' , '"+user.type+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		//console.log(user);
		var sql = "UPDATE `user` SET `username`='"+user.username+"',`password`= '"+user.password+"' ,`type`='"+user.type+"' WHERE id='"+user.id+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(user, callback){
		var sql = "DELETE FROM `user` WHERE id='"+user.id+"'";
		db.execute(sql, function(status){
			callback(status);
		});

	},
	//Create_medicine
	insertMedicine: function(medicine, callback){
		var sql = "insert into medicine VALUES ('', '"+medicine.medicinename+"' ,'"+medicine.type+"', '"+medicine.price+"' , , '"+medicine.availability+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	//medicine_delete
	
	deleteMedicine: function(medicine, callback){
		var sql = "DELETE FROM `medicine` WHERE id='"+medicine.id+"'";
		db.execute(sql, function(status){
			callback(status);
		});

	}
	//medicine_edit
	editMedicine: function(medicine, callback){
		//console.log(user);
		var sql = "UPDATE `medicine` SET `medicinename`='"+medicine.medicinename+"',`type`= '"+medicine.type+"' ,,`price`= '"+medicine.price+"' ,`availability`='"+medicine.availability+"' WHERE id='"+medicine.id+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	//searchmedicine
	ajaxSearchMedicine: function(data,callback){
		var sql = "select * from medicine where medicinename='"+medicine.medicinename+"'";
		db.getResults(sql, function(results){
			console.log(results);
			callback(results);
		});
	}
	//customercartlist
	getAllCustomerCartList: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	
}