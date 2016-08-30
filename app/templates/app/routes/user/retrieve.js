/**
*  查询用户路由
*/
app.get('/users', function (req, res, next) {
  app.models.User.retrieve(function(error, users){
    if(error){
      res.status(500).json(error);
    }else {
      res.status(200).json(users);
    }
  });
});
