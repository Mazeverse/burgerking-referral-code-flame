const code = 'XSkYE2ud';
const message = document.getElementById('copyMessage');

async function copyCode() {
  try {
    await navigator.clipboard.writeText(code);
    if (message) message.textContent = '추천인 코드가 복사되었습니다: ' + code;
  } catch (error) {
    const temp = document.createElement('textarea');
    temp.value = code;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    if (message) message.textContent = '추천인 코드가 복사되었습니다: ' + code;
  }
}

document.querySelectorAll('#copyBtn, [data-copy]').forEach((button) => {
  button.addEventListener('click', copyCode);
});
