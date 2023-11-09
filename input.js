const {PythonShell} = require("python-shell");

let options= {
    scriptPath: "E:\TUGAS\TUGASAKHIR\D4LJ\NodeJsTA\serverta",
    args: ["asep",45]
};

PythonShell.run("cosine.py",options, (err,res) =>  {
    if (err) console.log(err);
    if (res) console.log(res);
});