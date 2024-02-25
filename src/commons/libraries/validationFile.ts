export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === 'undefined') {
    alert('파일이 없습니다.');
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert('용량은 5MB 이하만 가능합니다.');
    return false;
  }

  if (!file.type.includes('jpeg') && !file.type.includes('png')) {
    alert('확장명을 확인해주세요');
    return false;
  }

  return true;
};
