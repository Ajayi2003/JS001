import path from "path"
import fs from "fs"

const newPath = "C:\Users\SEGUN PC\Documents\React\DSA\ignore.index.js"

console.log(path.basename(newPath));
console.log(path.extname(newPath));
console.log(path.dirname(newPath));
console.log(path.join(__dirname, "index.ts"));


try {
    const data= fs.readFileSync(path.join(__dirname, "ignore", "text.txt"))

    
} catch (error) {
    
}



const fileread= async()=>{
    try{
        const data = await fsPromise.readFile(path.join())
    }
}