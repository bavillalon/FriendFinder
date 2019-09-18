friends=require("../data/friends");

var path=require("path");

module.exports= function (app) {
    app.get('/api/friends',function(req,res){
        res.json(friends);
    });
    
    app.post('/api/friends',function(req,res){
        var newFriend=req.body;
        var diffArray=[];
        var friendIndex=0;
        for(let i=0;i<friends.length;i++){
            let pushSum=0;
            for(let j=0;j<newFriend.scores.length;j++){
                pushSum+=Math.abs(friends[i].scores[j]-newFriend.scores[j]);
            }
            diffArray.push(pushSum);
            friendIndex=diffArray[friendIndex]>diffArray[i]?i:friendIndex;
        }

        friends.push(newFriend);
        res.json(friends[friendIndex]);
    })
};




