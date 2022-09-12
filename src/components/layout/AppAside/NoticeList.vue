<template>
  <div class="asideBox">
    <h4 class="asideBoxTitle">
      <img
        src="https://ssl.pstatic.net/static/comic/images/migration/common/subtlt_r_notice.gif"
        title="공지사항"
        alt="공지사항"
        width="43"
        height="12"
      />
    </h4>
    <ul class="asideBoxNotice">
      <li>
        <a
          onclick="nclk_v2(event,'sna.not','1676','1')"
          href="/notice/detail?noticeId=1676"
          title="2022 지상최대공모전 웹툰 부문 상세 공지"
        >
          <strong> 2022 지상최대공모전 웹툰 부문 상세 공지 </strong>
        </a>
      </li>
      <li>
        <a
          onclick="nclk_v2(event,'sna.not','1678','2')"
          href="/notice/detail?noticeId=1678"
          title="2022 모든웹툰 공모전 (레드아이스X부천시with네이버웹툰) 개최 안내"
        >
          <strong> 2022 모든웹툰 공모전 개최 안내 </strong>
        </a>
      </li>
      <li>
        <a
          onclick="nclk_v2(event,'sna.not','535','3')"
          href="/notice/detail?noticeId=535"
          title="(new) 웹소설원작 웹툰을 위한 각색/작화 작가를 모십니다!"
        >
          <strong> 웹소설원작 웹툰을 위한 각색/작화 작가를 모십니다 </strong>
        </a>
      </li>
      <li>
        <a
          onclick="nclk_v2(event,'sna.not','521','4')"
          href="/notice/detail?noticeId=521"
          title="[출시] 새로운 웹툰 라인업! <매일+>에서 만나보세요! "
        >
          <strong> [출시] 새로운 웹툰 라인업! &lt;매일+&gt; </strong>
        </a>
      </li>
      <li>
        <a
          onclick="nclk_v2(event,'sna.not','495','5')"
          href="/notice/detail?noticeId=495"
          title="(new) 네이버웹툰 연재 작가를 모십니다! "
        >
          <strong> 네이버웹툰 연재 작가를 모십니다 </strong>
        </a>
      </li>
      <li>
        <a
          onclick="nclk_v2(event,'sna.not','526','6')"
          href="/notice/detail?noticeId=526"
          title="#내돈내툰, 우리가 웹툰을 즐기는 방법"
        >
          #내돈내툰, 우리가 웹툰을 즐기는 방법
        </a>
      </li>
      <li>
        <a
          onclick="nclk_v2(event,'sna.not','1685','7')"
          href="/notice/detail?noticeId=1685"
          title="2022년 6월 유료화 전환 작품 안내"
        >
          2022년 6월 유료화 전환 작품 안내
        </a>
      </li>
    </ul>
    <a
      onclick="nclk_v2(event,'sna.more')"
      href="/notice/list"
      class="asideBoxMore"
    >
      <span class="blind">공지사항</span> 더보기
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>