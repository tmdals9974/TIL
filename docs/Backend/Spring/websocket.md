---
metaTitle: Spring (egovFramework)에서 WebSocket을 간편하게 사용해보자
lang: ko-KR
---

# WebSocket 사용법

#### 사용 라이브러리 : spring-websocket (서버), sockjs-client (클라이언트)
#### 환경 : EgovFramework(3.10.0)

## 서버 설정

### pom. xml

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-websocket</artifactId>
    <version>4.2.5.RELEASE</version>
</dependency>
```

### servlet-context.xml

```xml{6,10-11,13-20}
<beans:beans xmlns="http://www.springframework.org/schema/mvc"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:beans="http://www.springframework.org/schema/beans"
	xmlns:context="http://www.springframework.org/schema/context"
	xmlns:mvc="http://www.springframework.org/schema/mvc"
	xmlns:websocket="http://www.springframework.org/schema/websocket"
	xsi:schemaLocation="http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd
		http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
		http://www.springframework.org/schema/websocket
        http://www.springframework.org/schema/websocket/spring-websocket.xsd">

    <beans:bean id="EchoHandler" class="egovframework.sample.web.EchoController" />
	<websocket:handlers>
	    <websocket:mapping handler="EchoHandler" path="/Echo-ws" />
	    <websocket:handshake-interceptors>
	        <beans:bean class="org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor" />
	    </websocket:handshake-interceptors>
	    <websocket:sockjs />
	</websocket:handlers>
</beans:beans>
```

### EchoController.java

::: tip 읽어주세요!
해당 포스트는 간단 예제이기 때문에   
로그인/로그아웃 구분, 사용자 그룹별 소켓 구분(사용자/관리자), 아이디 별로 소켓저장 등   
소켓 분류를 별도 작업하지 않았습니다.   

해당 소스는 모든 웹소켓 연결에 대해 오픈되어 있으며,   
연결 시 모두 동일한 리스트에서 관리하게 됩니다.   

분류 작업을 원하신다면 추가로 리스트나 맵을 생성하시고,   
afterConnectionEstablished 에서 session에 설정되어있는 값에 따라 각기 다른 리스트에 저장하시면 간단하게 구현할 수 있습니다.
:::

```java
public class EchoController extends TextWebSocketHandler {

	// 로그인중인 유저
	ArrayList<WebSocketSession> users = new ArrayList<WebSocketSession>();

	// 클라이언트가 서버로 연결시
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {	
		ConsoleLogging.DebugLogging(ConsoleLogging.GetClassName(), ConsoleLogging.GetMethodName(), "Connection Success"); //sysout으로 대체하셔도 무관합니다. 콘솔 확인 편의성을 위해 사용했습니다.
		users.add(session);
	}

	// 클라이언트가 Data 전송 시
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		String msg = message.getPayload(); //메시지
		
		if (msg != null) {
			ConsoleLogging.DebugLogging(ConsoleLogging.GetClassName(), ConsoleLogging.GetMethodName(), "send Message :: " + msg);

			for (int i = 0; i < users.size(); i ++) { //모두에게 발송				
				((WebSocketSession)users.get(i)).sendMessage(new TextMessage(msg));
			}
		}
	}

	// 연결 해제될 때
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		ConsoleLogging.DebugLogging(ConsoleLogging.GetClassName(), ConsoleLogging.GetMethodName(), "Connection Close");
		users.remove(session);
	}

	// 에러 발생시
	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		ConsoleLogging.ErrorLogging("Session Error", (Exception)exception);
	}
}
```

### ConsoleLogging.java

::: tip
해당 클래스는 콘솔 로그용이며, 해당 클래스를 이용하지 않고 sysout만 이용하셔도 무관합니다.
:::

```java
public class ConsoleLogging {
	
	public static void DebugLogging(String className, String methodName, String message) {
		LogSeparator();
		System.out.println(LogHeader() + className + "/" + methodName + " : " + message);
		LogSeparator();
	}
	
	public static void ErrorLogging(String message, Exception ex) {
		LogSeparator();
		System.out.println(LogHeader() + message + " : " + ex.getMessage());
		System.out.println("ex.printStackTrace() ==> ");
		ex.printStackTrace();
		LogSeparator();
	}
	
