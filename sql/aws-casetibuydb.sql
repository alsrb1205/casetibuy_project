create database casetibuy;

use casetibuy;
show tables;

select * from information_schema.views where table_schema = 'casetibuy';
select * from casetibuy_order;
select * from casetibuy_order_detail;
select * from casetibuy_cart;
drop view view_cart_list;
select * from view_cart_list;

create view view_cart_list
as
select cc.cid,
	   cc.cname,
       cc.qty,
       cc.color,
       cc.caseType,
       cc.price,
       cc.kinds,
       cm.id,
       cp.pid,
       cp.pname,
       concat('http://54.180.155.70:9000/', cc.image) as image	
		 from casetibuy_cart cc,
			  casetibuy_member cm,
              casetibuy_product cp
		 where cc.id = cm.id and cc.pid = cp.pid;
         
INSERT INTO casetibuy_order (member_id, total_price, payment_method, zipcode, address, detail_address)
                            VALUES ('test11',1,1,1,1,1);
                            
INSERT INTO casetibuy_order_detail (order_id, product_id, product_name, qty, unit_price, kinds, color, case_type, product_image)
VALUES (22, 1,1,1,1,1,1,1,1);
