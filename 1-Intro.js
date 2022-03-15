//GLOBALS - NO WINDOW

// __dirame         - path to current directory
// __filename       - file name
// require          - funtion to use modules (CommonJS)
// module           - info about current module (file)
// process          - info about env where the program is beinf executed


console.log(__dirname)
setInterval(()=>{
    console.log(__dirname)
    console.log('hell world')  
}, 1000)

const amount = 9

if (amount<10){
    console.log('small number')
}else{
    console.log('large number')
}

console.log(`Hey it's my first node app!!!`)