	public static String LogHeader() {
		return "[" + GetToday() + "] ";
	}
	
	public static String GetPath() {
		return GetClassName() + "/" + GetMethodName();
	}
	
	public static String GetClassName() {
		return Thread.currentThread().getStackTrace()[2].getClassName();
	}

	public static String GetMethodName() {
		return Thread.currentThread().getStackTrace()[2].getMethodName();
	}
	
	public static String GetToday() {
		java.util.Date today = new java.util.Date();
		SimpleDateFormat formatTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.KOREAN);
		return formatTime.format(today);
	}
	
	public static void LogSeparator() {
		System.out.println("================================================================================");
		System.out.println("================================================================================");
		System.out.println("================================================================================");
	}
}
```

## 클라이언트 설정

### SampleController.java

```java
@GetMapping(value = "/client")
public String getClient(HttpServletRequest request, HttpServletResponse response) {
	return "egovframework/example/socket";
}

@GetMapping(value = "/server")
public String getServer(HttpServletRequest request, HttpServletResponse response) {
	return "egovframework/example/server";
}
```

### socket.jsp
해당 페이지는 메시지를 전달받을 클라이언트용 페이지입니다.

```html
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>client</title>
</head>
<body>
	hello Client!<br/>
	<b>접속 상태 : </b><span id="socketStatus">연결 중</span><br/>
	<b>전송 받은 메시지 : </b><span id="msg"></span><br >
	<b>최근 전송 받은 시간 : </b><span id="msgTime"></span>
	
	<script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
	
	<script>
	var socket = null;
	document.addEventListener("DOMContentLoaded", function(){
	    var sock = new SockJS('/echo-ws');
	    socket = sock;
	
	    sock.onopen = onOpen;
	    sock.onmessage = onMessage;
	    sock.onclose = onClose;
	});
	
	function onMessage(evt){
	    document.getElementById("msg").innerHTML = evt.data;
	    document.getElementById("msgTime").innerHTML = getNowString();
	};
	
	function onOpen() {
		document.getElementById("socketStatus").innerHTML = "접속 중";
	}
	
	function onClose() {
		document.getElementById("socketStatus").innerHTML = "접속 종료";
	}
	
	function getNowString() {
		var today = new Date();   
		var year = today.getFullYear(); 
		var month = today.getMonth() + 1;
		var date = today.getDate();
		var hours = today.getHours(); 
		var minutes = today.getMinutes(); 
		var seconds = today.getSeconds();
		
		return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
	}
	</script>
</body>
</html>
```

### server.jsp
해당 페이지는 메시지를 전달할 관리자용 페이지입니다.   

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"     pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>admin</title>
</head>
<body>
	hello Admin <br/>
	<b>접속 상태 : </b><span id="socketStatus">연결 중</span><br/>
	<input type="text" id="sendMessage"/>
	<button onclick="send()">send</button>
	
	<script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
	<script>
	var socket = null;
	
	document.addEventListener("DOMContentLoaded", function(){
	    // 웹소켓 연결
	    var sock = new SockJS("/echo-ws");
	    socket = sock;

		sock.onopen = onOpen;
	    sock.onclose = onClose;
	});

    function send(){ 
    	var msg = document.getElementById("sendMessage").value;
        socket.send(msg);
    }

	function onOpen() {
		document.getElementById("socketStatus").innerHTML = "접속 중";
	}
	
	function onClose() {
		document.getElementById("socketStatus").innerHTML = "접속 종료";
	}
	</script>
</body>
</html>
```

## 테스트 방법
서버를 실행하신 후, 각기 다른 브라우저 (엣지, 크롬, 웨일 등) 2개를 켜줍니다.

그리고 하나의 브라우저에서는 /server,   
다른 브라우저에서는 /client로 접속해줍니다.

이후, /server로 접속한 브라우저에서 메시지를 입력 후 send 버튼을 눌러주신 후   
/client로 접속한 브라우저에서 확인해보시면 server가 보낸 메시지가 화면에 표시되어있는걸 확인하실 수 있습니다.