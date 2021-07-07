//alert(text); //window.은 생략 가능

console.log('length', text.length); // length 17

//slice, substring(start_index, end_index)
console.log('slice', text.slice(3, 9)); // lo Jav
console.log('substring', text.substring(3, 9)); // lo Jav 
// start_index는 포함, end_index는 미포함이다
// slice와 substring은 거의 똑같지만 start_index가 end_index보다 크다면,
// slice는 ""를 반환하지만 substring은 start와 end를 바꾸어서 반환해준다


// substr(start_index, length) - start_index부터 length만큼 String을 잘라내어 반환한다
console.log('substr', text.substr(3, 6)); // lo Jav

// 전달한 값이 음수라면 인덱스를 뒤에서 부터 세준다
console.log('slice: ', text.slice(2)); // llo Javascript! - end_index가 없으면 끝까지 
console.log('slice: ', text.slice(2, -1)); // llo Javascript
console.log('slice: ', text.slice(2, -2)); // llo Javascrip
console.log('slice: ', text.slice(2, -3)); // llo Javascri
// String의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급한다
// 전달한 값이 string에 길이보다 크다면 단순히 0으로 처리한다


// 문자열을 모두 대문자로 변환시켜준다 : string.toUpperCase();
console.log('toUpperCase: ', text.toUpperCase()); // HELLO JAVASCRIPT!
// 문자열을 모두 소문자로 변환시켜준다 : string.toLowerCase();
console.log('toLowerCase: ', text.toLowerCase()); // hello javascript!


// 문자열의 공백 제거하기 : string.trim();
console.log('before trim: ', '             ABCDEFG                  ');
console.log('after trim: ', '               ABCDEFG          '.trim());

//문자열의 공백 제거하기 2 : string.replace(searchValue, newValue);
let str1 = "           replace Test!   ";
console.log(str1.replace(/^\s*/, "")); // 정규표현식에 의해 앞의 공백만 지워진다 


// 문자열 앞뒤에 원하는 만큼 원하는 문자를 붙일 수 있음 : targetLength는 문자열까지 합한 length
// string.padStart(targetLength, padString).padEnd(targetLength, padString)
console.log('before padding: ', 'ABCDEFG');
console.log('after padding: ', 'ABCDE'.padStart(10, '#').padEnd(15, '!@#')); // #####ABCDE!@#!@

// 특정 인수번째 문자 반환하기 : string.charAt(index);
console.log('ABCDEF'.charAt(3)); // D
console.log('ABCDEF'[3]); // D
// 특정 인수번째 문자의 유니코드 알아내기 : string.charCodeAt(index);
console.log('ABCDEF'.charCodeAt(3)); // 68

const fruit_arr = fruit.split(' ');
console.log(fruit_arr);


// 특정 문자 위치 찾기 : string.indexOf(searchValue, position(default = 0, 생략가능));
// 검색된 문자열이 '첫번째'로 나타나는 위치 index를 반환
// 찾는 문자열이 없으면 -1을 반환
// 대소문자를 구분함
console.log(text.indexOf('H')); // 0
console.log(text.indexOf('a')); // 7
// lastIndexOf는 역순으로 검색한다 따라서 검색된 문자열의 '마지막'으로 나타나는 위치 index를 반환한다
console.log(text.lastIndexOf('a')); // 9
// indexOf는  시작위치를 결정할 수 있다
console.log(text.indexOf('Java', 10)); // -1 (없으면 -1 반환)


// indexOf와 비슷하다 search는 정규 표현식을 사용할 수 있다 
console.log(text.search('J.{3}')); // 6

// match: 문자열에 대한 정규표현식 검사를 할 수 있다 (배열 객체로 반환)
console.log(names.match('.{2,3}민수,'));// .{2,3}민수 앞에 모든것이 두글자거나 세글자그나


// 특정 문자열을 포함하는지 확인하기 : string.includes(searchString, length)
// 대소문자 구분함
// length : 검색을 시작할 위치, 생략가능(전체를 대상)
console.log('includes 박민규? ', names.includes('박민규')); // false
console.log('includes 서우현? ', names.includes('서우현')); // true

// 문자열이 특정 문자열로 시작하는지 확인하기 : string.startWith(searchString, length)
// 대소문자 구분함
// length : 문자열 중 어디까지 검색할 지 지정, 생략 가능(전체를 대상)
console.log('text startswith hello?', text.startsWith("hello")); // false
console.log('text startswith Hello?', text.startsWith("Hello")); // true

// 문자열이 특정 문자열로 끝나는지 확인하기 : string.endsWith(searchString, length)
// 대소문자 구분함
// length : 문자열 중 어디까지 검색할 지 지정, 생략 가능(전체를 대상)
console.log('text ends with script!?', text.endsWith("script!")); // true

console.log(practice.slice(2,4)); //cd
console.log(practice.substring(2,4)); //cd
