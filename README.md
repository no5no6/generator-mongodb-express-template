# generator-mongodb-express-template
express框架生成器

## 项目
项目为[express](http://expressjs.com/) + [mongodb](https://www.mongodb.com/) 框架的生成器，利用[Yeoman](http://yeoman.io/)开发而成。新构建项目中包含[mongoose](http://mongoosejs.com/)、[jade](http://jade-lang.com/)、[stylus](http://stylus-lang.com/)、[gulp](http://gulpjs.com/)等常用技术。

## 使用与安装
1. 安装[yo](http://yeoman.io/)，`npm install -g yo`。
2. 运行`yo mongodb-express-template` 生成项目。
3. 创建mongodb连接数据库，创建名称参考/config/config.js文件中development下的db路径，例：`mongodb://test:123@localhost:27017/project-development`,其中`project-development`为数据库名称，`test`为数据库用户名，`123`为数据库的密码。
4. 运行`gulp`启动项目
5. 访问`localhost:3000`即可。
