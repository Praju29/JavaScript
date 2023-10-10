var sentence = "This is a sunny day";
var str = sentence.split(" ");
// console.log(str);
var reverse = " ";
for(var i = 0;i<str.length;i++){
    for(var j=str[i].length;j>=0;j--){
        // console.log(str[i].charAt(j));
        reverse = reverse+str[i].charAt(j);
    }
    reverse=reverse+" ";
}
console.log(sentence+" >"+reverse);