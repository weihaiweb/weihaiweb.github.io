document.writeln("<div class=\"float-contact\" id=\"float-contact\" style=\"position: fixed;z-index:1000; right: 1px; display: block;\">");
document.writeln("<a title=\"点击收缩\" href=\"javascript:void(0);\" onclick=\"show()\" class=\"close\" id=\"float-contact-close\">点击收缩</a>");
document.writeln("<div class=\"container\">");
document.writeln("<div class=\"qq\">");
document.writeln("<h3 class=\"qqtitle\">在线咨询</h3>");
document.writeln("<ul class=\"btn\">");
document.writeln("<li><a title=\"吉黑京川新藏\" target=\"_blank\" href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=593893930&site=qq&menu=yes\">吉黑京川新藏<\/a><\/li>");
document.writeln("<li><a title=\"浙闽赣黔陕 \" target=\"_blank\" href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=710827474&site=qq&menu=yes\">浙闽赣黔陕 <\/a><\/li>");
document.writeln("<li><a title=\"苏皖湘渝青\" target=\"_blank\" href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=1115001628&site=qq&menu=yes\">苏皖湘渝青<\/a><\/li>");
document.writeln("<li><a title=\"辽冀蒙滇甘\" target=\"_blank\" href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=1502217676&site=qq&menu=yes\">辽冀蒙滇甘<\/a><\/li>");
document.writeln("<li><a title=\"粤鄂桂沪宁\" target=\"_blank\" href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=1607387592&site=qq&menu=yes\">粤鄂桂沪宁<\/a><\/li>");
document.writeln("<li><a title=\"鲁晋豫津琼\" target=\"_blank\" href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=1138379031&site=qq&menu=yes\">鲁晋豫津琼<\/a><\/li>");

document.writeln("</ul>");
document.writeln("</div>");
document.writeln("<div class=\"qqtel\">");
document.writeln("<h3 class=\"qqtitle\">公司总部电话</h3>");
document.writeln("<div class=\"qqcontent\">0631-5670696</div>");
document.writeln("</div>");
document.writeln("<div class=\"qqcontent\"><img src=\"http://www.kangruikeji.com/images20150302/ewm.jpg\" width=“80” height=“80”></div>");
document.writeln("</div>"); 
document.writeln("<a target=\"_blank\" href=\"http://www.kangruikeji.com/\" class=\"myqqlink\">康瑞生物科技</a>");
document.writeln("</div>");
document.writeln("<div class=\"float-contact-mini\" id=\"float-contact-mini\" style=\"display: none; position: fixed; right: 1px;\">");
document.writeln("<a href=\"javascript:void(0);\" onclick=\"show()\" id=\"float-contact-mini\">联系我们</a>");
document.writeln("</div>");
function show() {
	var floatContact = document.getElementById('float-contact');
	var floatContactMini = document.getElementById('float-contact-mini');
	if(floatContact.style.display=="none") {
		floatContact.style.display="block";
		floatContactMini.style.display="none";
	}else {
		floatContact.style.display="none";
		floatContactMini.style.display="block";
	}
}
 