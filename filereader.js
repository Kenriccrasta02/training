const fs=require('fs').promises;

async function wrt() {
    try{
        await fs.writeFile('filess.txt',"hello niveus");
    }
    catch(error){
        console.log("There was an error");
    }
}

async function func(path) {
    try{
        const data=await fs.readFile(path);
        console.log(data.toString());
    }
    catch(error)
    {
        console.log("error reading the file")
    }
}
wrt();
func("./filess.txt");