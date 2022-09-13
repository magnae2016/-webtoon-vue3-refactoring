import { OrderStrings, RealTimeRankChoiceItem } from "@/types/webtoon";
import { AxiosPromise } from "axios";
import { webtoon } from "./instance";

const api = {
  realTimeRankChoice: "/realTimeRankChoice",
};

export function fetchRealTimeRankChoice(params: {
  m?: string;
  order: OrderStrings;
}): AxiosPromise<RealTimeRankChoiceItem> {
  return webtoon.get(api.realTimeRankChoice, { params });
}
