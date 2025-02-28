create database casetibuy;

use casetibuy;

show tables;

create table casetibuy_product(
	pid		int				primary key		auto_increment,
    pname	varchar(50)			not null,
    upload_file		json,
    source_file		json,
    pdate			datetime
);

CREATE TABLE casetibuy_member(
		ID				VARCHAR(30)		PRIMARY KEY,
		PWD				VARCHAR(50)		NOT NULL,
        NAME			VARCHAR(10)		NOT NULL,
        PHONE			CHAR(13)		NOT NULL,
        EMAILNAME		VARCHAR(20)		NOT NULL,
        EMAILDOMAIN		VARCHAR(20)		NOT NULL,
        ZIPCODE			CHAR(5),
        ADDRESS			VARCHAR(80),
        MDATE			DATETIME
);

use casetibuy;
select * from casetibuy_product;
select * from casetibuy_member;

alter table casetibuy_product add column repImage varchar(300);
alter table casetibuy_product drop column repImage;
SELECT 
                    pid,
                    pname as name,
                    price,
                    upload_file as image,                                   
                    source_file as sourceFile,
                    pdate,
                    concat('http://localhost:9000/',upload_file->>'$[0]') as firstImage,
                    -- json_array() 사용해서 imgList 배열만듬
                    json_array(
						concat('http://localhost:9000/',upload_file->>'$[0]'),
						concat('http://localhost:9000/',upload_file->>'$[1]'),
						concat('http://localhost:9000/',upload_file->>'$[2]')
                    ) as imgList,
                    json_arrayagg(
						concat('http://localhost:9000/',jt.filename)
                    ) as detailImgList
                FROM
                    casetibuy_product, 
                    -- json_table(테이블.컬럼명,매핑데이터 columns(컬럼 생성 후 리턴)) as jt 
                    json_table(shoppy_product.upload_file,'$[*]'
							   columns(filename varchar(100) path '$')) as jt
                WHERE
                    pid = 10
                    ;
                    
                    
                    
                    CREATE TABLE `casetibuy_product3` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `pname` varchar(50) NOT NULL,
  `isnew` tinyint(1) NOT NULL DEFAULT '0',
  `ishot` tinyint(1) NOT NULL DEFAULT '0',
  `isrec` tinyint(1) NOT NULL DEFAULT '0',
  `upload_file` json DEFAULT NULL,
  `source_file` json DEFAULT NULL,
  `pdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `kinds` varchar(20) NOT NULL,
  `repImage` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
                    