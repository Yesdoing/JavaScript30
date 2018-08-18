# Everything(Maybe) in Array
> Array 객체 메서드를 이용해 다양한 정렬과 계산을 해보자
---

## Todo List
- [ ] Filter the list of inventors for those who were born in the 1500's
    - 1500년대에 태어난 발명가들만 filtering
- [ ] Give us an array of the inventors' first and last names
    - 발명가들의 `first`, `last` 값이 담긴 배열 만들기
- [ ] Sort the inventors by birthdate, oldest to youngest
    - 발명가들의 `birthdate` 내림차순으로 정렬하기
- [ ] How many years did all the inventors live?
    - 모든 발명가들의 수명 더하기
- [ ] Sort the inventors by years lived
    - 발명가들을 수명 내림차순으로 정렬
- [ ] create a list of Boulevards in Paris that contain 'de' anywhere in the name
    - 이름에 'de' 가 들어간 프랑스 대성당 목록을 만듦
    - `boulevards` 변수 활용
- [ ] Sort the people alphabetically by last name
    - `people` 배열에서 last name 기준으로 알파벳 순으로 정렬
- [ ] Sum up the instances of each of these
    - `data` 배열 이용하여, 각각의 카운트를 구하기
    - `{ car: 4, truck: 3 ... }` 과 같이

## More Todo
- [ ] 배열 데이터 table로 퍼블리싱 해보기




### 하면서 배운 점 

## More Todo
- [ ] 배열 데이터 table로 퍼블리
이건 어떻게 하는 거지???

sort사용 객체 일 때는 객체 값을 비교해줘서 return 값을 해줘야 됨 
숫자일때만 sort((a,b)=>a-b) 이렇게 간단히 해줄 수 있다.

### Question 


```js
 // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // 어이가 없는 부분 발견 ... 
    // 아래 주석 구문 처럼 실행하면 제대로 실행이 안 되는데 왜??? 나중 값을 변화시켜서 그런지 
    // inventors.sort((a,b)=>compare(b.year, a.year));
    // 이 부분 ? 도저히 이해가 안 감 
    const result_three = [...inventors].sort((a,b)=>compare(b.year, a.year));

     console.dir(result_three);

```