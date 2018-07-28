# CSS Clock
> CSS 속성을 조작하여 매 초 실시간으로 변경되는 시계를 구현
---

## Todo List
- [ ] 매 초 `<div class="hand second-hand">` 의 위치가 변해야 한다
- [ ] 매 분 `<div class="hand min-hand">` 의 위치가 변해야 한다
- [ ] 매 시간 `<div class="hand hour-hand">` 의 위치가 변해야 한다

## Tips
- `setInterval` 사용하여 매 초 css 속성값 제어
- 360를 기준으로 각각이 몇 도를 움직이는지 고려 해보면 좋을듯 합니다.
- `clearInterval` 코드를 추가하면 좋을 듯 합니다