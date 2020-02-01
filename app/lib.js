// Example functions that get tested

const tests = {}

tests.multiplyBy3 = function(param){
	if(typeof param !== 'number'){
		return {"Error": 'invalid param type'}
	}else{
		return param * 3
	}
}

tests.passNumAndCB = function(param, cb){
	if(typeof param !== 'number'){
		var err = new Error('Incorrect parameter type');
  	throw(err);
	}else{
		return cb(param * 3)
	}
}

module.exports = tests