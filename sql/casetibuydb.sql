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
-- 콜라보 항목 추가!!!!!! 
alter table casetibuy_product add column isColab varchar(50) not null;

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
create table casetibuy_cart(
	cid			 int				primary key		auto_increment, 
    cname 		 varchar(30)		not null,
    qty 		 int				not null,
    color		 varchar(30)		not null,
    caseType     varchar(30)		not null,
	image 		 varchar(200)		not null,
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
	   cc.cname,
       cc.qty,
       cc.color,
       cc.caseType,
       cc.price,
       cm.id,
       cp.pid,
       cp.pname,
       concat('http://localhost:9000/', cc.image) as image		
		 from casetibuy_cart cc,
			  casetibuy_member cm,
              casetibuy_product cp
		 where cc.id = cm.id and cc.pid = cp.pid;
         
-- 장바구니 전체 조회 뷰 생성
create view view_cart_list
as
select cc.cid,
	   cc.cname,
       cc.qty,
       cc.color,
       cc.caseType,
       cc.price,
       cm.id,
       cp.pid,
       cp.pname,
       concat('http://localhost:9000/', cc.image) as image	
		 from casetibuy_cart cc,
			  casetibuy_member cm,
              casetibuy_product cp
		 where cc.id = cm.id and cc.pid = cp.pid;

select * from casetibuy_product;
select * from casetibuy_member;
select * from casetibuy_cart;
select * from view_cart_list;

-- 테이블 삭제(카트랑 참조중 => 카트 먼저 삭제 후 멤버 삭제)
drop table casetibuy_product;
drop table casetibuy_member;
drop table casetibuy_cart;
DROP VIEW IF EXISTS view_cart_list;                

-- 테이블 내용 삭제(카트랑 참조중 => 카트 먼저 삭제 후 멤버 삭제)
TRUNCATE TABLE casetibuy_member;
TRUNCATE TABLE casetibuy_cart;

DELETE FROM casetibuy_product WHERE pid = 13;


-- 결제관련 오더 테이블
CREATE TABLE casetibuy_order (
    order_id         INT AUTO_INCREMENT PRIMARY KEY,
    member_id        VARCHAR(20) NOT NULL, -- 기존 'id' 컬럼과 일치
    total_price      INT NOT NULL,
    payment_method   ENUM('creditCard', 'kakaoPay') NOT NULL,
    order_status     ENUM('pending', 'completed', 'canceled') DEFAULT 'pending',
    order_date       DATETIME DEFAULT CURRENT_TIMESTAMP,
    zipcode          VARCHAR(10) NOT NULL,
    address          VARCHAR(255) NOT NULL,
    detail_address   VARCHAR(255) NOT NULL,
    CONSTRAINT fk_order_member FOREIGN KEY (member_id) REFERENCES casetibuy_member(id)
);

CREATE TABLE casetibuy_order_detail (
    order_detail_id  INT AUTO_INCREMENT PRIMARY KEY,
    order_id         INT NOT NULL,
    product_id       INT NOT NULL, -- 기존 'pid' 컬럼과 일치
    product_name     VARCHAR(50) NOT NULL, -- 기존 'pname' 컬럼과 일치
    qty             INT NOT NULL,
    unit_price      INT NOT NULL, -- 기존 'price' 컬럼과 일치
    color           VARCHAR(30) NOT NULL,
    case_type       VARCHAR(30) NOT NULL,
    product_image   VARCHAR(200), -- 기존 'image' 컬럼과 일치
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES casetibuy_order(order_id),
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES casetibuy_product(pid)
);

show tables;

-- 유저가 구매한 상품 조회
SELECT 
    o.order_id,
    o.member_id,
    o.total_price,
    o.payment_method,
    o.order_status,
    o.order_date,
    o.address,
    od.product_id,
    od.product_name,
    od.qty,
    od.unit_price,
    od.color,
    od.case_type,
    CONCAT('http://localhost:9000/', od.product_image) AS image
FROM casetibuy_order o
INNER JOIN casetibuy_order_detail od ON o.order_id = od.order_id
WHERE o.member_id = 'rkdgusdn';

select * from casetibuy_order;
select * from casetibuy_order_detail;


CREATE TABLE casetibuy_review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    pid INT NOT NULL,
    member_id VARCHAR(50) NOT NULL,
    color	varchar(30) not null,
    casetype	varchar(30) not null,
    comment TEXT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_review_order FOREIGN KEY (order_id)
        REFERENCES casetibuy_order (order_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_review_member FOREIGN KEY (member_id)
        REFERENCES casetibuy_member (member_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_review_product FOREIGN KEY (pid)
        REFERENCES casetibuy_product (pid)
        ON DELETE CASCADE ON UPDATE CASCADE
);


      SELECT 
          o.order_id,
          o.member_id,
          o.total_price,
          o.payment_method,
          o.order_status,
          o.order_date,
          o.address,
          o.detail_address,
          od.product_id,
          od.product_name as product_name,
          od.qty,
          od.unit_price,
          od.color,
          od.case_type,
          CONCAT('http://localhost:9000/', od.product_image) AS image
      FROM casetibuy_order o
      INNER JOIN casetibuy_order_detail od ON o.order_id = od.order_id
      WHERE o.member_id = 'rkdgusdn'
      ORDER BY o.order_id DESC
    ;

select * from casetibuy_review;

