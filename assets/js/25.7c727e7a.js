(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{401:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"프로젝트-스타일링"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트-스타일링"}},[t._v("#")]),t._v(" 프로젝트 스타일링")]),t._v(" "),a("p",[t._v("해당 포스트는 "),a("a",{attrs:{href:"http://milooy.github.io/TIL/",target:"_blank",rel:"noopener noreferrer"}},[t._v("유림님의 TIL 구성"),a("OutboundLink")],1),t._v("과 "),a("a",{attrs:{href:"https://junilhwang.github.io/TIL/Vuepress/Theme/#theme-eject",target:"_blank",rel:"noopener noreferrer"}},[t._v("황준일님의 VuePress 테마 설정"),a("OutboundLink")],1),t._v("을 참고하여 제작하였습니다.")]),t._v(" "),a("h2",{attrs:{id:"vue-component로-페이지-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-component로-페이지-생성"}},[t._v("#")]),t._v(" Vue Component로 페이지 생성")]),t._v(" "),a("p",[t._v("이번 챕터는 Vue에 대한 기본 지식이 있다는 전제 하에 진행하겠습니다.\n다만 Vue를 모르시더라도, 숙련도를 필요로 하는 내용은 아니기에 보고 이해하실 수 있을겁니다.")]),t._v(" "),a("p",[t._v("특정 페이지에서 Vue Component를 이용하는 방법을 알아보도록 하겠습니다.")]),t._v(" "),a("p",[t._v("저는 프로젝트 메인 페이지를 Vue Component를 이용해 꾸며보겠습니다.")]),t._v(" "),a("p",[a("strong",[t._v("1. "),a("code",[t._v("docs/.vuepress/components/Home.vue")]),t._v(" 를 생성합니다.")])]),t._v(" "),a("p",[a("code",[t._v("Home.vue")]),t._v("가 아닌 원하는 이름으로 생성하셔도 무관하지만, 첫 글자는 무조건 대문자로 시작해야합니다.")]),t._v(" "),a("p",[a("strong",[t._v("2. vue 파일을 원하는 내용으로 수정합니다.")])]),t._v(" "),a("p",[t._v("저는 아래와 같이 수정하였습니다.")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("titleContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$withBase("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t테스트 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t타이틀\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("서브 타이틀"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RixYeoljeongdo_Regular'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'woff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".titleContainer > h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space-evenly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RixYeoljeongdo_Regular'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 17px solid #ffd816"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keep-all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".titleContainer .logo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 180px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 180px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 550px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".titleContainer .logo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 140px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 140px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 430px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".titleContainer .logo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("docs/README.md")]),t._v(" 를 다음과 같이 수정합니다.")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Home")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("이후, 프로젝트 메인화면으로 이동하시면 Vue로 작성한 페이지가 표시되는 걸 확인하실 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"전역-스타일-이용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전역-스타일-이용"}},[t._v("#")]),t._v(" 전역 스타일 이용")]),t._v(" "),a("p",[t._v("이번엔 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/config/#styling",target:"_blank",rel:"noopener noreferrer"}},[t._v("전역 스타일"),a("OutboundLink")],1),t._v("을 이용해 .md 파일을 꾸며보도록 하겠습니다."),a("br"),t._v("\n다만 VuePress 내에서만 적용되는 스타일이기 때문에, VuePress를 이용하지 않고 .md 파일만 단독으로 실행하실 땐 적용되지 않음을 참고 부탁드립니다.")]),t._v(" "),a("p",[t._v("우선 "),a("code",[t._v("docs/.vuepress/styles")]),t._v(" 폴더를 생성해주시고, 해당 폴더에 ["),a("code",[t._v("index.styl")]),t._v(", "),a("code",[t._v("palette.styl")]),t._v("] 두 파일을 생성합니다.\n두 파일 다 "),a("code",[t._v("stylus")]),t._v("로 만들어져있지만 어렵지 않으니 걱정마세요.")]),t._v(" "),a("h3",{attrs:{id:"palette-styl-수정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#palette-styl-수정"}},[t._v("#")]),t._v(" palette.styl 수정")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/config/#palette-styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("palette.styl"),a("OutboundLink")],1),t._v("는 정의되어 있는 기존 색상을 재정의 할 수 있는 파일입니다.")]),t._v(" "),a("p",[t._v("예를 들어 기본 "),a("code",[t._v("vuepress")]),t._v("의 "),a("code",[t._v("accentColor")]),t._v("는 초록색인데, 그 색상을 변경할 수 있는겁니다.")]),t._v(" "),a("p",[t._v("palette.styl의 내용을")]),t._v(" "),a("div",{staticClass:"language-stylus extra-class"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#4c9ccc")])]),t._v("\n")])])]),a("p",[t._v("와 같이 수정하시면 쉽게 이용하실 수 있습니다.\n"),a("code",[t._v("stylus")]),t._v("에서는 "),a("code",[t._v("css")]),t._v("와 다르게 변수선언을 할 수 있기 때문에 가능합니다.")]),t._v(" "),a("p",[a("code",[t._v("palette.styl")]),t._v("를 이용해 재정의할 수 있는 모든 변수는 "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/client/style/config.styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 곳"),a("OutboundLink")],1),t._v("을 확인해주세요.")]),t._v(" "),a("h3",{attrs:{id:"index-styl-수정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-styl-수정"}},[t._v("#")]),t._v(" index.styl 수정")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/config/#index-styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("index.styl"),a("OutboundLink")],1),t._v("은 전역 스타일을 설정하는 파일입니다.")]),t._v(" "),a("p",[a("code",[t._v("stylus")]),t._v("를 이용해 스타일을 설정하긴 하지만, 일반 "),a("code",[t._v("css")]),t._v(" 문법도 그대로 이용할 수 있습니다.")]),t._v(" "),a("p",[a("code",[t._v("index.styl")]),t._v("을 수정해보겠습니다.")]),t._v(" "),a("div",{staticClass:"language-stylus extra-class"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cafe24SsurroundAir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Nanum Gothic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Malgun Gothic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -apple-system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BlinkMacSystemFont"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Segoe UI'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Roboto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Oxygen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Cantarell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Open Sans'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helvetica Neue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RixYeoljeongdo_Regular"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("px")]),t._v(" solid "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#ffd816")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keep-all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule-declaration"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@font-face")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cafe24SsurroundAir'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff')")]),t._v(" format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'woff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule-declaration"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@font-face")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RixYeoljeongdo_Regular"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\tsrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(")")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"woff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("위와 같이 수정하고 서버를 재실행해보시면, 모든 페이지의 글꼴과 타이틀의 스타일이 수정된 걸 확인하실 수 있습니다.")]),t._v(" "),a("p",[t._v("해당 스타일은 Vue Component에도 적용되기 때문에, 만약 Vue Component로 페이지 생성에서 제 style을 그대로 이용하셨다면 "),a("code",[t._v("index.styl")]),t._v("과 겹치는 부분은 제거해주시면 되겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"마무리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[t._v("#")]),t._v(" 마무리")]),t._v(" "),a("p",[t._v("위 두가지 내용을 활용하시면, 원하는 대로 프로젝트를 꾸미실 수 있을겁니다.")]),t._v(" "),a("p",[t._v("만약 css 변경에서 그치지 않고 전체적인 레이아웃을 수정하고 싶으시다면 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/",target:"_blank",rel:"noopener noreferrer"}},[t._v("테마 설정"),a("OutboundLink")],1),t._v("을 통해 가능하니 참고 부탁드립니다.")]),t._v(" "),a("p",[t._v("또는 이미 만들어져 있는 테마를 적용할 수도 있습니다. 테마 목록은 "),a("a",{attrs:{href:"https://github.com/vuepress/awesome-vuepress#themes",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 곳"),a("OutboundLink")],1),t._v("에서 확인하실 수 있습니다.")]),t._v(" "),a("p",[t._v("읽어주셔서 감사합니다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);