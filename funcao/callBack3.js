document.getElementsByTagName('body')[0].onclick = function (e){
    console.log(`O evento foi disparado por ${e.target}`)
}