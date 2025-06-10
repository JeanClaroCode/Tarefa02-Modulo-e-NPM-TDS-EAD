import { transformText } from './utils';

document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('txt').value;
    const result = transformText(input);
    const formattedResult = `
        Texto Original: ${input}
        
        Space Case: ${result.spaceCase}
        Capital Case: ${result.capitalCase}
        Constant Case: ${result.constantCase}
    `;
    document.getElementById('result').innerText = formattedResult;
});
