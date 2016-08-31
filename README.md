# generator-mongodb-express-template
express骨架生成器

## 项目
[express](http://expressjs.com/) + [mongodb](https://www.mongodb.com/) 的项目骨架生成器，利用[Yeoman](http://yeoman.io/)开发而成。新构建项目中包含[mongoose](http://mongoosejs.com/)、[jade](http://jade-lang.com/)、[stylus](http://stylus-lang.com/)、[gulp](http://gulpjs.com/)等常用技术。

## 使用与安装
1. 安装[yo](http://yeoman.io/)，`npm install -g yo`。
2. 运行 `npm install -g generator-mongodb-express-template` 把生成器安装到全局。
3. 运行`yo mongodb-express-template` 生成项目。
4. 运行`gulp`命令启动项目，访问`localhost:3000`即可。

## 数据库配置
1. 首先确认本机已经正确安装了[mongodb](https://www.mongodb.com/)。
2. 打开项目`/config/config.js`目录下文件，文件中development下的db路径，例：`mongodb://test:123@localhost:27017/project-development`,其中`project-development`为数据库名称，`test`为数据库用户名，`123`为数据库的密码。
3. 在本地创建`project-development`数据库。
4. 为`project-development`库添加用户，账号为：`test` 密码：`123`。

注：数据库名称和用户账号密码可以自行定义，只要config.js里的名称和用户能对应到mongodb中即可。

## 跨域
处理跨域代码在/config/express.js中，`res.header('Access-Control-Allow-Origin', 'http://localhost:8080');`，默认允许跨域的前端请求服务器地址为`http://localhost:8080`，可以按自己需要更换、添加。
