let username = "       misterklinslikestheweekend     ";
//remove all spaces, change the casing, get the first character
console.log(username.trim().toUpperCase().charAt(0)); //M
//first the trim method runs and returns
//misterklinslikestheweekend
//then the toUpperCase method runs and returns
// MISTERKLINSLIKESTHEWEEKEND
//then charat(0) runs on the results of to toUpperCase and returns
//M

//if the chaining get long
// console.log(username
//     .trim()
//     .toUpperCase()
//     .charAt(0));