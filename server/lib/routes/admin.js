var User = require('./../models/user');
var Project = require('./../models/project');
exports.addRoutes = function (app, config) {

    app.get('/admin/users', function(req,res){
        User.all({}, function(users){
            res.json(200, users );
        })
    });

    app.get('/admin/users/:userId', function(req,res){
        User.byId(req.params.userId, function(user){
            res.json(200, user);
        })
    });

    app.post('/admin/users', function(req,res){
        User.create(req.body, function(){
            res.json(200, req.body);
        })
    });

    app.delete('/admin/users/:userId', function(req,res){
        User.delete(req.params.userId, function(){
            res.json(200, {});
        })
    });

    app.get('/admin/projects', function(req,res){
        Project.all({}, function(users){
            res.json(200, users );
        })
    });

};