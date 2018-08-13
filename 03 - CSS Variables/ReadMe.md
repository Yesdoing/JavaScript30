# CSS Variable
## CSS Variable 을 Javascript API를 사용하여 조작해보자!

### Todo List
- [ ] 에서 CSS Variable 을 선언하고, img에 스타일을 적용해 둬야 해요
- [ ] input#spacing을 조작하여 <img> padding 값을 조절할 수 있어야 해요
- [ ] input#blur을 조작하여 <img> filter 값을 조절할 수 있어야 해요
- [ ] input#base을 조작하여 <img> background-color 을 변경할 수 있어야 해요
Tips
- [ ] `<input>`에 부여할 event 는 'change', 'mousemove' 두 가지 입니다.
<br>
### CSS Variable 관련된 학습은 이곳 에서
Javascript 에서의 CSS Variable API 또한 문서 아래쪽에 있습니다.



### 하면서 배운점 




1. 문제를 잘 보자 ... data-sizing을 왜 해줬는지 체크? 
` const suffix = dataset.sizing || '';
2. 커밋하기 전에 테스트들 살펴보고 커밋하기 !!! 

> 답보면서 공부하기  

1. `data.set` 활용 
2. id보단 name으로 맵핑했는데 이유가 있는지 알아보기 
3. `qs('.controls').addEventListener('mousemove', handlerControllerChanged)` 마우스 무브 이벤트는 안 되는 것 같다 _=아,  아니다 mouseMove가 적용되어야지 변화하는 동안에도 변화를 감지해서 변화시킨다. 
change는 마지막 action에만 반응한다. <br>

4. `document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);`
이거 css변수 활용한다면 전체를 다 바뀐 부분으로 바꿔줄 수 있어서 좋은 것 같다. document.documentElement


### Question  

1. forEach처리 
```js
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
답에서 forEach한 번에 왜 같이 넣지는 않았을까?

```

2. css 변수 사용하는 방법 
```css
 :variables {
       --main-bg-color: brown;
    }
 
 :root {
     --base: brown;
 }

```
Q2. 이렇게 하니까 적용이 안 된다.  `:root`를 지켜야 되나?



