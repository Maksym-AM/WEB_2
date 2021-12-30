function search(string_to_find, basic_string) {

    if (basic_string.indexOf(string_to_find) == -1)
        return "Your sentence doesn't include this world";
    else return "Position of your word is: " + (basic_string.indexOf(string_to_find)+1);
}



let str_1 = "Kyiv is a capital of Ukraine";
let str_2 = "of";

console.log(search(str_2, str_1));