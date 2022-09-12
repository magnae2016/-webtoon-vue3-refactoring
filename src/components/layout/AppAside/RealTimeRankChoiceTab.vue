<template>
  <div class="asideBox">
    <h4 class="asideBoxTitle">
      <img
        src="https://ssl.pstatic.net/static/comic/images/migration/common/subtlt_r_best_v2.gif"
        title="인기급상승웹툰"
        alt="인기급상승웹툰"
        width="78"
        height="11"
      />
    </h4>
    <div>
      <ul class="asideBoxTab">
        <!-- 선택된 메뉴에는 choice라는 클래스명을 사용합니다 -->
        <li id="realTimeRankChoiceTabFavorite" class="choice">
          <a
            id="realTimeRankChoiceTabFavoriteClick"
            onclick="nclk_v2(event,'rnk.rep')"
            href="#"
            ><img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_favor.gif"
              title="인기순"
              alt="인기순"
              width="31"
              height="12"
          /></a>
        </li>
        <li id="realTimeRankChoiceTabUpdate">
          <a
            id="realTimeRankChoiceTabUpdateClick"
            onclick="nclk_v2(event,'rnk.upd')"
            href="#"
            ><img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_update.gif"
              title="업데이트순"
              alt="업데이트순"
              width="52"
              height="12"
          /></a>
        </li>
      </ul>
      <h3 id="realTimeRankBlindName" class="blind">인기순</h3>
      <ol id="realTimeRankFavorite" class="asideBoxRank">
        <li class="rank01">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','792651','1')"
            href="/webtoon/detail?titleId=792651&amp;no=11"
            title="99강화나무몽둥이-11화. 편돌이였던 내가 어느 날 갑자기 갑부가 된 썰 (1)"
            >99강화나무몽둥이-11화. 편돌이였던 내가 어느 날 갑자기 갑부가 된 썰
            (1)</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank02">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','597447','2')"
            href="/webtoon/detail?titleId=597447&amp;no=444"
            title="프리드로우-제441화 이민지 대 고주연 (1)"
            >프리드로우-제441화 이민지 대 고주연 (1)</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank03">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','727188','3')"
            href="/webtoon/detail?titleId=727188&amp;no=163"
            title="취사병 전설이 되다-163화 : 거절할 수 밖에 없는 이유"
            >취사병 전설이 되다-163화 : 거절할 수 밖에 없는 이유</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank04">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','650305','4')"
            href="/webtoon/detail?titleId=650305&amp;no=336"
            title="호랑이형님-3부 프롤로그 우처구 우러본"
            >호랑이형님-3부 프롤로그 우처구 우러본</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank05">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','730694','5')"
            href="/webtoon/detail?titleId=730694&amp;no=129"
            title="초인의 시대-2부 37화"
            >초인의 시대-2부 37화</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank06">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','721948','6')"
            href="/webtoon/detail?titleId=721948&amp;no=157"
            title="스터디그룹-시즌2 38화"
            >스터디그룹-시즌2 38화</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank07">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','774864','7')"
            href="/webtoon/detail?titleId=774864&amp;no=39"
            title="존잘주의-38화. 나도 한다 뉴투브."
            >존잘주의-38화. 나도 한다 뉴투브.</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank08">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','774862','8')"
            href="/webtoon/detail?titleId=774862&amp;no=64"
            title="조조코믹스-사형집행자 6화 : 원숭이 지갑"
            >조조코믹스-사형집행자 6화 : 원숭이 지갑</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank09">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','769568','9')"
            href="/webtoon/detail?titleId=769568&amp;no=59"
            title="반드시 해피엔딩-59화"
            >반드시 해피엔딩-59화</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank10">
          <a
            onclick="nclk_v2(event,'rnk*p.cont','784255','10')"
            href="/webtoon/detail?titleId=784255&amp;no=62"
            title="먹는 인생-61화 순두부찌개"
            >먹는 인생-61화 순두부찌개</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
      </ol>
    </div>
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