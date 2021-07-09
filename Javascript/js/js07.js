


function print(text) {
    console.log(text);
}

const num1 = 123;

//숫자를 문자열로 변환
print(num1.toString()); // 123
print(typeof num1.toString()); // string

// 특정 객체의 원시 값을 반환(인스턴스에서 숫자 값을 추출)
print(num1.valueOf()); // 123

// Number(): 다양한 자바스크립트 값들을 숫자 타입으로 변환해주는 메서드
print(Number(true)); // 1
print(Number(false)); // 0
print(Number('10.1234')); // 10.1234
print(Number('     10.1234   ')); // 10.1234
print(Number('     11234   ')); // 11234
print(Number('Mike')); // 변환에 실패하는 경우 NaN(Not a Number) // NaN
print(Number('10 11 12')); // NaN
print(Number('123,456')); // NaN


// Date타입을 Number로 변환하면 Unix Time이 된다
print(new Date()); // 현재 시간
print(Number(new Date())); // 1625672171174 : ??

// parseInt(): 문자열을 정수 타입으로 변환
// 맨 앞에 있는 것만 잘라줌(공백은 알아서 자른다)
print(parseInt("-1234")); // -1234
print(parseInt("12 20 30")); // 12 
print(parseInt("10 years old")); //10 : 됨
print(parseInt("I am 15 years old")); //NaN : 안됨

//parseFloat() : 문자열을 실수 타입으로 변환
print(parseFloat("123.1234"));  // 123.1234

// 숫자 관련 상수 - 딱히 필요 없음!
print(Number.MAX_VALUE);
print(Number.MAX_SAFE_INTEGER);
print(Number.MIN_VALUE);
print(Number.MIN_SAFE_INTEGER);
print(Number.POSITIVE_INFINITY);
print(1 / 0);
print(Number.NEGATIVE_INFINITY);
print(-1 / 0);
