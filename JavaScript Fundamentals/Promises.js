 const fetchData = () => {
     const promise = new Promise((resolve, reject) => { //  Resolve and Reject each of them are async functions
        setTimeout(() => {
            resolve('Done');

        }, 1500);
    });
     return promise;

 };

 setTimeout( () => {
     console.log("Timer is Done!");
     fetchData()
     .then( text => {
         console.log(text);
         return fetchData()}) // Since it returns fetchData(), the first 'then' now has a return type Promise.
         .then( text => {
         console.log(text);
     });

 }, 2000);
 