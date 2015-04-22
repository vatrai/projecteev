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
        User.createOrUpdate(req.body, function(user){
            res.json(200, user);
        })
    });

    app.delete('/admin/users/:userId', function(req,res){
        User.delete(req.params.userId, function(){
            res.json(200, {});
        })
    });

    app.get('/admin/projects/users', function(req,res){
        User.all({}, function(users){
            res.json(200, users );
        })
    });

    app.get('/admin/projects', function(req,res){
        Project.all({}, function(users){
            res.json(200, users );
        })
    });

    app.post('/admin/projects', function(req,res){
        Project.createOrUpdate(req.body, function(project){
            res.json(200, project);
        })
    });

    app.delete('/admin/projects/:projectId', function(req,res){
        Project.delete(req.params.projectId, function(){
            res.json(200, {});
        })
    });



};