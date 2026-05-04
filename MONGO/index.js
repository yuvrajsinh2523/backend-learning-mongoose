const mongoose=require("mongoose");

main().then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const User=mongoose.model("User",userSchema);

const user1=new User({
    name:"yuvrajsinh jadeja",
    email:"yuvrajsinhjadeja2523@gmail.com",
    age:22
})

user1.save().then((res)=>{
    console.log(res);
})
