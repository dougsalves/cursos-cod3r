console.log(this === global)
console.log(this === module.exports)
console.log(this === exports)

function thisLocal() {
    console.log(this === global)
    console.log(this === module.exports)
    console.log(this === exports)
}

thisLocal()
    