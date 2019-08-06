const proxy=require("http-proxy-middleware");

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
}
