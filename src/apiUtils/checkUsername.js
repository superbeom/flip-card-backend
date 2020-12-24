/* 
  '숫자 / 소문자 / 대문자 / 밑줄(_) / 마침표(.) / 한글' = '0-9a-zA-Z_.가-힣'
  '\u0600-\u06FF\u0750-\u077F' = '아랍어'
  '\u3040-\u309F' = '히라가나'
  '\u30A0-\u30FF' = '카타카나'
  '\u00C0-\u00D6' & '\u00D8-\u00F6' & '\u00F8-\u00FF' = 'Latin'
  '\u0100-\u024F' = 'Latin Extended'
  '\u0370-\u03FF' = 'Greek & Coptic'
  '\u0400-\u04FF' = 'Cyrillic - Russian'
  '\u4E00-\u9FFF' = 'CJK 한자'
*/
const REGEXP = /^[0-9a-zA-Z_.가-힣\u0600-\u06FF\u0750-\u077F\u3040-\u309F\u30A0-\u30FF\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u0370-\u04FF\u4E00-\u9FFF]*$/;

export default (username) => {
  /* username 길이를 1이상 20자 이하로 설정하도록 */
  if (username.length === 0) {
    throw Error("Enter a username over 1 character!");
  } else if (username.length < 21) {
    /* username이 위에서 설정한 정규식을 벗어나지 않는다면 true 리턴 */
    if (REGEXP.test(username)) {
      return true;
    } else {
      throw Error(
        "Username can only use letters, numbers, underscores and periods!"
      );
    }
  } else {
    throw Error("Enter a username under 20 characters!");
  }
};
