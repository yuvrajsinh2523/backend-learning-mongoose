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

User.insertMany([
    {
        name:"jaydev",
        email:"jaydev123@gmail.com",
        age:21
    },
    {
        name:"viraj",
        email:"viraj123@gmail.com",
        age:26
    },{
        name:"vishal",
        email:"vishal123@gmail.com",
        age:34
    }
]).then((res)=>{
    console.log(res);
})

User.find({}).then((res)=>{
    console.log(res);
})

User.findOne({name:"vishal"}).then((data)=>{
    console.log(data.name);
})

User.findById("69f87278fbba8bb1d5a24007").then((data)=>{
    console.log(data.name);
})
User.updateOne({name:"vishal"},{age:25},{new:true}).then((data)=>{
    console.log(data);
})

User.findOneAndUpdate({name:"viraj"},{age:29},{new:true}).then((data)=>{
    console.log(data);
})

User.findByIdAndUpdate({_id:"69f87278fbba8bb1d5a24006"},{name:"jayesh"},{new:true}).then((data)=>{
console.log(data);
})
