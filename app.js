let ready= true; //true to get the resolved output

const test= new Promise((resolve,reject)=>
{
    if(ready){
        const result="Promise resolved";
        resolve(result);
    }
    else{
        const notready="Promise rejected";
        reject(notready);
    }
})


const fun=()=>{
    test.then(val=>{
        console.log(val);
    })
    .catch(err=>{
        console.log("ERROR")
        console.log(err);
    })
}

fun();
