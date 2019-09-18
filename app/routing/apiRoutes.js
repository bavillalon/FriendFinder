//friends require. we get the friend variable from here and use it in the below functions
friends=require("../data/friends");

var path=require("path");
//export of the api finctions. will either ise the get or post function
module.exports= function (app) {
    //get app to return all the frineds in the variable
    app.get('/api/friends',function(req,res){
        res.json(friends);
    });
    //post function. this will iterate through the friends variable
    //and the scores for each person in the variable as well as the scores from thenew friend.
    //from there it will add up the differences, store them in diff array, and find the smallest difference and store the index in frinedIndex
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
//push the new friend into the array after the match is found.
        friends.push(newFriend);
        //returns the friend to the requester in the form of a json object response
        res.json(friends[friendIndex]);
    })
};




