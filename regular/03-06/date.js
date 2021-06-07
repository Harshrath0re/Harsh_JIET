let mypromise = new Promise((myresolve, myreject) => {
    setTimeout(() => {
        myresolve("HI im harsh");

    }, 4000);
});

mypromise.then((value) => {
    console.log(value);
});

let mypromise2 = new Promise((myresolve, myreject) => {
    let a = 2
    let b= 5
    if (a*b > a*a) {
        myresolve("Promise success");
    } else{
        myreject("greater than a square");
    }
});

mypromise2
  .then((value) =>{
      console.log(value);
  })
  .catch((value) =>{
      console.log(value);
  });