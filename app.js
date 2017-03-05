function accessObjectInArray(arr){
	//Print the parameter being passed through
	console.log("Parameter: ")
	console.log(arr);

	//How can we tell what type of data this is?
	//By it's notation, the top level is bracket notation, therefore the parameter is an array

	//What methods can we use for this item?
	//Array methods

	//Access and print the first object in the parameter 
	console.log(arr[0]);

	//Access and print the third object in the parameter
	console.log(arr[2]);

	//Iterate through the array to print all the objects in the parameter
	for (var i = 0; i < arr.length; i++){
		//Can you concatanete a string to an object?
		console.log("\nAll objects");
		console.log(arr[i]);

		//Iterate through the key:value pairings and print all the keys and their values
		for (var key in arr[i]){
			console.log("\nAll values in object");
			console.log(key);
		}
	}
	//Clean up your code by creating variable names and setting their values
}

var objInArr = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	}
];

console.log("*** Accessing Objects in Arrays ***\n");
accessObjectInArray(objInArr);
console.log("\n*** End ***\n")

function accessArrayInObject(obj){
	//Is the parameter an array or an object?

	//Print the paramter being passed through the function
	console.log("Parameter: ")
	console.log(obj);

	//Iterate through the object
	for (var key in obj){
		console.log(obj[key]);
		if (key === "cars"){
			for (var i = 0; i < obj[key].length; i++){
				console.log(obj[key][i]);
				for (var nestedKey in obj[key][i]){
					console.log(obj[key][i][nestedKey]);
				}
			}
		}
	}
	//Clean up your code by creating variable names and setting their values
}

var arrInObj = {
	"name":"John",
	"age":30,
	"cars": [
	    { "name":"Ford"},
	    { "name":"BMW"},
	    { 
	    	"name":"Fiat", 
	    	"models":[ 
	    		"500", "Panda" 
	    	] 
	    }
	]
};

console.log("*** Accessing Arrays in Objects ***\n");

accessArrayInObject(arrInObj);

console.log("\n*** End ***\n");

function accessObjectInObject(obj){
	//Print the parameter
	console.log(obj);

	//Iterate through and print the values in the object
	for (var key in obj){
		console.log("Keys " + key);
		console.log("Values ");
		console.log(obj[key]);
		//Create a conditional to check if the key is "topping"
		if (key === "topping"){
			//Iterate through and print the values in the key "topping"
			for (var i = 0; i < obj[key].length; i++){
				console.log(obj[key][i]);
				//Iterate through and print the key value pairs for each object in the array "toppings"
				for (var nestedKey in obj[key][i]){
					console.log(nestedKey);
					console.log(obj[key][i][nestedKey]);
				}
			}
		}
	}
	//Clean up your code by creating variable names and setting their values
}

var objInObj = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
		]
}

console.log("*** Accessing an Object in an Array in an Object ***");

accessObjectInObject(objInObj);

console.log("\n*** End ***\n");

