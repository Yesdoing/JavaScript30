![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

[Javascript30](https://JavaScript30.com) 강좌를 기반으로 개발환경을 추가하였습니다.

## Branches
**master는 답안지, develop은 문제지, 제출은 각자 별도의 브랜치를 생성하여 작업합니다**
- 작업은 꼭 각자의 브랜치로 checkout 한 뒤 작업해주세요😝
- 작업이 완료되면 원격 저장소의 각자의 브랜치로 Push 하시면 됩니다!

## How to start
**각 챕터별로 browser-sync live reload 되도록 스크립트 사전 작성**

```sh
$ git clone https://github.com/sat10am/JavaScript30.git && cd Javascript30

# Most Important!
$ git checkout -b <YOUR-NAME> origin/develop # develop branch 기준으로 새 사용자 브랜치 생성

# yarn 이 있을경우
$ yarn && yarn run ch1 # {ch[1-30]}

# yarn 이 없을경우
$ npm i && npm run ch1 # {ch[1-30]}

# 작업 완료 후
$ git push -u origin <YOUR-NAME> # PUSH를 위해 조직에 개발자로서 초대 필요

# develop branch에 추가된 README를 내 branch로 불러올 경우
$ git checkout <YOUR-BRANCH>
$ git merge develop # develop 에 추가된 각 챕터별 README.md 파일을 업데이트 할 수 있음
```

