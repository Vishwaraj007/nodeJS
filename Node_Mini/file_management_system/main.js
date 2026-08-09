import fs from "node:fs/promises";
import path from "path";
import readline from "node:readline/promises";
import { text } from "node:stream/consumers";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let fname;
let data;
let f_path;
let files;
console.log("entered into the code ");
while(true)
{
console.log("===== FILE MANAGER =====\n1. Create file\n2. Read file\n3. Write file\n4. Append to file\n5. Rename file\n6. Delete file\n7. Create directory\n8. List directory\n9. File information\n10. Traverse directory\n11. Delete directory\n0. Exit");

let choise = Number(await rl.question("enter your choise : "));
console.log(choise);

 switch (choise) {
    case 1:
        console.log("You have choosen to make the file");
        fname = await rl.question("Enter the name of the file");
        data = await rl.question("enter data to store into the file");
        f_path = path.join("./files",fname);
        await fs.writeFile(f_path,data);
        break;


    case 2:
        console.log("you have choosen to read the file....");
        console.log("available files are :");
        files = await fs.readdir("./files");
        console.log(files);
        fname = await rl.question("enter the name of file");
        f_path = path.join("./files",fname);
        data = await fs.readFile(f_path,"utf-8");
        console.log("file content are : ");
        console.log(data);

        break;

    case 3:
        console.log("you have choosen to write the fiel : ");
        files = await fs.readdir("./files");
        console.log("available files are : \n");
        console.log(files);
        fname = await rl.question("enter the name of file : ");
        f_path = path.join("./files",fname);
        data = await rl.question("enter the data to write in the files : ");
        await fs.writeFile(f_path,data);
        console.log("data successfully wroted into te file....");
        break;

    case 4:
        console.log("You have choosen to append the file.....");
        files = await fs.readdir("./files");
        console.log("Available files are : ");
        console.log(files);
        fname = await rl.question("enter the name of file tosppend the data : ");
        f_path = path.join("./files",fname);
        data = await rl.question("enter the data : ");
        await fs.appendFile(f_path,data);
        console.log("data appended successfully.....");
        break;

    case 5:
        console.log("You have choosen to rename the file....");
        files = await fs.readdir("./files");
        console.log("Available FIles are : ");
        console.log(files);

        fname = await rl.question("enter the name of file that you want to rename : ");
        let new_name = await rl.question("Enter the new name of file : ");

        let old_path = path.join("./files",fname);
        let new_path = path.join("./files",new_name);

        await fs.rename(old_path,new_path); // changing the entire path instead of just names.....
        console.log("name changed...");
        break;

    case 6:
        console.log("You choosen to delete the file....");
        files = await fs.readdir("./files");
        console.log("Available files are : ");
        console.log(files);
        fname = await rl.question("enter the name of file to delete...");
        f_path = path.join("./files",fname);

        await fs.unlink(f_path);
        console.log("file deleted successfully....");
        break;
 
    case 7:
        console.log("you chooen to make a directory...");
        let dirname = await rl.question("enter the name of directory");
        f_path = path.join("./files",dirname);
        await fs.mkdir(f_path);
        console.log("directory created...");

    case 9:
        console.log("you have choosen to get File Infromation....");
        files = await fs.readdir("./files");
        console.log("Available files are : ");
        console.log(files);
        fname = await rl.question("enter the name file : ");
        f_path = path.join("./files",fname);
        let stats = await fs.stat(f_path);
        console.log(stats);
        break;


    case 0:
        console.log("thank you for visiting my file management system......");
        break;

    
    default:
        console.log("Wrong choise.....Try Again");
        break;
 }



}

























































































