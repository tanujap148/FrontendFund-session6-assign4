function myFunction(){
	var arr = [{name:"Manohar",age:35, salary:50000, city:"Jaipur", state:"Rajasthan", pincode:"302001"},
				{name:"Sudhakaran",age:30, salary:45000, city:"Kannur", state:"Kerala", pincode:"670141"},
				{name:"Mukesh",age:32, salary:47000, city:"Ranchi", state:"Jharkhand", pincode:"834001"},
				{name:"Naresh",age:28, salary:40000, city:"Bangalore", state:"Karnataka", pincode:"560037"},
				{name:"Rahul",age:28, salary:35000, city:"Bhopal", state:"Madhya-Pradesh", pincode:"462003"}];
	var i = 1;
	while(i<=5){
	console.log("\nEmployee-"+i+":");
	for(var key in arr[i]){
		console.log(key+" -->"+arr[i][key]);
	}
	i++;
	}
}