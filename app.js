console.log("hai");
document.write('<h1>hello</h1>');

var mobiles=[
    {
        brandName:"OPPO",
        model:"osp789",
        price:"15000"
    },
   {
        brandName:"LG",
        model:"osp789",
        price:"8000"
    },
    {
        brandName:"MI",
        model:"osp789",
        price:"10000"
    },
    {
        brandName:"Apple",
        model:"osp789",
        price:"25000"
    }
];
console.log(mobiles);

var highMobiles=mobiles.filter(m=>m.price>=10000);


document.write('<center>Costliest Mobiles:--</center>')
var brandMob=highMobiles.map(h=>{
    //return h.brandName;
    
    return document.write('<br/><h5><center>'+h.brandName+'</center></h5>')});
console.log(brandMob);

              
   
                
    
    

