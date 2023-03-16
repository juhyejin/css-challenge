# day 1
<img width="300" alt="스크린샷 2023-01-18 오후 3 07 01" src="https://user-images.githubusercontent.com/82946898/213097094-a856e2eb-e0a5-4020-9fa7-e9298e9e81e7.png">
position과 transform을 이용하여 로고 제작


# position

- 요소의 위치 지정 기준
- 요소를 배치할 때에는 기준을 잡고서 위치 값을 지정해야 함

### relative

요소 `자신`을 기준으로 배치

설정 시 화면에 변화 없음

relative를 활용 하여 위치를 지정 하는 경우  → 요소의 원래 배치 자리는 비어있게 되어 레이아웃이 이상해질 수 있음. ( 자기 자신을 기준으로 위치를 지정하는 경우는 거의 없음 )

** 위치 상 부모 요소로 지정할 수 있음 (중요) **

### absolute

위치 상 `부모 요소`를 기준으로 배치 ( 위치 상 부모요소를 꼭! 확인 )

붕 뜨면서 요소가 겹침 / 주변과의 상호 작용(차곡차곡 쌓여가는 / 레이아웃 구조)이 무너짐

구조상의 부모요소 안에 position의 값을 넣어줘야 함.

### fixed

`뷰포트(브라우저)`를 기준으로 배치

부모 요소가 지정되어 있어도, `뷰포트를` 기준으로 배치 됨

붕 뜨면서 요소가 겹침 / 주변과의 상호 작용(차곡차곡 쌓여가는 / 레이아웃 구조)이 무너짐

### sticky

`스크롤` 영역 기준 <br>
* * *
##### position 속성의 값으로 absolute, fixed가 지정된 요소는 `display 속성이 block으로 변경 됨`

* * *
### position과 같이 사용하는 CSS속성

<b> `top, bottom, left , right` </b>

모두 음수 사용 가능

top, bottom, left,right의 경우 요소의 각 방향별 거리 지정 ( 기본 값 auto )

px, em, rem 단위 사용 가능

<b> `z-index` </b>

요소의 쌓임 정도를 지정

기본 값 : auto (0이라고 생각하면 됨, 부모 요소와 동일한 쌓임 정도)

음수 사용 가능 ( -1까지만 사용하고 그 이하는 잘 사용하지 않음)

사용법 → 양수의 숫자 값을 단위 없이 입력



### Stack Order ( 요소 쌓임 순서)

어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정

1. 요소에 position 속성의 값이 있는 경우 위에 쌓임 ( 기본값 static 제외)
    
    주의사항! position 속성의 값으로 static을 입력 후 z-index를 아무리 높여도 position을 안 준 것과 같기 때문에 적용 x
    
2. 1번 조건이 같은 경우, z- index 속성의 숫자 값이 높을 수록 위에 쌓임
    
    주의사항! 숫자가 너무 커지지 않게 관리 해줘야함
    
3. 1번과 2번 조건까지 같은 경우, html의 다음 구조일 수록 위에 쌓임

---

# Transform
- 변환 함수를 활용해서 이동시키거나 기울이는 효과를 줄수 있음

## 2D 변환 함수

### translate(x,y)
- x,y축으로 이동
###  translateX(x)
- x축으로 이동
###  translateY(y)
- y축으로 이동
### scale(x,y)
- 크기(x축, y축)
### rotate(degree)
- 회전(각도) 
- 단위 deg
### skewX(x)
- X축으로 기울임
### skewY(y)
- y축으로 기울임


## 3D 변환 함수

## perspective(n)
- 원근법 거리
## rotateX(x)
- X 축으로 회전
## rotateY(y)
- Y 축으로 회전
