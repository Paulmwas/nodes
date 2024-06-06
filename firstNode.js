process.stdin.on('data', (chunk)=>{
    const input = chunk.toString().trim();
    if(input === 'quit'){
        process.exit();
    }
    try{
        const value = eval(input);
        console.log(`${value}`);
    } catch{
        console.log('Check Your entries then try again!!!');
    }
    process.stdout.write("Please enter your equation: ");
});
process.stdout.write("Please enter your equation: ");