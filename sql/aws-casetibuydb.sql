create database casetibuy;

use casetibuy;
show tables;

select * from information_schema.views where table_schema = 'casetibuy';

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
       cm.id,
       cp.pid,
       cp.pname,
       concat('http://54.180.155.70:9000/', cc.image) as image	
		 from casetibuy_cart cc,
			  casetibuy_member cm,
              casetibuy_product cp
		 where cc.id = cm.id and cc.pid = cp.pid;