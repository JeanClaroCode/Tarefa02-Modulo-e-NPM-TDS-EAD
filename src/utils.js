import toSpaceCase from 'to-space-case';
import toCapitalCase from 'to-capital-case';
import toConstantCase from 'to-constant-case';

export function transformText(text) {
    return {
        spaceCase: toSpaceCase(text),
        capitalCase: toCapitalCase(text),
        constantCase: toConstantCase(text)
    };
}
