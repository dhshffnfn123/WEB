


        // 국/영/수 점수를 가진 랜덤 학생 100을 자바스크립트 오브젝트로 생성하고
        const student = [];
        
        for (let i = 0; i < 100; i++) {
            const score = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
            student.push(score);
        }

        console.log(student);

        // 1. map()을 이용해 모든 학생들의 평균 점수 배열을 생성
        const avg = student.map(array => {
            return Math.floor(array.reduce((a, b) => a + b, 0) / array.length); //a는 누적값, b는 현재값
        });
        console.log(avg);


        // 2. filter()를 이용해 평균 점수가 70점 이하인 학생들로 이루어진 배열을 생성하여 html 테이블에 출력 (점수가 가장 낮은 학생은 빨간 글씨로 출력)
        const filter = avg.filter(value => {return value < 70 });
        filter.sort(function (a, b) {
            return a - b;
        });
        console.log(filter);
        
        for (let i = 0; i < filter.length; i++){
            
            if(i == 0) {
                document.write('<tr style="color: red; background-color: pink">');
            } else {
                document.write('<tr>');
            }
            document.write('<th class="sco">');
            document.getElementsByClassName("sco")[i].innerHTML = filter[i]; 
            document.write('</th>');
            if(i == 0){
                document.write('</tr>');
            } else {
                document.write('</tr>');
            }
            
        }

