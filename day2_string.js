//level-1
let challenge='30 Days Of JavaScript';
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.slice(3,))
console.log(challenge.includes("Script"))
console.log(challenge.split(" "))
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","))
console.log(challenge.replace("JavaScript","Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf("because"))
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"))
console.log("30 Days Of JavaScript  ".trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("Script"))
console.log(challenge.match(/a/g))
console.log(challenge.concat(" ",challenge))
console.log(challenge.repeat(2))

//level-2
let n1=parseInt('10');
let n2=parseInt('9.8');
console.log(typeof n1===typeof 10)
console.log(typeof n2 === typeof 10)
console.log("python".includes("on"))
console.log("jargon".includes("on"))
function randomN1ToN2(n1=0,n2){
    console.log(Math.floor(Math.random()*n2+n1))
}
randomN1ToN2(0,50)
 
function randomChar(str){
    console.log(str[Math.floor(Math.random() * str.length)])
}
randomChar("Javascript")
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');

//level-3
let sent='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sent.match(/love/gi).length)
let sentence = '%I$am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewading as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence=sentence.replace(/[%@$&#;!?.,]+/g,"").toLowerCase();
console.log(sentence)
function countFreq(sentence){
    let wordsCount={};
    let arr=sentence.split(" ");
    let maxCount=0, maxWord='';
    for(let word of arr){
        wordsCount[word]=(wordsCount[word] || 0 )+ 1;
        if(wordsCount[word]>maxCount){
            maxCount=wordsCount[word];
            maxWord=word;
        }  
    }
    //console.log(wordsCount)
    return maxWord;
}
console.log(countFreq(sentence));

// let heart = "\u2764";
// console.log(heart);

let text= 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary=text.split(" ").filter((ele)=> ele.match(/\d+/))
let totalSal=salary.reduce((total,ele)=>parseInt(ele)+total,0)
console.log(salary)
console.log(totalSal)