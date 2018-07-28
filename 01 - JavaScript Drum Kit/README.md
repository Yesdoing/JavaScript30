# DrumKit≤

> 키보드 입력을 받아 드럼 사운드를 출력!

---

## Todo List

- [ x ] window 전역에서 keydown 이벤트를 리스닝한다
- [ X ]['a','s','d','f','g','h','j','k','l'] 키가 입력될 경우
  - [ X ] 해당 키의 드럼 사운드를 재생한다
  - [ X ] 부모 `<div>`에 `class="playing"`을 **toggle** 한다

## Tips

- `<audio>` 객체는 `play` method 로 재생할 수 있습니다.
- `transitionend` 이벤트를 사용하여 toggle class 를 구현
