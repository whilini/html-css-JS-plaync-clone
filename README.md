## 선택한 사이트

### NCSOFT

https://www.plaync.com/kr/index

### 배포 사이트

https://resonant-pixie-ca51ed.netlify.app/

### 선택한 이유

- 인터렉션이 다양한 사이트
- 다양한 외부 라이브러리를 사용해보고 커스텀 하는 경험
- CSS로 구현할 수 있는 부분은 animatioin과 transition도 직접 구현을 목표

---

# Custom

### 💡PLAYNC 사이트에서는 `fullpage.js`를 이용하고 있으나 3 버전부터 유료


❗`pageable.js`라는 비슷한 무료 프로그램 이용, 하지만 다른 부분이 많아 따로 js나 css적 커스텀 필요

⚠️pageable.js의 한계가 뚜렷한데다(한 페이지 내에서 overflow가 있을 시, `overflow: scroll`로 수정하고 강제로 스크롤을 만드는 로직을 만들어도 스크롤이 작동하지 않음)
fullpage.js가 상업용이 아니라면 무료라는 것을 뒤늦게 확인... 급하게 수정

<br/>

### 💡본래 사이트에서 첫 화면의 게임 슬라이드가 끝나면 처음으로 돌아오는데, 그 부분이 부자연스러움

❗이 부분을 Swiper loop 기능으로 커스텀, 첫 화면에서 보이는 게임 이미지들의 비율도 의도적으로 조절해보았음.

<br/>

### 💡움짤을 구할 수 없어서 마우스를 올렸을 때 opacity와 scale로 강조 효과를 줌

1. slide 어디에도 마우스를 올리지 않았을 때는 모든 slide가 `{opacity: 1}` 되도록,
2. 한 슬라이드에 hover시 다른 slide들은 `{opacity: .2, transform: scale(.9)}` 되도록


#### ⚠️slide에 마우스가 올려져 있지 않았을때는 slide를 `{opacity:1}` 설정하고 싶었으나 hover된 slide 이외의 형제 요소들을 어떻게 선택할 수 있을까 고민함. CSS상에서 형제요소를 선택할 수 있는 것은 선택된 요소 뒤에 오는 형제들만 선택할 수 있는 `~` 밖에 없음<br/>
❗slide를 감싸는 부모요소에 hover 이벤트를 주고 부정선택자(`:not`)로 hover된 slide를 제외하고 그 외의 자식들을 선택하면 hover 이벤트 slide의 모든 형제 요소를 선택할 수 있음

```css
.page1 .swiper-wrapper:hover > .swiper-slide:not(.swiper-slide:hover) {
  opacity: 0.2;
}
```

---

# Issue


#### 💡슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상


❗Swiper 문서를 참고하여 `{loopAdditionalSlides : 1}` 옵션 추가로 해결

<br/>

### 💡Swiper 기본 옵션 중에 `{overflow: hidden}`이 설정되어 있어 swiper-container 밖의 슬라이드가 잘려서 보임


❗CSS에서 해당 swiper-container를 `{overflow: visible}` 옵션 추가를 해보았지만 우선순위가 낮아서인지 설정되지 않음 


#### ⚠️`!important`를 사용하지 않고 설정할 수 있는 방법이 있을까 고민함(`{overflow: visible!important}`를 사용하면 작동하긴 함)<br/>
❗JavaScript 로직으로 swiper container를 찾아 인라인 선언으로 `{overflow: visible}`를 넣음


```jsx
const container = document.querySelector(".swiper-container");
container.style.overflow = "visible";
```

<br/>

### 💡Swiper container의 중앙 정렬이 되지 않아 화면의 크기가 변할 때 중앙 정렬이 흐트러짐


❗CSS에서 `opacity`의 지연시간을 조절하기 위해 `{transition: 1s,}` 설정을 했던 것이 Swiper의 delay와 충돌하여 생긴듯 함. `{transition: opacity 1s,}`로 수정하여 해결

<br/>

#### 💡Swiper container의 화면의 크기가 변할 때 간혹 이전 page가 다음 page로 넘쳐서 보임


❗위의 문제가 해결되고 같이 해결됨

<br/>

### 💡page2에서 a tag btn에 마우스를 올리면 글자들이 움직임


