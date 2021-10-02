function ns_onclick(q,f,u,b,o){var i=window,l=i.ns_p,m=l&&l.src,s="&ns_",h=document.referrer.replace(/\/$/,""),f=f||q.href,o=o||"",j={t:0,o:0},e=eventURL=c1_match=c2_match="",c=/\bc1=[^&]+\b/i,g=/\bc2=[^&]+\b/i,p=(i.encodeURIComponent?encodeURIComponent:escape),n="3.1212.07";if(m&&(c1_match=l.src.match(c))&&!c.test(u)){e+="&"+c1_match}if(m&&(c2_match=l.src.match(g))&&!g.test(u)){e+="&"+c2_match}if(m){var t=l.src,k=t.indexOf("?");eventURL=t.substr(0,k>-1?k:t.length)+"?"}eventURL=[eventURL,u,e,s,"type=",b,s,"action=view",s,"_t=",+new Date,h?s+"referrer="+p(h):"",s,"sc_sv=",n,s,"sc_href=",p(f).substr(0,1000)].join("");var r=q&&q.target?q.target.replace(/^_/,""):"self",d=new Image();if(i[r]){j.t=(function(w,v,a){return function(){clearTimeout(a.o);d.onload=d.onerror=function(){return};i[w].location.href=v}})(r,f,j);j.o=setTimeout(j.t,5000);d.onload=d.onerror=j.t}else{i.open(f,r,o)}d.src=eventURL;return false};

function toDK(obj)
{
  //ns_onclick(obj,'','c1=2&c2=7715761&ns_site=test-pasionensevilla&voc_site=test-pasionensevilla&name=' + voc_name + '&voc_se=' + voc_se + '&voc_s1=' + voc_s1 + '&voc_s2=' + voc_s2 + '&voc_s3=' + voc_s3 + '&voc_s4=' + voc_s4 + '&voc_tn=' + voc_tn + '&voc_ho=' + voc_ho + '&voc_tc=' + voc_tc + '&voc_ed=' + voc_ed + '&voc_au=' + voc_au + '&voc_fep=' + voc_fep + '&voc_fem=' + voc_fem + '&voc_or=' + voc_or + '&voc_pr=' + voc_pr + '&voc_pl=wa-wc&voc_pu=' + voc_pu + '&voc_usrid=&voc_tusr=&voc_usrcp=&voc_usrgen=&voc_usrag=&voc_ate=&voc_adb=','hidden');
  
  ns_onclick(obj,'','c1=2&c2=7715761&ns_site='+ ns_site +'&voc_site='+ ns_site +'&name=' + voc_name + '&voc_se=' + voc_se + '&voc_s1=' + voc_s1 + '&voc_s2=' + voc_s2 + '&voc_s3=' + voc_s3 + '&voc_s4=' + voc_s4 + '&voc_tn=' + voc_tn + '&voc_ho=' + voc_ho + '&voc_tc=' + voc_tc + '&voc_ed=' + voc_ed + '&voc_au=' + voc_au + '&voc_fep=' + voc_fep + '&voc_fem=' + voc_fem + '&voc_or=' + voc_or + '&voc_pr=' + voc_pr + '&voc_pl=wa-wc&voc_pu=' + voc_pu + '&voc_usrid=&voc_tusr=&voc_usrcp=&voc_usrgen=&voc_usrag=&voc_ate=&voc_adb=','hidden');
  
  var vocmobile = getCookie2("voc_mobile");
  
  
  if((vocmobile == null) || (vocmobile == 'null') || (vocmobile == ""))
  {
    setCookie2('voc_mobile','activo');
  }
  
  document.location.reload(true);
  
}

function toMB(obj)
{

//ns_onclick(obj,'','c1=2&c2=7715761&ns_site=test-pasionensevilla&voc_site=test-pasionensevilla&name=' + voc_name + '&voc_se=' + voc_se + '&voc_s1=' + voc_s1 + '&voc_s2=' + voc_s2 + '&voc_s3=' + voc_s3 + '&voc_s4=' + voc_s4 + '&voc_tn=' + voc_tn + '&voc_ho=' + voc_ho + '&voc_tc=' + voc_tc + '&voc_ed=' + voc_ed + '&voc_au=' + voc_au + '&voc_fep=' + voc_fep + '&voc_fem=' + voc_fem + '&voc_or=' + voc_or + '&voc_pr=' + voc_pr + '&voc_pl=wc-wa&voc_pu=' + voc_pu + '&voc_usrid=&voc_tusr=&voc_usrcp=&voc_usrgen=&voc_usrag=&voc_ate=&voc_adb=','hidden');
  
  ns_onclick(obj,'','c1=2&c2=7715761&ns_site='+ ns_site +'&voc_site='+ ns_site +'&name=' + voc_name + '&voc_se=' + voc_se + '&voc_s1=' + voc_s1 + '&voc_s2=' + voc_s2 + '&voc_s3=' + voc_s3 + '&voc_s4=' + voc_s4 + '&voc_tn=' + voc_tn + '&voc_ho=' + voc_ho + '&voc_tc=' + voc_tc + '&voc_ed=' + voc_ed + '&voc_au=' + voc_au + '&voc_fep=' + voc_fep + '&voc_fem=' + voc_fem + '&voc_or=' + voc_or + '&voc_pr=' + voc_pr + '&voc_pl=wc-wa&voc_pu=' + voc_pu + '&voc_usrid=&voc_tusr=&voc_usrcp=&voc_usrgen=&voc_usrag=&voc_ate=&voc_adb=','hidden');

  
  var vocmobile = getCookie2("voc_mobile");
  
  if((vocmobile != null) && (vocmobile != 'null') && (vocmobile != ""))
  {
    document.cookie = "voc_mobile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }
  
  document.location.reload(true);
}

function getCookie2(NameOfCookie)
{
	if(document.cookie.length > 0)
	{ 
		begin = document.cookie.indexOf(NameOfCookie+"=");
		if(begin != -1)
		{ 
			begin += NameOfCookie.length+1;
			end = document.cookie.indexOf(";", begin);
			if(end == -1)
			{
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(begin, end)); 
		}
	}
	return null;
}


function setCookie2(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (24*3e3*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}