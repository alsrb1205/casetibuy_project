create database casetibuy;

use casetibuy;

show tables;

create table casetibuy_product(
	pid		int				primary key		auto_increment,
    pname	varchar(50)			not null,
    price	int,
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

drop table casebuy_member;
use casetibuy;
select * from casetibuy_product;
select * from casetibuy_member;
