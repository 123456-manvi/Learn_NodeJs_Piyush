// custom libraray...
function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}
// module.exports="Piyush";
// module.exports=add;
// module.exports=sub;

// ye override na ho..so that m alg se fun k andar dal dunge
// note-jo bhi hum file bnyenge vo hume export rna hoga..
// hum module.exports sirf aek br kr skte h..and usme fun kitne hi appned kra skteh

module.exports={
    addFn:add,
    subFn:sub,
};



// or.........................
// exports.add=(a,b)=>a+b;
// exports.sub=(a,b)=>a-b;
// but it return anonymus value and many tym export value..