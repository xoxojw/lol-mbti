export const MBTI = ["istj", "istp", "isfj", "isfp", "intj", "intp", "infj", "infp", "estj", "estp", "esfj", "esfp", "entj", "entp", "enfj", "enfp"];

export type MbtiType = (typeof MBTI)[number];

// 랜딩 페이지
export const MAIN_TITLE = "나와 MBTI 같은 롤 챔피언 찾기";
export const MAIN_DESCRIPTION = "나와 같은 MBTI를 가진 챔피언은 누가 있을까?";

// 로딩 화면
export const LOADING_TEXT = "질문을 불러오고 있어요.";

// 결과 대기화면
export const WAITING_TEXT = "결과를 수집하고 있어요.";

// 결과 페이지
export const resultpage = {
  SUCCESS_TO_COPY_URL: "결과 주소가 복사되었어요!",
  FAIL_TO_SAVE_IMAGE: "이미지를 저장하지 못했어요. 다시 시도해주세요!",
} as const;

// 홈버튼
export const CONFIRM_GO_TO_MAIN = "정말 처음으로 돌아가시겠어요?";