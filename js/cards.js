const thumbnailImages = [
  "images/lineagew.png",
  "images/bns2.png",
  "images/tricksterm.png",
  "images/h3.png",
  "images/lineage2m.png",
  "images/lineagem.png",
  "images/h2.png",
  "images/bns.png",
  "images/aion.png",
  "images/lovebeat.png",
  "images/lineage2.png",
  "images/lineage.png",
];
const thumbnailBgImgs = [
  "images/lineagew_bi.png",
  "images/bns2_bi.png",
  "images/tricksterm_bi.png",
  "images/h3_bi.png",
  "images/lineage2m_bi.png",
  "images/lineagem_bi.png",
  "images/h2_bi.png",
  "images/bns_bi.png",
  "images/aion_bi.png",
  "images/lovebeat_bi.png",
  "images/lineage2_bi.png",
  "images/lineage_bi.png",
];
const cardNames = [
  "리니지W",
  "블레이드 & 소울 2",
  "트릭스터M",
  "프로야구 H3",
  "리니지2M",
  "리니지M",
  "프로야구 H2",
  "블레이드 & 소울",
  "아이온",
  "러브비트",
  "리니지2",
  "리니지",
];
const cardDescriptions = [
  "피로 써 내려간 역사",
  "액션 MMO의 시작",
  "파고 파도 끝없는 모험",
  "실제 데이터 기반 야구 매니지먼트게임",
  "가장 아름답고 거대한 리얼리스틱 월드",
  "원작을 넘어선 단 하나의 창조적 계승",
  "당신의 하이라이트를 완성하라!",
  "스타일리시 무협 액션 MMORPG",
  "날개를 펼칠 데바를 위한 MMORPG",
  "댄스와 함께 즐기는 달콤한 인맥파티",
  "압도적 전투, 최초의 3D MMORPG",
  "당신의 첫 번째 MMORPG",
];

const cardItems = [
  {
    name: "리니지W",
    desc: "피로 써 내려간 역사",
    thumbnail: "images/lineagew.png",
    thumbnailBackgroudImage: "images/lineagew_bi.png",
    platform: ["iOS", "Android", "Windows"],
    home: "https://lineagew.plaync.com/kr/update/2022/220419_update?locale=ko",
  },
  {
    name: "블레이드 & 소울 2",
    desc: "액션 MMO의 시작",
    thumbnail: "images/bns2.png",
    thumbnailBackgroudImage: "images/bns2_bi.png",
    platform: ["iOS", "Android", "Windows"],
    home: "https://bns2.plaync.com/update/2022/220420_update",
  },
  {
    name: "트릭스터M",
    desc: "파고 파도 끝없는 모험",
    thumbnail: "images/tricksterm.png",
    thumbnailBackgroudImage: "images/tricksterm_bi.png",
    platform: ["iOS", "Android", "Windows"],
    home: "https://tricksterm.plaync.com/?_ga=2.159058557.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "프로야구 H3",
    desc: "실제 데이터 기반 야구 매니지먼트게임",
    thumbnail: "images/h3.png",
    thumbnailBackgroudImage: "images/h3_bi.png",
    platform: ["iOS", "Android", "Windows"],
    home: "https://h3.plaync.com/?_ga=2.159058557.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "리니지2M",
    desc: "가장 아름답고 거대한 리얼리스틱 월드",
    thumbnail: "images/lineage2m.png",
    thumbnailBackgroudImage: "images/lineage2m_bi.png",
    platform: ["iOS", "Android", "Windows"],
    home: "https://lineage2m.plaync.com/?_ga=2.159058557.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "리니지M",
    desc: "원작을 넘어선 단 하나의 창조적 계승",
    thumbnail: "images/lineagem.png",
    thumbnailBackgroudImage: "images/lineagem_bi.png",
    platform: ["iOS", "Android", "Windows"],
    home: "https://lineagem.plaync.com/?_ga=2.170519271.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "프로야구 H2",
    desc: "당신의 하이라이트를 완성하라!",
    thumbnail: "images/h2.png",
    thumbnailBackgroudImage: "images/h2_bi.png",
    platform: ["iOS", "Android"],
    home: "https://h2.plaync.com/?_ga=2.170519271.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "블레이드 & 소울",
    desc: "스타일리시 무협 액션 MMORPG",
    thumbnail: "images/bns.png",
    thumbnailBackgroudImage: "images/bns_bi.png",
    platform: ["Windows"],
    home: "https://bns.plaync.com/?_ga=2.170519271.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "아이온",
    desc: "날개를 펼칠 데바를 위한 MMORPG",
    thumbnail: "images/aion.png",
    thumbnailBackgroudImage: "images/aion_bi.png",
    platform: ["Windows"],
    home: "https://aion.plaync.com/?_ga=2.170519271.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "러브비트",
    desc: "댄스와 함께 즐기는 달콤한 인맥파티",
    thumbnail: "images/lovebeat.png",
    thumbnailBackgroudImage: "images/lovebeat_bi.png",
    platform: ["Windows"],
    home: "https://lovebeat.plaync.com/?_ga=2.170519271.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "리니지2",
    desc: "압도적 전투, 최초의 3D MMORPG",
    thumbnail: "images/lineage2.png",
    thumbnailBackgroudImage: "images/lineage2_bi.png",
    platform: ["Windows"],
    home: "https://lineage2.plaync.com/?_ga=2.170519271.636903634.1650708230-420301448.1650384569",
  },
  {
    name: "리니지",
    desc: "당신의 첫 번째 MMORPG",
    thumbnail: "images/lineage.png",
    thumbnailBackgroudImage: "images/lineage_bi.png",
    platform: ["Windows"],
    home: "https://lineage.plaync.com/?_ga=2.170519271.636903634.1650708230-420301448.1650384569",
  },
];

