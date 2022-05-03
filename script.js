// // (// // //var john={
// // // // //    name:'john',
// // // // //    yearofBirth:1985,
// // // // //    job:'teacher'
// // // // //};
// // // // var Person=function(name,yearofBirth,job){
// // // //     this.name=name;
// // // //     this.yearofBirth=yearofBirth;
// // // //     this.job=job;
    
    
// // // // }
// // // // Person.prototype.calAge=function(){
// // // //         return 2022-this.yearofBirth;
// // // //     };
// // // // Person.prototype.lastname='smith';

// // // // var john=new Person('john',1985,'teacher');
// // // // var jane=new Person('jane',1980,'designer');
// // // // var mike=new Person('mike',1945,'retaired');


// // // // console.log(john.calAge());
// // // // console.log(jane.calAge());
// // // // console.log(mike.calAge());
// // // // console.log(john.lastname);

// // // // function P(fname,lname,email,phone){
// // // //     this.firstname=fname;
// // // //     this.lastname=lname;
// // // //     this.email=email;
// // // //     this.phone=phone;
// // // // }
// // // // P.prototype.addr='ch.agraharam';
// // // // P.prototype.fullname=function(){
// // // //    res=this.firstname+this.lastname;
// // // //     return res;
// // // // };
    
// // // // var p1=new P('mohini',"dadi","mohini@gamil.com",765486498);
// // // // var p2=new P('satya','narayana','satya@gmail.com',7687878);
// // // // console.log(p1.fullname());

// // // //Passing functions as arguments
// // // var years=[2009,1990,1987,2001];

// // // function calArr(arr,fn){
// // //     var arrRes=[];
// // //     for(var i=0;i<arr.length;i++){
// // //         arrRes.push(fn(arr[i]));
// // //     }
// // //     return arrRes;
// // // }
// // // function calAge(el){
// // //     return 2022-el;
// // // }
// // // function isFullage(el){
// // //     return el>=18;
// // // }

// // // function maxRate(el){
// // //     if(el>=18 && el<=35){
// // //         return Math.round(206.9-(0.67*el));
// // //     }
// // //     else{
// // //         return -1;
// // //     }
// // // }

// // // var res=calArr(years,calAge);
// // // console.log(res);

// // // var fullage=calArr(res,isFullage);
// // // console.log(fullage);

// // // var rates=calArr(res,maxRate);
// // // console.log(rates);

// // //Functions returnig functions
// // function interQues(job){
// //     if(job==='designer'){
// //         return function(name){
// //             console.log(name+' do know UX operating');
// //         }
// //          }else if(job==='teacher'){
// //             return function(name){
// //                 console.log('which subject do you teach  '+name);
// //             }
// //          }else{
// //              return function(name){
// //                  console.log('hello ! what to do you  ' +name);
// //              }
// //          }
// // }
// // var teacher=interQues('teacher');
// // var webdesigner=interQues('designer');

// // teacher('satya');
// // webdesigner('mohini');

// // interQues('teacher')('john');
// (function(good){
//     var score=Math.random()*10;
//     console.log(score>=5-good);
// })(5);

// (function(num1,num2){
//     sum=num1+num2;
//     console.log(sum);
//     //document.write(num1+num2);

// })(5,7)

// function retaire(retairementAge){
//     var a=' Years left until retairement';
//     return function(yearofBirth){
//         var age=2022-yearofBirth;
//         console.log((retairementAge-age)+a);
//     }
// }
// retairementUS=retaire(66);
// retairementUS(1985);

// retaire(1985)(66);
// retairementIND=retaire(65);
// retairementIND(1985);

// retaire(1985)(65);

//BIND,Call,Apply

var john={
    name:'john',
    age:'26',
    job:'teacher',
    presentation:function(style,timeOfDay){
        if(style==='formal'){
            console.log('Good' + timeOfDay + 
            ' Ladies and Gentelman! I/m '
            +this.name+', I/m  a ' + this.job+
            ' and Iam '+this.age+' yaers old ');
        }else if(style==='friendly'){
            console.log(' hey !What\ ?Iam '
            +this.name+' iam a '+this.job+' Iam '
            +this.age+' years old.Have a nice '+timeOfDay+'.');
        }
    }
}

john.presentation('formal','morning');
john.presentation('friendly','Evening');

var emily={
    name:'emily',
    age:45,
    job:'designer'
}
john.presentation.call(emily,'formal','Afternoon');
 
// john.presentation.apply(emily,['friendly','afternoon']);

var johnFriendly=john.presentation.bind(john,'friendly');
johnFriendly('morning');

var emilyformal=john.presentation.bind(emily,'formal');
emilyformal('afternoon');

var years=[2009,1990,1987,2001];

function calArr(arr,fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
     }
    return arrRes;
     }
      function calAge(el){
     return 2022-el;
 }
 function isFullage(limit,el){
     return el>=limit;
 }
 var ages=calArr(years,calAge);
 var FullJapan=calArr(ages,isFullage.bind(this,20));
 console.log(ages);
 console.log(FullJapan);