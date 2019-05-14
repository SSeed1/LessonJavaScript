function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}
function second(){
    console.log(2);
}
first();
second();

function learnJS(lang,callback){
    console.log("Я учу "+lang)
    callback();
}

learnJS("Java Scrtipt",function(){
    console.log("я прошел 3-й урок")
})

