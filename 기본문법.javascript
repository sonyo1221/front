<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title>기본 문법</title>
        <script>
            //경고창창
            alert('자바스크립트 시작!!!');
            //문서(body)에 출력
            document.write('안녕하세요!');
            //콘솔
            console.log('안녕하세요!');
            //데이터 유형
            document.write(100);
            document.write('100'); 
            document.write("안녕?"); //작은,큰 둘 다 가능 함
            document.write('<br>'); 
            document.write('<a href="#">링크태그</a>'); //링크 태그도 인식을 해야하기 때문에 작은,큰 둘 다 문자열로 인식됨.
            //불 표현
            document.write(10 > 5); //true라는 키워드가 출력(키워드 -예약어)
            document.write('true'); // line20과는 다르게 문자열로 출력
            //사칙연산
            console.log(10-'10'); //0 
            console.log(10-'백'); //NaN
            console.log(10 + '10'); // 1010 -> 더하기연산은 숫자만 가능하기 때문에 문자열이 들어가면 연결연산자로 바뀜.
            //완전전항등연산자 -> 데이터유형 비교
            console.log(10 == '10'); //true출력
            console.log(10 === '10'); //false출력
        </script> 
    </head>
    <body>
          
    </body>
</html>
