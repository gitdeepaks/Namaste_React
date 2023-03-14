
let a = 9

function normalFn(params) {


    if (a >= 10) {

        console.log(`normal function`)
    } else {
        console.log(`a is less than  10 and that is ${a}`)
    }
}

const arrowFn = () => {

    if (a >= 10) {

        console.log(`Arrow Function`)
    } else {
        console.log(`a is less than  10 and that is ${a}`)
    }

}

arrowFn();
normalFn();