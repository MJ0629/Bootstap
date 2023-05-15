//JavaScript
        // input Type
        document.getElementById("input_btn").addEventListener("click",function(){
          var text = document.getElementById("textarea").value;
                text_result = document.getElementById("text_result");
                number = document.getElementById("numarea").value;
                num_result = document.getElementById("num_result");
                email = document.getElementById("emailarea").value;
                email_result =document.getElementById("email_result");
                password = document.getElementById("pwarea").value;
                pw_result = document.getElementById("pw_result");
                range = document.getElementById("rangearea").value;
                renge_result = document.getElementById("range_result");
                color = document.getElementById("colorarea").value;
                color_result = document.getElementById("color_result");
                date = document.getElementById("datearea").value;
                date_result = document.getElementById("date_result");
                month = document.getElementById("montharea").value;
                month_result = document.getElementById("month_result");
                time = document.getElementById("timearea").value;
                time_result = document.getElementById("time_result");

                //input에 값 입력했을 때 출력
                text_result.innerText = "텍스트: " + text;
                num_result.innerText = "숫자: " + number;
                email_result.innerText = "이메일: " + email;
                pw_result.innerText = "패스워드: " + password;
                range_result.innerText = "range: " + range;
                color_result.innerText = "색상 값: " + color;
                date_result.innerText = "날짜: " + date;
                month_result.innerText = "월: " + month;
                time_result.innerText = "시간: " + time;

                var textTit = text_result.innerText = "텍스트: ";
                    textResult = text_result.innerText = "텍스트: " + text;

                    editBtn = document.createElement("button");
                              editBtn.setAttribute('class','btn btn-primary ms-3');
                              editBtn.setAttribute('type','button');
                              editBtn.innerText = "텍스트 수정";

                if(textTit !== textResult) {
                    document.getElementById("text_result").appendChild(editBtn);
                    editBtn.addEventListener("click",function(){
                        this.remove();
                        text_result.innerText = "텍스트: ";
                        document.getElementById("textarea").value = "";
                        document.getElementById("textarea").focus();
                    });
                }
                   
                var numTit = num_result.innerText = "숫자: ";
                    numResult = num_result.innerText = "숫자: " + number;

                    numEditBtn = document.createElement("button");
                              numEditBtn.setAttribute('class','btn btn-primary ms-3');
                              numEditBtn.setAttribute('type','button');
                              numEditBtn.innerText = "숫자 수정";
                if(numTit !== numResult) {
                    document.getElementById("num_result").appendChild(numEditBtn);
                    numEditBtn.addEventListener("click",function(){
                        this.remove();
                        num_result.innerText = "숫자: ";
                        document.getElementById("numarea").value = "";
                        document.getElementById("numarea").focus();
                    });
                    
                }

                var emailTit = email_result.innerText = "이메일: ";
                    emailResult = email_result.innerText = "이메일: " + email;

                    emailEditBtn = document.createElement("button");
                              emailEditBtn.setAttribute('class','btn btn-primary ms-3');
                              emailEditBtn.setAttribute('type','button');
                              emailEditBtn.innerText = "이메일 수정";
                if(emailTit !== emailResult) {
                    document.getElementById("email_result").appendChild(emailEditBtn);
                    emailEditBtn.addEventListener("click",function(){
                        this.remove();
                        email_result.innerText = "이메일: ";
                        document.getElementById("emailarea").value = "";
                        document.getElementById("emailarea").focus();
                    });
                }

                var pwTit = pw_result.innerText = "패스워드: ";
                    pwResult = pw_result.innerText = "패스워드: " + password;

                    pwEditBtn = document.createElement("button");
                              pwEditBtn.setAttribute('class','btn btn-primary ms-3');
                              pwEditBtn.setAttribute('type','button');
                              pwEditBtn.innerText = "패스워드 수정";
                if(pwTit !== pwResult) {
                    document.getElementById("pw_result").appendChild(pwEditBtn);
                    pwEditBtn.addEventListener("click",function(){
                        this.remove();
                        pw_result.innerText = "패스워드: ";
                        document.getElementById("pwarea").value = "";
                        document.getElementById("pwarea").focus();
                    });
                }

                var rangeTit = range_result.innerText = "range: ";
                    rangeResult = range_result.innerText = "range: " + range;

                    rangeEditBtn = document.createElement("button");
                              rangeEditBtn.setAttribute('class','btn btn-primary ms-3');
                              rangeEditBtn.setAttribute('type','button');
                              rangeEditBtn.innerText = "range 수정";
                if(rangeTit !== rangeResult) {
                    document.getElementById("range_result").appendChild(rangeEditBtn);
                    rangeEditBtn.addEventListener("click",function(){
                        this.remove();
                        range_result.innerText = "range: ";
                        document.getElementById("rangearea").value = "";
                        document.getElementById("rangearea").focus();
                    });
                }

                var colorTit = color_result.innerText = "색상 값: ";
                    colorResult = color_result.innerText = "색상 값: " + range;

                    colorEditBtn = document.createElement("button");
                              colorEditBtn.setAttribute('class','btn btn-primary ms-3');
                              colorEditBtn.setAttribute('type','button');
                              colorEditBtn.innerText = "색상 수정";
                if(colorTit !== colorResult) {
                    document.getElementById("color_result").appendChild(colorEditBtn);
                    colorEditBtn.addEventListener("click",function(){
                        this.remove();
                        color_result.innerText = "색상 값: ";
                        document.getElementById("colorarea").value = "";
                        document.getElementById("colorarea").focus();
                    });
                }

                var dateTit = date_result.innerText = "날짜: ";
                    dateResult = date_result.innerText = "날짜: " + date;

                    dateEditBtn = document.createElement("button");
                              dateEditBtn.setAttribute('class','btn btn-primary ms-3');
                              dateEditBtn.setAttribute('type','button');
                              dateEditBtn.innerText = "날짜 수정";
                if(dateTit !== dateResult) {
                    document.getElementById("date_result").appendChild(dateEditBtn);
                    dateEditBtn.addEventListener("click",function(){
                        this.remove();
                        date_result.innerText = "날짜: ";
                        document.getElementById("datearea").value = "";
                        document.getElementById("datearea").focus();
                    });
                }

                var monthTit = month_result.innerText = "월: ";
                    monthResult = month_result.innerText = "월: " + month;

                    monthEditBtn = document.createElement("button");
                              monthEditBtn.setAttribute('class','btn btn-primary ms-3');
                              monthEditBtn.setAttribute('type','button');
                              monthEditBtn.innerText = "월 수정";
                if(monthTit !== monthResult) {
                    document.getElementById("month_result").appendChild(monthEditBtn);
                    monthEditBtn.addEventListener("click",function(){
                        this.remove();
                        month_result.innerText = "월: ";
                        document.getElementById("montharea").value = "";
                        document.getElementById("montharea").focus();
                    });
                }

                var timeTit = time_result.innerText = "시간: ";
                    timeResult = time_result.innerText = "시간: " + time;

                    timeEditBtn = document.createElement("button");
                              timeEditBtn.setAttribute('class','btn btn-primary ms-3');
                              timeEditBtn.setAttribute('type','button');
                              timeEditBtn.innerText = "시간 수정";
                if(timeTit !== timeResult) {
                    document.getElementById("time_result").appendChild(timeEditBtn);
                    timeEditBtn.addEventListener("click",function(){
                        this.remove();
                        time_result.innerText = "시간: ";
                        document.getElementById("timearea").value = "";
                        document.getElementById("timearea").focus();
                    });
                }
                    

                    
        });
                
        // select
        document.getElementById("select_btn").addEventListener("click",function(){
            var select = document.getElementById("fruits");
                option = select.childElementCount;
            
            if(select.value === "") {
              alert("과일을 선택해주세요");
              var plusFruits = prompt("좋아하는 과일을 적어주세요");
              var plusOption = document.createElement("option");
                  plusOption.text = plusFruits;
                  plusOption.value = plusFruits;
                  
                  if (plusFruits !== null && plusFruits !== "") {
                      select.add(plusOption);
                  }

            } else {
              alert("Your Choice: " + select.value); 
              var editSelectBtn = document.createElement("button");             
                  editSelectBtn.setAttribute("class", "btn btn-primary mt-5 ms-3");
                  editSelectBtn.setAttribute("type","button");
                  editSelectBtn.innerText = "옵션 수정";
                  document.querySelector("#select_btn_box").appendChild(editSelectBtn);
                  
                  editSelectBtn.addEventListener("click",function(){
                   
                    var changeFruits = prompt("변경할 과일을 입력해주세요");
                        for (i=0; i<option; i++) {
                          if(select[i].selected === true ) {
                            document.querySelector("#fruits")[i].value = changeFruits; 
                            document.querySelector("#fruits")[i].innerText = changeFruits;
                            console.log("변경된 옵션 : "  + changeFruits);
                          }
                        }                       
                  }); //수정버튼
                   
            }
        });

        // checkBox
        document.getElementById("checkbox_btn").addEventListener("click",function(){

			var genderObjLength = document.getElementsByName("gender").length; //3
				genderObj = document.getElementsByName("gender");
				
			var editObjBtn = document.createElement("button");
				editObjBtn.innerText = "성별 수정";
				editObjBtn.setAttribute("class","btn btn-primary mt-5 ms-3");
				editObjBtn.setAttribute("type","button");		
				//console.log(resultObj[1].value)			
					for( i=0; i < genderObjLength; i++ ) {
					
						if(genderObj[i].checked == true) {
						
						alert (genderObj[i].value);
						document.querySelector(".checkbox").appendChild(editObjBtn);
						document.getElementsByName("gender")[0].checked = false;
						document.getElementsByName("gender")[1].checked = true;
						/*document.getElementById("etc").checked = true;	*/
							
							
				}}
								editObjBtn.addEventListener("click",function(){
								for( i=0; i < genderObjLength; i++ ) {
								if(genderObj[i].checked == true) {
									var findLabel = genderObj[i];
										labelFor = findLabel.getAttribute("id");
										labelText = document.querySelector('label[for="'+ labelFor+ '"]');
										
									var changeVal = prompt("변경할 성별을 적어주세요");
										genderObj[i].value = changeVal;
										console.log("변경된 성별 : " + genderObj[i].value);
										labelText.innerText = changeVal;
														
								}}
					});
				});//checkbox클릭
		
		  // radio
		        document.getElementById("radio_btn").addEventListener("click",function(){
		
					var telecomObjLength = document.getElementsByName("telecom").length; //3
						telecomObj = document.getElementsByName("telecom");
						
					var telEditObjBtn = document.createElement("button");
						telEditObjBtn.innerText = "통신사 수정";
						telEditObjBtn.setAttribute("class","btn btn-primary mt-5 ms-3");
						telEditObjBtn.setAttribute("type","button");		
									
							for( i=0; i < telecomObjLength; i++ ) {
							
								if(telecomObj[i].checked == true) {
								
								alert (telecomObj[i].value);
								document.querySelector(".radio").appendChild(telEditObjBtn);
								document.getElementsByName("telecom")[0].checked = false;
								document.getElementsByName("telecom")[1].checked = true;
									
							}
						}
										telEditObjBtn.addEventListener("click",function(){
										for( i=0; i < telecomObjLength; i++ ) {
										if(telecomObj[i].checked == true) {
											var findLabelTel = telecomObj[i];
												labelForTel = findLabelTel.getAttribute("id");
												labelTextTel = document.querySelector('label[for="'+ labelForTel+ '"]');
												
											var changeValTel = prompt("변경할 통신사를 적어주세요");
												telecomObj[i].value = changeValTel;
												console.log("변경된 통신사 : "+telecomObj[i].value);
												labelTextTel.innerText = changeValTel ;
										}}
							});

            
        });
                
                
                
               
                

        