const serviceCardItems = [
  {
    thumbnail: "/images/service_icon_yeti.png",
    subject: "예티",
    desc: "언제 어디서나 원격 플레이",
    app: "https://apps.apple.com/kr/app/id1341840717",
    android: "https://play.google.com/store/apps/details?id=com.ncsoft.paige",
    detail: "https://paige.kr.nc.com/about",
  },
  {
    thumbnail: "/images/service_icon_baseball.png",
    subject: "프로야구 페이지",
    desc: "KBO 리그 팬의 필수 어플리케이션",
    app: "https://apps.apple.com/kr/app/id1435848675",
    android: "https://play.google.com/store/apps/details?id=com.ncsoft.mplayer",
    detail: "https://yeti.plaync.com",
  },
  {
    thumbnail: "/images/service_icon_authenticator.png",
    subject: "NC 인증기",
    desc: "더욱 안전하고 간편하게!",
    app: "https://apps.apple.com/kr/app/id1311164657",
    android:
      "https://play.google.com/store/apps/details?id=com.ncsoft.authenticator",
    detail: "https://www.plaync.com/authenticator",
  },
  {
    thumbnail: "/images/service_icon_lineage2.png",
    subject: "리니지2 어시스트",
    desc: "내 손안의 작은 리니지2",
    app: "https://apps.apple.com/kr/app/kr/id1008509852",
    android:
      "https://play.google.com/store/apps/details?id=com.ncsoft.l2mobilepushapp",
    detail:
      "https://lineage2.plaync.com/guidebook/l2/view?title=%EB%A6%AC%EB%8B%88%EC%A7%802%20%EC%96%B4%EC%8B%9C%EC%8A%A4%ED%8A%B8",
  },
  {
    thumbnail: "/images/service_icon_haste.png",
    subject: "리니지 모바일 - 헤이스트",
    desc: "또다른 성장의 시작",
    app: "https://play.google.com/store/apps/details?id=com.ncsoft.lineage.haste",
    android:
      "https://play.google.com/store/apps/details?id=com.ncsoft.lineage.haste",
    detail: "https://lineage.plaync.com/updated/haste/index",
  },
  {
    thumbnail: "/images/service_icon_bufftoon.png",
    subject: "버프툰",
    desc: "게이머를 위한 웹툰&만화 서비스",
    app: "https://apps.apple.com/kr/app/id915637215?mt=8",
    android:
      "https://play.google.com/store/apps/details?id=com.ncsoft.android.buff&referrer=af_tranid%3D54yBWtgcTk1hGkpXKiZUGQ%26shortlink%3Dplaync0AOS%26pid%3Dplaync_AOS%26c%3Dplaync%26af_channel%3Dmain_top%26af_sub1%3Daos%26af_dp%3Dncbuffapp%253A%252F%252F%26af_web_id%3De3a798ba-3bb9-47a6-8390-99ac01bd51bb-o",
    detail: "https://bufftoon.plaync.com/webtoon",
  },
  {
    thumbnail: "/images/service_icon_lineage.png",
    subject: "리니지앱(PC)",
    desc: "똑똑한 나만의 리니지 매니저",
    app: "https://apps.apple.com/kr/app/id859841624",
    android:
      "https://play.google.com/store/apps/details?id=com.ncsoft.android.lineage",
  },
];

