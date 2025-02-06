(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{1252:(a,e,t)=>{Promise.resolve().then(t.bind(t,6220))},6220:(a,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});var n=t(5155),s=t(2115),i=t(906),l=t.n(i),c=t(5565),r=t(6046),_=t(8173),o=t.n(_);function h(){let a=(0,r.useSearchParams)(),[e,t]=(0,s.useState)(""),[i,_]=(0,s.useState)("한국어"),[h,d]=(0,s.useState)("이용중"),[u,g]=(0,s.useState)(""),[m,p]=(0,s.useState)("대화를 입력 해보세요."),[x,f]=(0,s.useState)("Language"),[j,k]=(0,s.useState)(!0),[b,y]=(0,s.useState)([{message:"반갑습니다! 저는 영산대학교 유학 상담 AI ‘영산이’ 입니다. 우리 대학에 대해서 무엇이든 물어보세요! 질문이 구체적일수록 정확한 답변을 받으실 수 있어요. 예를 들어, 학과 정보, 지원 절차, 장학금 안내 등이 있습니다.",autherType:0,action:"MS001",urls:[]}]);(0,s.useEffect)(()=>{let e=a.get("selectedLang");"Korean"==e?(_("한국어"),p("대화를 입력 해보세요."),f("Language"),d("이용중"),y([]),y([{message:"반갑습니다! 저는 영산대학교 유학 상담 AI ‘영산이’ 입니다. 우리 대학에 대해서 무엇이든 물어보세요! 질문이 구체적일수록 정확한 답변을 받으실 수 있어요. 예를 들어, 학과 정보, 지원 절차, 장학금 안내 등이 있습니다.",autherType:0,action:"MS001",urls:[]}])):"English (American)"==e?(_("미국 영어"),p("Enter a conversation."),f("Language"),d("In use"),y([]),y([{message:"Hello! I am Yeongsan AI, a study abroad counseling AI at Yeongsand University. Ask me anything about our university! The more specific your question is, the more accurate your answer will be. For example, you can ask about department information, application procedures, scholarship information, and more",autherType:0,action:"MS001",urls:[]}])):"Vietnamese"==e?(_("베트남어"),p("H\xe3y nhập đoạn hội thoại."),f("ng\xf4n ngữ"),d("Đang sử dụng"),y([]),y([{message:"Xin ch\xe0o! T\xf4i l\xe0 Youngsan AI, trợ l\xfd tư vấn du học tại Đại học Youngsan. Bạn c\xf3 thể hỏi t\xf4i bất cứ điều g\xec về trường đại học của ch\xfang t\xf4i! C\xe0ng cụ thể c\xe2u hỏi của bạn, t\xf4i c\xe0ng cung cấp cho bạn c\xe2u trả lời ch\xednh x\xe1c hơn. V\xed dụ như th\xf4ng tin về khoa, thủ tục ứng tuyển, th\xf4ng tin về học bổng, v.v.",autherType:0,action:"MS001",urls:[]}])):"Arabic (Modern Standard)"==e?(_("현대 표준 아랍어"),p("أدخل محادثة."),f("لغة"),d("في الاستخدام"),y([]),y([{message:'مرحبا! أنا "يونغسان" ، مساعد الذكاء الاصطناعي للاستشارات الدراسية في جامعة يونغسان. اسألني أي شيء عن جامعتنا! ستحصل على إجابات أكثر دقة إذا كانت أسئلتك محددة. على سبيل المثال، يمكنك سؤالي عن معلومات القسم، وإجراءات التقديم، ومعلومات المنح الدراسية، وغيرها الكثير.',autherType:0,action:"MS001",urls:[]}])):"Indonesian"==e?(_("인도네시아어"),d("Sedang digunakan"),p("Masukan percakapan Anda."),f("bahasa"),y([]),y([{message:"Selamat siang! Saya adalah Youngsan AI Counselor, “Youngsani”, dari Youngsan University. Silakan bertanya tentang universitas kami. Semakin spesifik pertanyaan Anda, semakin akurat jawaban yang akan Anda dapatkan. \n\nContohnya, informasi tentang jurusan, prosedur pendaftaran, atau panduan beasiswa.",autherType:0,action:"MS001",urls:[]}])):"Japanese"==e?(_("일본어"),d("使用中"),p("対話を入力してみてください."),f("言語"),y([]),y([{message:"こんにちは！私は英山大学留学相談AI「영산이」です。\n\n私たちの大学について、何でも質問してください！質問が具体的であればあるほど、正確な回答を得ることができます。 例えば、学科の情報、応募手続き、奨学金制度などの情報提供ができます",autherType:0,action:"MS001",urls:[]}])):"Chinese (Simplified)"==e?(_("간체 중국어"),d("使用中"),p("请输入对话."),f("言語"),y([]),y([{message:"你好！我是영산대학교留学咨询AI“영산이”。关于我们大学，你有什么问题都可以问我！问题越具体，你获得的答案就越准确。例如，你可以询问专业信息、申请流程、奖学金等内容。",autherType:0,action:"MS001",urls:[]}])):(_("한국어"),p("대화를 입력 해보세요."),d("이용중"),y([]),y([{message:"반갑습니다! 저는 영산대학교 유학 상담 AI ‘영산이’ 입니다. 우리 대학에 대해서 무엇이든 물어보세요! 질문이 구체적일수록 정확한 답변을 받으실 수 있어요. 예를 들어, 학과 정보, 지원 절차, 장학금 안내 등이 있습니다.",autherType:0,action:"MS001",urls:[]}]))},[a]);let w=async a=>{try{let e=await fetch("/api/chatbot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:a,language:i})});if(!e.ok)throw Error("Error: ".concat(e.status));let n=await e.json(),s=[];"MS001"!=n.info.action&&(s=n.info.sub_info.urls);let l={question:n.question,answer:n.info.message,action:n.info.action,urls:s};y(a=>[...a,{message:"",autherType:0,action:n.info.action,urls:s}]),t(""),N(l)}catch(a){k(!0),k(!1),console.error("Error while sending request:",a)}finally{k(!1)}},v=(0,s.useRef)(!1),S=()=>{e.trim()&&(setTimeout(()=>{t("")},50),w(e),y(a=>[...a,{message:e,autherType:1,action:"MS001",urls:[]}]),t(""))},N=a=>{let e=0;g("");let t=setInterval(()=>{e<a.answer.length-1?(g(t=>t+a.answer[e-1]),e++):(clearInterval(t),y(e=>{let t=[...e];return t[t.length-1]={message:a.answer,autherType:0,action:a.action,urls:a.urls},k(!0),t}),g(""))},a.answer.length>100?20:50)},T=(a,e,t)=>"MS001"==a.action?e===b.length-1&&t?(0,n.jsx)("div",{className:l().lef_chat_con,children:t}):(0,n.jsx)("div",{className:l().lef_chat_con,children:a.message}):"MS002"==a.action?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:l().lef_chat_con,children:[(0,n.jsxs)("div",{className:"".concat(l().youtube_wrap," ").concat(l().mb15),children:[(0,n.jsx)(c.default,{src:"/images/img-youtube01.png",alt:"weather",width:116.8,height:64.34}),(0,n.jsx)("p",{children:"러닝 달리기 90%가 몸 망친다, 제발 꼭 ‘이렇게' 뛰세요 (미드풋, 리어풋, 김병곤 박사)"})]}),(0,n.jsxs)("div",{className:"".concat(l().youtube_wrap," ").concat(l().mb15),children:[(0,n.jsx)(c.default,{src:"/images/img-youtube02.png",alt:"weather",width:116.8,height:64.34}),(0,n.jsx)("p",{children:"마라톤 국가대표 출신 찾아가서 배운 러닝자세 [10km EP.1]"})]}),(0,n.jsxs)("div",{className:"".concat(l().youtube_wrap),children:[(0,n.jsx)(c.default,{src:"/images/img-youtube03.png",alt:"weather",width:116.8,height:64.34}),(0,n.jsx)("p",{children:"올림픽 마라톤 골드메탈리스트 황영조 감독의 첫번째 실전강의! ‘미드풋? 난 아닌데...’"})]})]})}):"MS003"==a.action?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:l().lef_chat_con,children:(0,n.jsx)(c.default,{src:"/images/img-weather.png",alt:"weather",width:292,height:205.26})})}):"MS004"==a.action?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:l().lef_chat_con,children:(0,n.jsx)(c.default,{src:"/images/img-restr01.png",alt:"weather",width:292,height:120.26})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:l().lef_chat_con,children:a.message})}),M=(0,s.useRef)(null);return(0,s.useEffect)(()=>{M.current&&M.current.scrollIntoView({behavior:"smooth"})},[b,u]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{children:(0,n.jsxs)("div",{className:l().header_inner,children:[(0,n.jsx)("a",{children:(0,n.jsx)(c.default,{src:"/images/img-logo-new.png",alt:"logo",width:77,height:36})}),(0,n.jsxs)(o(),{href:"/i/language",className:l().lan_btn,children:[x," ",(0,n.jsx)(c.default,{src:"/images/ico-dropdown.svg",alt:"dropdown",width:18,height:10})]})]})}),(0,n.jsxs)("main",{children:[(0,n.jsx)("div",{className:l().main_inner,children:b.map((a,e)=>0===a.autherType?(0,n.jsxs)("div",{className:l().lef_chat,children:[(0,n.jsxs)("div",{className:l().lef_chat_tit,children:[(0,n.jsx)(c.default,{src:"/images/ico-chat.svg",alt:"chat_logo",width:40,height:40}),(0,n.jsxs)("div",{className:l().lef_chat_tit_txt,children:[(0,n.jsx)("h2",{children:"Y'sU"}),(0,n.jsx)("p",{children:"영산대학교"})]})]}),T(a,e,u)]},"ai-".concat(e)):(0,n.jsx)("div",{className:l().rig_chat,children:(0,n.jsx)("span",{children:a.message})},"user-".concat(e)))}),(0,n.jsx)("div",{ref:M})," "]}),(0,n.jsx)("footer",{children:(0,n.jsxs)("div",{className:l().footer_inner,children:[(0,n.jsxs)("div",{className:l().using_txt,children:[(0,n.jsx)(c.default,{src:"/images/ico-smile.svg",alt:"smile",width:16,height:15}),(0,n.jsxs)("p",{children:["Chat AI ",h]})]}),(0,n.jsxs)("div",{className:l().chat_con,children:[(0,n.jsx)("input",{type:"text",placeholder:m,value:e,onChange:a=>t(a.target.value),onKeyDown:a=>{"Enter"!==a.key||v.current||(v.current=!0,S(),setTimeout(()=>{v.current=!1},500))}}),j?(0,n.jsx)("button",{type:"submit",onClick:S,children:(0,n.jsx)(c.default,{src:"/images/ico-send.svg",alt:"send",width:50,height:40})}):(0,n.jsx)("button",{children:(0,n.jsx)(c.default,{src:"/images/ico-send_non.svg",alt:"send",width:50,height:40})})]})]})})]})}function d(){return(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)("p",{children:"Loading..."}),children:(0,n.jsx)("div",{className:l().body,children:(0,n.jsx)(h,{})})})}},906:a=>{a.exports={pc_body:"talk_pc_body__eSIZq",pc_container:"talk_pc_container__wu2Mb",pc_left:"talk_pc_left__GQjpK",pc_right:"talk_pc_right__K3uj2",pc_img:"talk_pc_img__H9VmS",pc_background:"talk_pc_background__gKlsU",body:"talk_body__xD6Cx",header_inner:"talk_header_inner__bfEAY",lan_btn:"talk_lan_btn__cAaVV",main_inner:"talk_main_inner__Palxy",lef_chat:"talk_lef_chat__ne9N9",lef_chat_tit:"talk_lef_chat_tit__xdkg3",lef_chat_tit_txt:"talk_lef_chat_tit_txt__Sf8Yz",lef_chat_con:"talk_lef_chat_con__9qWXX",rig_chat:"talk_rig_chat__apBzt",youtube_wrap:"talk_youtube_wrap__L3jmU",footer_inner:"talk_footer_inner__bi6WT",using_txt:"talk_using_txt__Cg_ga",chat_con:"talk_chat_con__qnA6R",modal:"talk_modal__WJQ1l",modal_wrap:"talk_modal_wrap__8hDoq",show:"talk_show__Y_0rU",modal_evt:"talk_modal_evt__y003M",modal_content:"talk_modal_content__9TxpV",modal_tit:"talk_modal_tit__WHVvq",lang_con:"talk_lang_con__6M_Tg",lang_tab:"talk_lang_tab__zL5iL",on:"talk_on__sDQ7g",dis:"talk_dis__z8DGK",modal_btn:"talk_modal_btn__rWEwy",ok_btn:"talk_ok_btn__oTlM8",setting_btn:"talk_setting_btn__iGU0C",mb15:"talk_mb15__ZG_OW"}}},a=>{var e=e=>a(a.s=e);a.O(0,[453,738,173,441,517,358],()=>e(1252)),_N_E=a.O()}]);