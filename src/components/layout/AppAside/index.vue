<template>
  <div id="aside">
    <div class="asideButton upload">
      <a
        href="/mypage/myActivity"
        class="Nbtn_upload"
        onclick="nclk_v2(event,'olk.upload');"
        >웹툰 올리기</a
      >
    </div>
    <!-- 배너 -->
    <RightAd></RightAd>
    <!-- //배너 -->
    <!-- 롤링이미지 -->
    <div class="asideRolling">
      <a
        onclick="nclk_v2(event,'olk.banner')"
        href="https://comic.naver.com/webtoon/list.nhn?titleId=795262"
      >
        <img
          src="https://naverwebtoon-phinf.pstatic.net/20220527_238/16536398740631Qhjo_JPEG/upload_7531656900592402652.JPEG?type=p100"
          width="240"
          height="97"
          alt="살인마 죽이기 <사형소년>"
        />
      </a>
    </div>
    <!-- 인기급상승웹툰 -->
    <RealTimeRankChoiceTab></RealTimeRankChoiceTab>
    <!-- //인기급상승웹툰 -->
    <!-- 추천 웹툰 -->
    <RecommandWebtoonRankTab></RecommandWebtoonRankTab>
    <!-- //추천 웹툰 -->
    <!-- 공지사항 -->
    <NoticeList></NoticeList>
    <!-- //공지사항 -->
    <BannerList></BannerList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BannerList from "./BannerList.vue";
import RecommandWebtoonRankTab from "./RecommandWebtoonRankTab.vue";
import NoticeList from "./NoticeList.vue";
import RightAd from "./RightAd.vue";
import RealTimeRankChoiceTab from "@/components/layout/AppAside/RealTimeRankChoiceTab.vue";

export default defineComponent({
    setup() {
        return {};
    },
    components: { BannerList, RecommandWebtoonRankTab, RealTimeRankChoiceTab, NoticeList, RightAd }
});
</script>

<style scoped>
</style>