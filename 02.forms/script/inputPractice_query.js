$(function(){
	
	$("#input_btn").on("click",function(){
		
		
		if($("#textarea").val() !== "" && $("#textarea").val() !== null ){
			$("#text_result").text("텍스트 : " + $("#textarea").val())
			.append("<button type='button' class='btn btn-primary'>텍스트 수정</button>"); //수정하는 버튼 추가
			$("#text_result button").on("click",function(){
					$("#text_result").text("텍스트 : ");
					$("#textarea").val("").focus();			
					$(this).fadeOut();
				});// text 결과값에 추가된 버튼 이벤트
			} // text 영역 if 문
			
		if($("#numarea").val() !== "" && $("#numarea").val() !== null ){
			$("#num_result").text("숫자 : " + $("#numarea").val())
			.append("<button type='button' class='btn btn-primary'>숫자 수정</button>"); //수정하는 버튼 추가
			$("#num_result button").on("click",function(){
					$("#num_result").text("숫자 : ");
					$("#numarea").val("").focus();			
					$(this).fadeOut();
				});// number 결과값에 추가된 버튼 이벤트
			} // number 영역 if 문
			
		if($("#emailarea").val() !== "" && $("#emailarea").val() !== null ){
			$("#email_result").text("이메일 : " + $("#emailarea").val())
			.append("<button type='button' class='btn btn-primary'>이메일 수정</button>"); //수정하는 버튼 추가
			$("#email_result button").on("click",function(){
					$("#email_result").text("이메일 : ");
					$("#emailarea").val("").focus();			
					$(this).fadeOut();
				});// email 결과값에 추가된 버튼 이벤트
			} // email 영역 if 문	
			
		if($("#pwarea").val() !== "" && $("#pwarea").val() !== null ){
			$("#pw_result").text("패스워드 : " + $("#pwarea").val())
			.append("<button type='button' class='btn btn-primary'>패스워드 수정</button>"); //수정하는 버튼 추가
			$("#pw_result button").on("click",function(){
					$("#pw_result").text("패스워드 : ");
					$("#pwarea").val("").focus();			
					$(this).fadeOut();
				});// password 결과값에 추가된 버튼 이벤트
			} // password 영역 if 문
			
		if($("#rangearea").val() !== "" && $("#rangearea").val() !== null ){
			$("#range_result").text("range : " + $("#rangearea").val())
			.append("<button type='button' class='btn btn-primary'>range 수정</button>"); //수정하는 버튼 추가
			$("#range_result button").on("click",function(){
					$("#range_result").text("range : ");
					$("#rangearea").val("").focus();			
					$(this).fadeOut();
				});// range 결과값에 추가된 버튼 이벤트
			} // range 영역 if 문
			
		if($("#colorarea").val() !== "" && $("#colorarea").val() !== null ){
			$("#color_result").text("색상 : " + $("#colorarea").val())
			.append("<button type='button' class='btn btn-primary'>색상 수정</button>"); //수정하는 버튼 추가
			$("#color_result button").on("click",function(){
					$("#color_result").text("color : ");
					$("#colorarea").val("").focus();			
					$(this).fadeOut();
				});// color 결과값에 추가된 버튼 이벤트
			} // color 영역 if 문
			
		if($("#datearea").val() !== "" && $("#datearea").val() !== null ){
			$("#date_result").text("날짜 : " + $("#datearea").val())
			.append("<button type='button' class='btn btn-primary'>색상 수정</button>"); //수정하는 버튼 추가
			$("#color_result button").on("click",function(){
					$("#color_result").text("color : ");
					$("#colorarea").val("").focus();			
					$(this).fadeOut();
				});// color 결과값에 추가된 버튼 이벤트
			} // color 영역 if 문
		});	//input 버튼을 눌렀을 때 이벤트 실행
	
});//전체