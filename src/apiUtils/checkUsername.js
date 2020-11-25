/* '소문자 / 대문자 / 숫자 / 밑줄(_) / 마침표(.) / 한글'만 포함하는 정규식 */
const REGEXP = /^[0-9a-zA-Z_.가-힣]*$/;

export default (username) => {
  /* username 길이를 1이상 30자 이하로 설정하도록 */
  if (username.length === 0) {
    throw Error("Enter a username over 1 character!");
  } else if (username.length < 31) {
    /* username이 위에서 설정한 정규식을 벗어나지 않는다면 true 리턴 */
    if (REGEXP.test(username)) {
      return true;
    } else {
      throw Error(
        "Username can only use letters, numbers, underscores and periods!"
      );
    }
  } else {
    throw Error("Enter a username under 30 characters!");
  }
};
