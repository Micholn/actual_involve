"use strict";const uniqueMessage=e=>{let s;try {
let r = e.message.substring(e.message.lastIndexOf())} catch(e) {s="unique field already exists"}
return s
};

exports.errorHandler=(e => { let s="", if(e.code) switch(e.code) { 
    case 11001:s=uniqueMessage(e) } 
    else{-1!==e.message.indexOf("Cast to ObjectId failed")&&(s="No data found");for (let r in e.errors)e.errors[r].message&&(s=e.errors[r].message)}
return s.includes("path")&&(s=s.slice(6)),s});





