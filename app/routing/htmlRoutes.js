var path=require("path");
//this is the functionw e are exporting for app which is express.
//the get function will look at survey and if it doens't get it it will go to the home file.
module.exports= function (app) {
    app.get('*',function(req,res){
        var url= req.url==="/survey"?"/../public/survey.html":"/../public/home.html";
        res.sendFile(path.join(__dirname+url));
    })
}
