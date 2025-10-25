// Function with parameter union type

function printId(id: string | number){
    console.log(`Id - ${id} is type of ${typeof id}`);
    
}

printId("#10");
printId("number");