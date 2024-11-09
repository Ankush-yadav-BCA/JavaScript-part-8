/* -------------------------For Question no. 1 --------------------------- */
let arr = [1,2,3,4,5,6];
const avgOfSqr = (array) => {
    // to calculate average of any Array's elements
    const avg = (array) => {
        let total=0;
        for(let el of array){
            total += el;
        }
        return total/array.length
    }
    //return a new array who store squre of old array's elements
    const sqrOfArr = (array) => {
        let sqr = [];
        for(let i=0; i<array.length; i++){
            let el = array[i]**2;
            sqr.push(el);
        }
        return sqr
    }
    return avg(sqrOfArr(array))
}
/*----------------All the best Mr. Ankush Sheshnath Yadav, you have done it --------------- */

/* -------------------------For Question no. 2 --------------------------- */

let newArr = arr.map((el)=>(el+5) );
console.log(`${JSON.stringify(arr)} + 5 = ${JSON.stringify(newArr)} using map method who takes functions as input. So, it's called higher order method`);

/* -------------------------For Question no. 3 --------------------------- */
let country = ['INDIA','South','USA','nePal','pakistan'];

// return string if any letter in string of array will be in upperCase
let anyInUpperCase = country.map((el)=>{
    for(e of el){
        if(e >= 'A' && e <= 'Z'){
            return el
        }
    }
})
console.log('Element who have any letter in upperCase..');
console.log(anyInUpperCase);

//return string, if all letter in upperCase in string
let onlyUpperCase = country.map((el)=>{
    // to check all letter in captial in el
    const isAllUpper = (el) => {
        let inUpperCase = "";
        //check each letter of el that is in upperCase or not
        for(e of el){
            let signal = false;
            if(e >= 'A' && e <= 'Z'){
                signal = true;
            }
            // add letter in Checking string if in upperCase
            if(signal){
                inUpperCase = inUpperCase.concat(e);
            }
        }
        console.log(inUpperCase);//print that letters's word which was in uppperCase in el

        //return el if checking sting(which storing only upperCase from el) will be equals to el  
        if(inUpperCase==el){
            return el
        }
    }
    return isAllUpper(el)
})

console.log('Element who only in upperCase..');
console.log(onlyUpperCase);

/* -------------------------For Question no. 4 --------------------------- */
function doubleAndReturnArgs(array){
    let ansArr = [];
    for(let el of array){
        el = el*2;
        ansArr.push(el);
    }
    console.log(`Length of given array : ${array.length}`);
    console.log(`Length of given arguments including array : ${arguments.length}`);
    for(let i=1; i<arguments.length; i++){
        let el = arguments[i];
        ansArr.push(el*2);
    }
    return ansArr
}

/*----------------------------------------------------------------------------------------- */

let a = {
    name : 'Ankush',
    rollNo : 233,
    course : 'BCA',
    age : 19
}
let b = {
    currAdd : 'Surat',
    perAdd : 'Varanasi',
    country : 'India',
    dream : 'to be a SWE. :)'
}


/* -------------------------For Question no. 5 --------------------------- */
function mergeObject(object1,object2){
    let ansObj = {
        ...object1,
        ...object2
    };
    return ansObj
}

console.log(mergeObject(a,b));