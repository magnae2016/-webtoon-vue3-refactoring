<template>
  <div id="footer">
    <div class="list_link">
      <ul>
        <li class="link_site webtoon">
          <a href="/index" onclick="nclk_v2(event,'fot.webtoon')"
            ><span class="blind">웹툰</span></a
          >
        </li>
        <li class="link_site novel">
          <a href="https://novel.naver.com" onclick="nclk_v2(event,'fot.novel')"
            ><span class="blind">웹소설</span></a
          >
        </li>
        <li class="link_site series">
          <a
            href="https://series.naver.com"
            onclick="nclk_v2(event,'fot.series')"
            ><span class="blind">시리즈 <span>소설·만화</span></span></a
          >
        </li>
        <li class="link_site serieson">
          <a
            href="https://serieson.naver.com"
            onclick="nclk_v2(event,'fot.serieson')"
            ><span class="blind">시리즈온 <span>영화·방송</span></span></a
          >
        </li>
      </ul>
    </div>
    <div class="corp_info">
      <div class="webtoon_corp_info">
        <ul>
          <li>
            <a
              href="https://member.webtoon.naver.com/policies/terms/"
              target="_blank"
              onclick="nclk_v2(event,'fot.wagreement')"
              >네이버웹툰 이용약관</a
            >
          </li>
          <li>
            <a
              href="https://m.comic.naver.com/store/comic/common/passJoinAgreeContract"
              target="_blank"
              onclick="nclk_v2(event,'fot.cooterms')"
              >전용상품권 이용약관</a
            >
          </li>
          <li>
            <a
              href="https://member.webtoon.naver.com/policies/privacy/"
              target="_blank"
              class="privacy"
              onclick="nclk_v2(event,'fot.wprivacy')"
              >개인정보처리방침</a
            >
          </li>
          <li>
            <a
              href="https://member.webtoon.naver.com/policies/youthpolicy/"
              target="_blank"
              onclick="nclk_v2(event,'fot.youthpolicy')"
              >청소년보호정책</a
            >
          </li>
          <li>
            <a
              href="https://help.naver.com/service/5635?lang=ko"
              target="_blank"
              onclick="nclk_v2(event,'fot.whelp')"
              >웹툰 고객센터</a
            >
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="/business/proposalGuide"
              onclick="nclk_v2(event,'fot.proposal')"
              target="_blank"
              >광고<span class="dot">·</span>사업문의</a
            >
          </li>
        </ul>
        <address>
          <a
            onclick="nclk_v2(event,'fot.wtcorp');"
            href="https://webtoonscorp.com"
            class="webtoon_corp_link"
            target="_blank"
            ><span class="blind">ⓒ NAVER WEBTOON Limited</span></a
          >
        </address>
      </div>

      <div class="naver_corp_info">
        <ul>
          <li>
            <a
              href="https://www.naver.com/rules/service.html"
              onclick="nclk_v2(event,'fot.agreement')"
              target="_blank"
              >이용약관</a
            >
          </li>
          <li>
            <a
              href="https://www.naver.com/rules/privacy.html"
              onclick="nclk_v2(event,'fot.privacy')"
              target="_blank"
              class="privacy"
              >개인정보처리방침</a
            >
          </li>
          <li>
            <a
              href="https://www.naver.com/rules/disclaimer.html"
              onclick="nclk_v2(event,'fot.disclaimer')"
              target="_blank"
              >책임의 한계와 법적고지</a
            >
          </li>
          <li>
            <a
              href="https://help.naver.com/index.help"
              onclick="nclk_v2(event,'fot.helpdesk')"
              target="_blank"
              title="새 창"
              >고객센터</a
            >
          </li>
          <li>
            <a
              href="https://help.pay.naver.com/mail/form.help?alias=checkout_accuse"
              target="_blank"
              onclick="nclk_v2(event,'fot.claim')"
              >결제도용신고</a
            >
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://cpc.naver.com/cpc/index.nhn"
              target="_blank"
              onclick="nclk_v2(event,'fot.cpclaim')"
              >저작권침해신고</a
            >
          </li>
        </ul>
        <address>
          <a
            href="https://www.navercorp.com/"
            target="_blank"
            onclick="nclk_v2(event,'fot.navercorp')"
            ><span class="naver_corp_link"
              ><span class="blind">ⓒ NAVER CORP.</span></span
            ></a
          >
        </address>
      </div>
    </div>

    <ul class="company_info">
      <li>사업자등록번호 669-86-01888</li>
      <li>
        통신판매업 신고번호 2020-성남분당B-0719
        <a
          href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6698601888"
          target="_blank"
          >(사업자정보확인)</a
        >
      </li>
      <li>대표이사 김준구</li>
      <li>호스팅사업자 네이버비즈니스플랫폼</li>
    </ul>
    <ul class="company_info">
      <li>
        주소 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 11-12층
      </li>
      <li>고객센터 1588-3820</li>
      <li>이메일 <a href="mailto:ccnaver@naver.com">ccnaver@naver.com</a></li>
    </ul>
    <p class="copyright_law">
      모든 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단으로
      이용하는 경우 관련 법령에 따라 법적 책임을 질 수 있습니다.
    </p>
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