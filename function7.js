var empDetails=[{"eno":1001,"enm":"Jarvis","esal":10000.67},{"eno":1002,"enm":"Jany","esal":20000},
{"eno":1003,"enm":"John","esal":30000.61}];

console.log("Employee Details");

for(let row of empDetails)
{
    for(let k in row)
    {
        console.log(k+"---->"+row[k]);
    }
    console.log();
}