const NumberWorker = require('./NumberWorker').default

describe('NumberWorker', () => {

    const testArr1 = [1, 2, 3, 0, 'asdfdsa', 912822, {test: 'adfs'} ]
    const worker1 = new NumberWorker(testArr1[0])
    testArr1.slice(1).forEach( (el) => {
        worker1.setNumber(el)
    })

    const testArr2 = [0, 1, -23, -4, 2, 1, -1.5]
    const worker2 = new NumberWorker(testArr2[0])
    testArr2.slice(1).forEach( (el) => {
        worker2.setNumber(el)
    })

    const testArr3 = [-1, -2, -4, -46, -43]
    const worker3 = new NumberWorker(testArr3[0])
    testArr3.slice(1).forEach( (el) => {
        worker3.setNumber(el)
    })

    const testArr4 = [1.4, 1223.6, 232.4]
    const worker4 = new NumberWorker(testArr4[0])
    testArr4.slice(1).forEach( (el) => {
        worker4.setNumber(el)
    })

    test('get smallest number', async () => {
        expect(worker1.getSmallestNumber()).toEqual(0)
        expect(worker2.getSmallestNumber()).toEqual(-23)
        expect(worker3.getSmallestNumber()).toEqual(-46)
        expect(worker4.getSmallestNumber()).toEqual(1.4)
    })

    test('get largest number', async () => {
        expect(worker1.getLargestNumber()).toEqual(912822)
        expect(worker2.getLargestNumber()).toEqual(2)
        expect(worker3.getLargestNumber()).toEqual(-1)
        expect(worker4.getLargestNumber()).toEqual(1223.6)
    })

    test('get average of all numbers', async () => {
        expect(worker1.getAverageNumber()).toEqual(182565.6)
        expect(worker2.getAverageNumber()).toEqual(-3.5)
        expect(worker3.getAverageNumber()).toEqual(-19.2)
        expect(worker4.getAverageNumber()).toEqual(485.8)
    })
})
