/**
*  添加用户路由
*  前端需要post请求
*  参数：{
    name: '张三',
    age: 18,
    hoppy: ['游泳','健身']
  }
*/
app.post('/users', function (req, res) {
  var user = new app.models.User(req.body);
  user.save(function(error, users){
    if(error){
      res.status(500).json(error);
    }else {
      res.status(200).json(users);
    }
  });
});
