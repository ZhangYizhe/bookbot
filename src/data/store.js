import {reactive} from 'vue'
import {firstScenarioQuestionnaire} from "@/data/surveys/firstScenarioQuestionnaire";

export const store = reactive({
    tag: 'home',
    aiProxy: 'https://ai.yizheyun.cn',
    chatToken: 'c2stQko5bGt4d0JHR0FSUnpmODlsVHhUM0JsYmtGSjY4NGlTWTFhZlpBSjNsajZoSFky',

    debug: true,

    isAgreeConsent: false,
    isPrompts: true,

    preQuestionnaire: null,
    firstScenarioQuestionnaire: null,
    secondScenarioQuestionnaire: null,
    postQuestionnaire: null,
    interviewQuestionnaire: null,

    firstMessages: [],
    secondMessages: [],

    firstBooks: new Set(),
    secondBooks: new Set(),

    reset() {
        this.tag = 'home';
        this.preQuestionnaire = null;
        this.firstScenarioQuestionnaire = null;
        this.secondScenarioQuestionnaire = null;
        this.postQuestionnaire = null;
        this.interviewQuestionnaire = null;
    }
})