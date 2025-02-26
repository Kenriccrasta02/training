const fs=require('fs').promises;

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

func("./filess.txt");