(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{402:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"플러그인-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#플러그인-사용"}},[t._v("#")]),t._v(" 플러그인 사용")]),t._v(" "),a("p",[t._v("안녕하세요."),a("br"),t._v("\n오늘은 vuepress에서 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugin"),a("OutboundLink")],1),t._v("을 등록하는 방법에 대해서 알아보겠습니다.")]),t._v(" "),a("p",[t._v("모든 플러그인 리스트는 "),a("a",{attrs:{href:"https://github.com/vuepress/awesome-vuepress#plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 곳"),a("OutboundLink")],1),t._v("에서 확인하실 수 있습니다.")]),t._v(" "),a("p",[t._v("위 플러그인 리스트 중 가장 유명한 몇가지만 소개해드리겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"back-to-top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-to-top"}},[t._v("#")]),t._v(" back-to-top")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("back-to-top"),a("OutboundLink")],1),t._v(" 플러그인은 최상단으로 스크롤해주는 버튼이 생기는 플러그인입니다."),a("br"),t._v("\n웹사이트에서는 필수적인만큼 많은 분들이 이용합니다.")]),t._v(" "),a("p",[t._v("사용법은 간단합니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D @vuepress/plugin-back-to-top\n")])])]),a("p",[t._v("위 명령어로 설치하신 뒤, config.js를 수정해주시면 됩니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/back-to-top'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("저장 후 서버 재실행하신 후, 아무 페이지에서나 스크롤을 내려보시면 우측 하단에 화살표가 나타나는걸 확인하실 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"google-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-analytics"}},[t._v("#")]),t._v(" google-analytics")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("잠깐! 꼭 읽어주세요.")]),t._v(" "),a("p",[t._v("현재 구글 애널리틱스 가입 시 자동으로 애널리틱스 4로 가입됩니다."),a("br"),t._v("\n다만, 애널리틱스 4는 구글 애널리틱스 플러그인과 연동되지 않기 때문에 해당 포스트는 애널리틱스4 기준으로 플러그인을 이용하지 않고 연동하는 방법을 안내하겠습니다."),a("br"),t._v("\n애널리틱스 4 이전 버전인 분은 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서"),a("OutboundLink")],1),t._v("를 따라하시면 됩니다.")])]),t._v(" "),a("p",[t._v("구글 애널리틱스를 연동하면 사이트의 방문자 수, 인기 페이지 등의 데이터를 확인할 수 있습니다."),a("br"),t._v("\n해당 기능을 연동하시려면, 두 가지가 선행되어야 합니다.")]),t._v(" "),a("p",[a("strong",[t._v("1. 외부 접근이 허용되어 있어야 합니다.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- Github Pages를 이용해 배포하기 를 통해 간편하게 설정 가능합니다.\n")])])]),a("p",[a("strong",[t._v("2. "),a("a",{attrs:{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("애널리틱스 홈페이지"),a("OutboundLink")],1),t._v("에 사이트가 등록되어 있어야 합니다.")])]),t._v(" "),a("ul",[a("li",[t._v("사이트 방문 후 관리 > (관리자 탭) 계정 만들기 > 기타 정보 입력을 통해 계정을 생성할 수 있습니다."),a("br"),t._v("\n이후, 어시스턴트 설정 > 태그 설치 > 스트림 추가 > 도메인 입력 후 생성 > 생성한 스트림 클릭 > "),a("code",[t._v("측정 ID")]),t._v(" 복사 해주시면 됩니다.")])]),t._v(" "),a("p",[t._v("위 두 가지를 진행하신 후 하단 안내를 따라주세요.")]),t._v(" "),a("p",[a("strong",[t._v("1. "),a("code",[t._v(".vuepress/config.js")]),t._v(" 를 수정합니다.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\thead"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tasync"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tsrc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.googletagmanager.com/gtag/js?id=G-ABCDEFGHIJ'")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ABCDEFGHIJ');\"")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("위와 같이 "),a("code",[t._v("module.exports")]),t._v(" 내"),a("code",[t._v("head")]),t._v("에 추가해주시면 되는데, 주의하실 점은 "),a("code",[t._v("G-ABCDEFGHIJ")]),t._v(" 대신 방금 전 복사하셨던 "),a("code",[t._v("측정 ID")]),t._v("를 입력해주셔야합니다.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("잠깐! 꼭 읽어주세요!")]),t._v(" "),a("p",[t._v("위 내용은 방금 전 복사하셨던 "),a("code",[t._v("측정 ID")]),t._v(" 가 있는 카드 하단에 보시면 "),a("code",[t._v("태그하기에 대한 안내")]),t._v(" 라는 카드에 적혀있는 내용입니다."),a("br"),t._v("\n해당 안내가 수정되었을 경우, 위에서 안내드린 내용이 정상 작동 하지 않을 수 있으니 주의해주세요.")]),t._v(" "),a("p",[t._v("안내 위치 : 태그하기에 대한 안내 > 새로운 온페이지 태그 추가 > 전체 사이트 태그(gtag.js) 웹사이트 작성 도구 또는 CMS에서 호스팅하는 사이트를 사용하는 경우 이 태그 사용 > HTML의 "),a("code",[t._v("<head>")]),t._v(" 섹션에 입력해야하는 script > 해당 script를 vuepress head에 추가할 수 있도록 내용 수정")])]),t._v(" "),a("p",[t._v("연동한 페이지 접속 > 개발자 옵션 > 콘솔에서 gtag 입력 시 정의된 함수가 출력된다면 정상적으로 연동되었다는 것을 의미합니다.")]),t._v(" "),a("p",[t._v("혹은 서버에 반영 후 몇 번 접속 시도하신 뒤, 구글 애널리틱스 > 보고서 > 실시간 에서 실시간 사용자 수를 통해 확인하실 수도 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"sitemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitemap"}},[t._v("#")]),t._v(" sitemap")]),t._v(" "),a("p",[t._v("해당 플러그인 설치 시, sitemap을 xml로 자동 생성해줍니다.\n생성된 sitemap을 Google Search Console에 등록하여 seo 최적화를 할 수 있습니다.")]),t._v(" "),a("p",[a("strong",[t._v("1. 설치")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D vuepress-plugin-sitemap\n")])])]),a("p",[a("strong",[t._v("2. "),a("code",[t._v("config.js")]),t._v(" 수정")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sitemap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://tmdals9974.github.io/TIL/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("이후 "),a("code",[t._v("Google Search Console > Sitemaps > 새 사이트맵 추가 > https://tmdals9974.github.io/TIL/sitemap > 제출")]),t._v(" 을 통하여 사이트맵을 등록할 수 있습니다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);