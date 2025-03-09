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

create table casetibuy_member(
		name			varchar(10)		not null,
        birthdate		char(8)			not null,
		id				varchar(20)		primary key,
		pwd				varchar(20)		not null,
        email			varchar(30)		not null,
        phone			char(11)		not null,
        mdate			datetime
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
                    
                    
                SELECT 
                    pid,
                    pname as name,
                    upload_file as image,                                   
                    source_file as sourceFile,
                    pdate
                FROM
                    casetibuy_product
                WHERE
                    pid = 1;
                    
-- casetibuy_cart
-- 컬럼리스트 : cid(pk), id(casetibuy_member: fk(참조키)), pid(casetibuy_product:fk(참조키)), size, qty, cdate(장바구니 등록날짜)

create table casetibuy_cart(
	cid			 int				primary key		auto_increment, 
    cname		 varchar(30)		not null, 
    qty 		 int				not null,
    color		 varchar(30)		not null,
    case_type    varchar(30)		not null,
    price 		 int				not null,
    id			 varchar(30)		not null,
    pid			 int 				not null,
    cdate		 datetime,
    constraint fk_id_casetibuy_member_id foreign key(id)
					references casetibuy_member(id),
	constraint fk_pid_casetibuy_product_pid foreign key(pid)
					references casetibuy_product(pid)               
);

-- casetibuy_cart, casetibuy_member. casetibuy_product 조인
select cc.cid,
       cc.qty,
       cc.color,
       cc.case_type as caseType,
       cc.price,
       cm.id,
       cp.pid,
       cp.pname,
       concat('http://localhost:9000/', cp.upload_file->>'$[0]') as image
		 from casetibuy_cart cc,
			  casetibuy_member cm,
              casetibuy_product cp
		 where sc.id = sm.id and sc.pid = sp.pid;

select * from casetibuy_product;
select * from casetibuy_member;
select * from casetibuy_cart;

drop table casetibuy_product;
drop table casetibuy_member;
drop table casetibuy_cart;
                   