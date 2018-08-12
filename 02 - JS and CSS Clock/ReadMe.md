# Js Clock

> js 시계 

---

## Todo List

- [ X ] 1초마다 시간을 표시한다. 


### 배운 것 

transform translate rotate

transform-origin 속성을 가지고 축을 삼아서 회전 시킬 수 있다 ! 
```css
 transform: rotate(90deg);
 transform-origin: right center;


```


CSS Clock
CSS 속성을 조작하여 매 초 실시간으로 변경되는 시계를 구현

Todo List
 매 초 <div class="hand second-hand"> 의 위치가 변해야 한다
 매 분 <div class="hand min-hand"> 의 위치가 변해야 한다
 매 시간 <div class="hand hour-hand"> 의 위치가 변해야 한다
Tips
setInterval 사용하여 매 초 css 속성값 제어
360를 기준으로 각각이 몇 도를 움직이는지 고려 해보면 좋을듯 합니다.
clearInterval 코드를 추가하면 좋을 듯 합니다
