---
title: "herdr이 뭔데?"
description: herdr은 AI 코딩 에이전트를 여러 개 동시에 돌리고 관리하기 위한 도구이다. 
publishedAt: "2026-11-24"
tags:
  - 21일챌린지
readingTime: 1
---


herdr은 AI 코딩 에이전트를 여러 개 동시에 돌리고 관리하기 위한 도구이다. 기본적으로 pane을 나눠서 여러 에이전트가 돌아가는 모습을 한 눈에 볼 수 있으며, 여러 개의 window 역시 지원한다.

예전에는 기본적으로 tmux같은 터미널 앱이었지만, 현재는 `herdr-core`로 그 역할은 넘어갔다.

에이전트에게 곧바로 개조를 시킬 수도 있으며, 껐다 키지 않아도 곧바로 적용된다. 예를 들어서 이런 것들이 가능하다.

- vs code같은 에디터처럼 보이게 할 수 있다.
- 칸반 보드처럼 보이게 할 수 있다.
- UI를 한국어화하고, 수정하는 등 사소한 수정도 가능하다.

Remote control도 지원한다. 아마 가장 큰 도입 이유가 되지 않을까 싶다. 원격지 서버에 있는 herdr-core에 연결하는 것은 당연하고, iOS와 Android 앱도 지원한다.

에이전트 오케스트레이션도 가능하다. 다음과 같은 명령어를 사용하면, Claude Code에서 Codex를 실행하는 등의 오케스트레이션이 가능해진다.

`hc run --bg codex "review my diff. Done: hc send t1"`