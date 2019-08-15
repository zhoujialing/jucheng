const proxy=require("http-proxy-middleware");
const userData=require("./data/userInfo.json");



module.exports=function(app){
    app.get("/test",(req,res)=>{
        res.send("OK!!!")
    })

    
    app.use(proxy("/apis",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/apis":""
        }
    }))

    app.use(proxy("/m",{
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/m":""
        }
    }))

    app.post("/login", (req, res) => {
        let query=  req.body;
        console.log(query);
        res.json(userData.userList[0]);
    })
}
