function fact(integer) {
    let i = 1;
    let result = 1;
    for(i;i<=integer;i++){
        result*=i;
    }
    return result;
}

let res = fact(10);



console.log(res);