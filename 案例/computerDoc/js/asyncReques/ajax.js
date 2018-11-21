function ajaxGet(myUrl,method){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest()
	}
	else{
		//兼容IE6,IE5
		xhr = new ActiveObject('Microsoft.XMLHTTP')
	}

	xhr.onreadystatechange = function(){

		if(xhr.readyState == 4 && xhr.status == 200){

			console.log(xhr.responseText)
			alert("请求成功")
		}
	}

	xhr.open('GET',myUrl,method)
	xhr.send()
}
ajaxGet("../../php/requestAjax.php",true)