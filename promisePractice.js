var p = new Promise(function(resolve, reject) {
   if (resolve) {
      resolve(22);  // fulfilled successfully
   }
   else {
      reject('ok');  // error, rejected
   }
});

p.then((res) => console.log(res));