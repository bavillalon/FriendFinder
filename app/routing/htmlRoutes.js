var path=require("path");

module.exports= function (app) {
    app.get('*',function(req,res){
        var url= req.url==="/survey"?"/../public/survey.html":"/../public/home.html";
        res.sendFile(path.join(__dirname+url));
    })
}
