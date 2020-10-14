import NumberWorker from './NumberWorker'
import * as readline from 'readline'

let numberWorker: NumberWorker

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const askQuestion = async (
    question: string,
    defaultValue: string = ''
): Promise<string> => {
    const answer: string = await new Promise((resolve) =>
        readlineInterface.question(question, resolve)
    )
        if (!answer) {
        return defaultValue
    }
    return answer
}

;(async () => {
    let res = await askQuestion(`"start" - run\n`)
    if (res === 'start') {
        while (true) {
            res = await askQuestion('enter a number or "exit" >> ')
            if(res === 'exit') {
                break
            }
            const number = Number(res)
            if (number || number === 0) {
                if (!numberWorker) {
                    numberWorker = new NumberWorker(number)
                } else {
                numberWorker.setNumber(number)}
            }
        }
        if(numberWorker) {
            console.log(`
        1) smallest number = ${numberWorker.getSmallestNumber()}
        2) largest number = ${numberWorker.getLargestNumber()}
        3) average of all numbers = ${numberWorker.getAverageNumber()}
        `)
        } else {
            console.log(`numbers not found`)
        }
    } else {
        console.log('Restart script and enter "start"!')
    }
    readlineInterface.close()
})()
