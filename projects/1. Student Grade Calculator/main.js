const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const cal = document.getElementById("cal");
const dtm = document.getElementById("dtm");

const result_table = document.getElementById("result_Table");

step2.classList.add("hidden");
step3.classList.add("hidden");

let myname;
let nom;
let i = 0;
let markSum = 0;

let subArr = [];
let markArr = [];

dtm.addEventListener("click", () => {

    myname = document.getElementById("name").value;
    nom = Number(document.getElementById("subjectNum").value);

    if (myname && Number.isInteger(nom) && nom > 0) {
        step2.classList.remove("hidden");
        step1.classList.add("hidden");

    } else {
        alert("enter correct information");
    }
});

cal.addEventListener("click", () => {

    if (i < nom) {

        let subName = document.getElementById("subName").value;
        let mark = Number(document.getElementById("mark").value); // FIXED

        if(subName.trim() !=="" && Number.isInteger(mark) && mark <= 70 && mark>=0)
        {
            subArr.push(subName);
            markArr.push(mark);

            document.getElementById("subName").value = "";
            document.getElementById("mark").value = "";

            i += 1;
        }
        else{
            alert("Enter correct information...!");
        }
    }

    if (i === nom) {
        alert("All subjects entered");

        console.log("Subjects:", subArr);
        console.log("Marks:", markArr);
        step2.classList.add("hidden");
        step3.classList.remove("hidden");


        for(let i=0;i<nom;i++)
        {
            let new_row = result_table.insertRow();
            let sub_cell = new_row.insertCell(0);
            let mark_cell = new_row.insertCell(1);
            let percentage_cell = new_row.insertCell(2);
            document.getElementById("result_name").innerHTML = ""+myname;

            sub_cell.textContent = ""+subArr[i];
            mark_cell.textContent = ""+markArr[i]+"/70";
            markSum += markArr[i];
            percentage_cell.textContent = ""+((markArr[i]/70)*100).toFixed(2)+"%";

        }
        let percentage = (markSum/(70*nom))*100;
        document.getElementById("percentage").innerHTML = ""+percentage.toFixed(2)+"%.";

    }
});