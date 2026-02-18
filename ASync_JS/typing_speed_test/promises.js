const request = new Promise((resolve,reject)=>{
    // console.log("creating a new Promise");
    // resolve("promise resolved");
    resolve({firstName:"Anshika",lastName:"Arora"});

    reject("rejected")
})

request.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("finally block executed");
})