// Example functions that get tested

const tests = {}

tests.multiplyBy3 = function(param){
	if(typeof param !== 'number'){
		var err = new Error('Incorrect parameter type');
  	throw(err);
	}else{
		return param * 3
	}
}

module.exports = tests