❗hover 이전의 border 때문에 크기가 변했던 것.
`{display: block; box-sizing: border-box}`를 했으나 변하지 않아, hover 후 똑같은 굵기의 투명한 border을 입혀 해결

<br/>

### 💡pageable의 next 버튼만 필요한데 prev 버튼 없이 next 버튼만 넣으니 작동을 하지 않음

❗prev 버튼을 만들고 `{display: none}`설정으로 해결

<br/>

### 💡page3의 swiper가 테이블 형태로 되어있어서 필요한 페이지는 2페이지 뿐인데도 카드 수 만큼 pagenation이 생김


❗비슷한 사례가 있는지 검색하여 swiper 옵션을 찾음

```jsx
slidesPerColumn: 4,
slidesPerColumnFill: "column",
```

<br/>

### 💡마지막 페이지에서 pageable-next 버튼이 사라지지 않음

❗pageable-next-btn이 비활성 되면 class에 “active”가 생성되는 점을 이용하여 “active”를 class로 포함하고 있으면 `display: block`, 비활성화가 되면 다시 `display: none`으로 설정하여 조절하도록 자바스크립트로 구현

```jsx
let nextBtn = document.querySelector("#pageable-next-btn");
if (nextBtn.classList.contains("active")) {
  nextBtn.style.display = "block";
} else {
  nextBtn.style.display = "none";
}
```

#### ⚠️scroll이 끝나고 나서야 class에 “acive”가 생성되어 함수가 scroll 시작과 동시에 실행되지 않음. 버튼이 보였다가 사라지는 모습이 보임.


❗Pageable 문서를 다시 찾아봄. onBeforeStart 옵션을 이용하면 scroll이 시작되기 전에 호출할 콜백 함수를 생성이 가능하다는 점을 이용해보려 함.


#### ⚠️위의 함수를 그대로 사용했더니 page4가 아닌 page3에서 버튼이 사라져버림. 함수실행 시간차 때문인것 같음. 아예 다른 방법을 생각해야함.


❗스타벅스 예제에서 사용했던 스크롤 이벤트를 감시하는 기능(`window.addEventListener(”scroll”, function() {})`)이 기억남. html구성을 잘 들여다보니 scroll이 끝날때 마다 보여지는 페이지에 “pg-active” class가 생성되는 것을 확인.

```jsx
onBeforeStart: () => {
  let thirdPage = document.querySelector("#page-3");
  let nextBtn = document.querySelector("#pageable-next-btn");
  thirdPage = thirdPage.classList.contains("pg-active");
  window.addEventListener("mousewheel", (e) => {
    const direction = e.deltaY > 0 ? "down" : "up";
    if (thirdPage && direction == "down") {
      nextBtn.style.display = "none";
    } else nextBtn.style.display = "block";
  });
};
```

<br/>

### 💡page3에서 scroll이 down일 때 함수가 실행되면 가장 이상적일거라 계산. page3가 `class: pg-active`를 가지고 있을 때 + scroll event가 “down”일 때 next-btn의 display가 none이 되고, 그 외에는 display: block 설정. 화면 스크롤 할 때 버튼이 보였다가 사라지는 현상도, 다른 page에서 버튼이 사라지는 현상도 모두 사라짐.


❗Pageable 라이브러리의 다른 문제로 fullpage 라이브러리로 수정, fullpage에는 버튼 옵션이 탑재되어 있지 않아, 각 페이지마다 버튼을 넣고 기능 삽입

<br/>

### 💡px단위로 화면을 만들었더니 모니터 해상도마다 보이는 화면이 크게 다름

❗px단위가 아닌 viewport 기준으로 상대적인 크기를 반환할 수 있는 vw/vh, % 단위로 수정

---

# Accomplishment

- Vanilla JS로 컴포넌트 형식으로 구조화하여 재사용성을 높임
- 개발자 도구를 이용해 DOM과 CSS 구조에 대한 분석 및 적용 가능
- CSS의 심층적 이해 및 활용 경험 습득
    - flex, grid에 대한 이해 및 적용
    - 가상 클래스 선택자, 가상 요소 선택자를 활용한 인터렉션
    - transition과 transform을 활용하여 역동적인 애니메이션 구현
- 외부 라이브러리(Swiper, fullpage.js) 사용 경험
