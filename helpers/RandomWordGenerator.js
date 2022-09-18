import randomWords from 'random-words';

export const getRandomWord = () => {
    let word = randomWords();
    return word
}