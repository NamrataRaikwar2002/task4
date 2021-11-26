var n=require("readline-sync");
const chalk = require('chalk');
console.log(chalk.red('Hello world!'));
var name=n.question("what's your name? ");
console.log(chalk.blue("welcome "+name+" Do you know Namrata? "));
var score=0;
var totalscore=10
function ques(question,answer){
    for (var i=0;i<question.length;i++){
            var q=n.question(question[i])
    for (var j=i;j<=i;j++){
                if (q.toUpperCase()===answer[j].toUpperCase()){
                    score=score+2;
                    console.log(score);
                }
                else{
                    console.log("wrong!!");
                }
            }
        }
    }
    
q=["where is she from? ","what is she doing nowadays? ","what is her age? ","what is her favourite colour? ","Did she a NAVODAYAN? "]
a=["Delhi","Coding course","19","Black","Yes"]
ques(q,a)
if (totalscore===score){
    console.log(name,'\"high score is\"',score);
}