const eventCardItems = [
  {
    subject: "리니지W",
    desc: "피로 써 내려간 역사",
    thumbnail: "/images/event_lineagew.jpg",
  },
  {
    subject: "블레이드 & 소울 2",
    desc: "액션 MMO의 시작",
    thumbnail: "/images/event_bns2.jpg",
  },
  {
    subject: "아이온",
    desc: "날개를 펼칠 데바를 위한 MMORPG",
    thumbnail: "/images/event_aion.jpg",
  },
  {
    subject: "리니지M",
    desc: "원작을 넘어선 단 하나의 창조적 계승",
    thumbnail: "/images/event_lineagem.jpg",
  },
  {
    subject: "리니지2M",
    desc: "가장 아름답고 거대한 리얼리스틱 월드",
    thumbnail: "/images/event_lineage2m.jpg",
  },
  {
    subject: "리니지",
    desc: "당신의 첫 번째 MMORPG",
    thumbnail: "/images/event_lineage.jpg",
  },
];

const eventCardListComponent = () => {
  const eventCardWrapper = document.getElementById("event-card-list");

  eventCardItems.forEach((eventCard, idx) => {
    const eventCardHtml = `
    <div class="swiper-slide">
      <a href="javescript:void(0)" class="event__link">
        <div class="event__thumb">
          <img
            src="${eventCard.thumbnail}"
            alt="${eventCard.subject}"
          />
        </div>
        <div class="event__text">
          <div class="event__subject">${eventCard.subject}</div>
          <div class="event__desc">${eventCard.desc}</div>
        </div>
      </a>
    </div>
  `;

    eventCardWrapper.innerHTML += eventCardHtml;
  });
};

const serviceCardListComponent = () => {
  const serviceCardWrapper = document.getElementById("service-card-list");

  serviceCardItems.forEach((serviceCard, idx) => {
    const serviceCardHtml = `
    <div id="service-card${idx + 1}" class="swiper-slide">
      <div class="service__thumb">
        <a href="javascript:void(0)">
          <img
            src="${serviceCard.thumbnail}"
            alt="${serviceCard.subject}"
          />
        </a>
      </div>
      <div class="service__wrap">
        <h3 class="service__subject">${serviceCard.subject}</h3>
        <p class="service__desc">${serviceCard.desc}</p>
        <div class="service__btn">
          <a href="${serviceCard.app}" class="service__btn--ios">iOS</a>
          <a
            href="${serviceCard.android}"
            class="service__btn--android"
          >
            Android
          </a>
          <a
            href="${serviceCard.detail || ""}"
            class="service__btn--detail"
          >
            자세히 보기
          </a>
        </div>
      </div>
    </div>
  `;

    serviceCardWrapper.innerHTML += serviceCardHtml;
  });
};

const cardListComponent = () => {
  // 카드 요소를 가지는 부모 요소 찾기
  const cardWrapper = document.querySelector(".swiper-wrapper");
  cardItems.forEach((card, idx) => {
    const platformHtml = card.platform
      .map((platformName) => {
        const code = `
        <a class="card-btn" href="javascript:void(0)">
          ${platformName}
        </a>
      `;
        return code;
      })
      .join("\n");

    const cardHtml = `
      <div
        id="card${idx}"
        class="swiper-slide card-component"
        style="
          width: 31.25vw;
          height: 43vh;
          margin-bottom: 10rem;
          width: auto;
          margin: 0 0 0 90px;
          position: relative;
        "
      >
        <div id="card-thumb">
          <div
            class="card__thumb-img"
            style="
              position: relative;
              background-image: url('${card.thumbnail}');
              width: 27.5vw;
              height: 27.5vw;
              background-repeat: no-repeat;
              background-size: 100%;
              background-position: 50% 0;
            "
          >
            <div
              class="card__thumb_bg"
              style="
                position: absolute;
                left: 50%;
                width: 100%;
                height: 13.013vw;
                transform: translateZ(1px);
                background-image: url('${card.thumbnailBackgroudImage}');
                background-repeat: no-repeat;
                background-position: 50% 0%;
                background-size: 100%;
                margin-left: -50%;
                bottom: -1.5%;
              "
            >
            </div>
            <div class="showone__thumb-home-bg">
              <a class="showone__thumb-home" href=${card.home}>
                <span class="text">게임홈 바로가기</span>
              </a>
            </div>            
          </div>
          
          

        </div>

        <h3 id="card-subject" style="color: #fff; text-align: center; font-size: 18px;">
          ${card.name}
        </h3>
        <p
          id="card-desc"
          style="
            font-size: 16px;
            color: hsla(0, 0%, 100%, 0.38);
            text-align: center;
          "
        >
          ${card.desc}
        </p>
        <div class="card-btn-group">
          ${platformHtml}
        </div>
      </div>
    `;
    cardWrapper.innerHTML += cardHtml;
  });
};

const component = {
  cardList: cardListComponent,
  serviceCardList: serviceCardListComponent,
  eventCardList: eventCardListComponent,
};

const init = () => {
  Object.keys(component).forEach((key) => {
    const func = component[key];
    func();
  });
};

init();
