const fetchData = callback => {
   console.log("I am executed after 2 seconds!");
   setTimeout(() => {
       callback('Okay'); 
   }, 1500);
};


setTimeout(() => {
    
    fetchData( text => {  // Passing text() as a parameter for fetchData. Text() will be executed by the line call('Okay').
        console.log(text)
    } )
}, 2000);

let test = example => {
    console.log("I am checking a behaivour")
    example(2) // here I am executing the add function
}

setTimeout(() => {
    test( add => {
        console.log( 2*add)
    }) // passing a anonymous func here
}, 1000);


/* fetchData takes callback an argument which is an arrowFunction. */