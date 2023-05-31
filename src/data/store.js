import {reactive} from 'vue'
import {guidelineQuestionnaire} from "@/data/surveys/guidelineQuestionnaire";

export const store = reactive({
    tag: 'home',
    aiProxy: 'https://ai.yizheyun.cn',
    chatToken: 'c2stOVVjdzVac3V1Vkx3MkhudXo3Y25UM0JsYmtGSndEYkxSaE5WU1IzaUNOTWQwckNB',

    preQuestionnaire: null,
    guidelineQuestionnaire: null,

    reset() {
        this.tag = 'home';
        this.preQuestionnaire = null;
        this.guidelineQuestionnaire = null;
    }
})