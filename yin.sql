SET NAMES UTF8;
DROP DATABASE IF EXISTS yin;
CREATE DATABASE yin CHARSET=UTF8;
USE yin;

CREATE TABLE yys(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    nname VARCHAR(16),
    npwd VARCHAR(20),
    email VARCHAR(24),
    phone VARCHAR(11),
    birthday DATE,
    avatar VARCHAR(128),
    gender BOOL
);
INSERT INTO yys VALUES
(NULL,'qiqi','123456','qiqi@qq.com','13112345678','1999-1-1','image/5.jpg',0),
(NULL,'nuannuan','123456','nuannuan@qq.com','13122345678','1998-1-1','image/5.jpg',0),
(NULL,'qiongqiong','123456','qiongqiong@qq.com','13132345678','1997-1-1','image/5.jpg',0),
(NULL,'tutu','123456','tutu@qq.com','13142345678','1996-1-1','image/5.jpg',1);



CREATE TABLE shis (
	id int primary key AUTO_INCREMENT,
	yname varchar(32) NOT NULL,
	imagePath varchar(128) NOT NULL
);
INSERT INTO shis VALUES
(null,'玉藻前','http://127.0.0.1:3000/img/shishen/300.png'),
(null,'三尾狐','http://127.0.0.1:3000/img/shishen/202.png'),
(null,'灯笼鬼','http://127.0.0.1:3000/img/shishen/203.png'),
(null,'座敷童子','http://127.0.0.1:3000/img/shishen/205.png'),
(null,'鲤鱼精','http://127.0.0.1:3000/img/shishen/206.png'),
(null,'九命猫','http://127.0.0.1:3000/img/shishen/207.png'),
(null,'狸猫','http://127.0.0.1:3000/img/shishen/208.png'),
(null,'河童','http://127.0.0.1:3000/img/shishen/209.png'),
(null,'童男','http://127.0.0.1:3000/img/shishen/212.png'),
(null,'童女','http://127.0.0.1:3000/img/shishen/213.png'),
(null,'饿鬼','http://127.0.0.1:3000/img/shishen/214.png'),
(null,'巫蛊师','http://127.0.0.1:3000/img/shishen/216.png'),
(null,'鸦天狗','http://127.0.0.1:3000/img/shishen/218.png'),
(null,'食发鬼','http://127.0.0.1:3000/img/shishen/221.png'),
(null,'武士之灵','http://127.0.0.1:3000/img/shishen/222.png'),
(null,'骨女','http://127.0.0.1:3000/img/shishen/223.png'),
(null,'雨女','http://127.0.0.1:3000/img/shishen/224.png'),
(null,'跳跳弟弟','http://127.0.0.1:3000/img/shishen/225.png'),
(null,'跳跳妹妹','http://127.0.0.1:3000/img/shishen/226.png'),
(null,'兵俑','http://127.0.0.1:3000/img/shishen/227.png'),
(null,'丑时之女','http://127.0.0.1:3000/img/shishen/228.png'),
(null,'独眼小僧','http://127.0.0.1:3000/img/shishen/229.png'),
(null,'铁鼠','http://127.0.0.1:3000/img/shishen/232.png'),
(null,'椒图','http://127.0.0.1:3000/img/shishen/234.png'),
(null,'管狐','http://127.0.0.1:3000/img/shishen/236.png'),
(null,'山兔','http://127.0.0.1:3000/img/shishen/237.png'),
(null,'萤草','http://127.0.0.1:3000/img/shishen/238.png'),
(null,'蝴蝶精','http://127.0.0.1:3000/img/shishen/241.png'),
(null,'傀儡师','http://127.0.0.1:3000/img/shishen/242.png'),
(null,'奴良陆生','http://127.0.0.1:3000/img/shishen/294.png'),
(null,'卖药郎','http://127.0.0.1:3000/img/shishen/305.png'),
(null,'鬼灯','http://127.0.0.1:3000/img/shishen/308.png'),
(null,'阿香','http://127.0.0.1:3000/img/shishen/309.png'),
(null,'蜜桃&芥子','http://127.0.0.1:3000/img/shishen/310.png'),
(null,'犬夜叉','http://127.0.0.1:3000/img/shishen/313.png'),
(null,'杀生丸','http://127.0.0.1:3000/img/shishen/314.png'),
(null,'桔梗','http://127.0.0.1:3000/img/shishen/319.png'),
(null,'少羽大天狗','http://127.0.0.1:3000/img/shishen/315.png'),
(null,'炼狱茨木童子','http://127.0.0.1:3000/img/shishen/322.png'),
(null,'大天狗','http://127.0.0.1:3000/img/shishen/217.png'),
(null,'酒吞童子','http://127.0.0.1:3000/img/shishen/219.png'),
(null,'荒川之主','http://127.0.0.1:3000/img/shishen/248.png'),
(null,'阎魔','http://127.0.0.1:3000/img/shishen/255.png'),
(null,'两面佛','http://127.0.0.1:3000/img/shishen/258.png'),
(null,'小鹿男','http://127.0.0.1:3000/img/shishen/259.png'),
(null,'茨木童子','http://127.0.0.1:3000/img/shishen/265.png'),
(null,'青行灯','http://127.0.0.1:3000/img/shishen/266.png'),
(null,'妖刀姬','http://127.0.0.1:3000/img/shishen/269.png'),
(null,'一目连','http://127.0.0.1:3000/img/shishen/272.png'),
(null,'花鸟卷','http://127.0.0.1:3000/img/shishen/279.png'),
(null,'辉夜姬','http://127.0.0.1:3000/img/shishen/280.png'),
(null,'荒','http://127.0.0.1:3000/img/shishen/283.png'),
(null,'彼岸花','http://127.0.0.1:3000/img/shishen/288.png'),
(null,'雪童子','http://127.0.0.1:3000/img/shishen/292.png'),
(null,'山风','http://127.0.0.1:3000/img/shishen/296.png'),
(null,'玉藻前','http://127.0.0.1:3000/img/shishen/300.png'),
(null,'御馔津','http://127.0.0.1:3000/img/shishen/304.png'),
(null,'面灵气','http://127.0.0.1:3000/img/shishen/311.png'),
(null,'桃花妖','http://127.0.0.1:3000/img/shishen/200.png'),
(null,'雪女','http://127.0.0.1:3000/img/shishen/201.png'),
(null,'鬼使白','http://127.0.0.1:3000/img/shishen/210.png'),
(null,'鬼使黑','http://127.0.0.1:3000/img/shishen/211.png'),
(null,'犬神','http://127.0.0.1:3000/img/shishen/220.png'),
(null,'孟婆','http://127.0.0.1:3000/img/shishen/215.png'),
(null,'鬼女红叶','http://127.0.0.1:3000/img/shishen/231.png'),
(null,'跳跳哥哥','http://127.0.0.1:3000/img/shishen/233.png');

CREATE TABLE ssDetail (
	id int AUTO_INCREMENT ,
	name varchar(32),
	beforeAwaken1 varchar(128) NOT NULL,
	afterAwaken1 varchar(128) NOT NULL,
	skin varchar(128) NOT NULL,
	beforeawaken2 varchar(128) NOT NULL,
	afterAwaken2 varchar(128) NOT NULL,
	foreign key(id) references shis(id)
);

INSERT INTO ssDetail VALUES
(null,'玉藻前','http://127.0.0.1:3000/img/ssxq/300.png','http://127.0.0.1:3000/img/ssxq/300 (1).png','http://127.0.0.1:3000/img/ssxq/300-1.png','http://127.0.0.1:3000/img/ssxq/300.jpg','http://127.0.0.1:3000/img/ssxq/300 (1).jpg');


