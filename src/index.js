import { transformText } from './utils';

document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('txt').value;
    const result = transformText(input);
    document.getElementById('result').innerText = result;
});
