class NumberWorker {
    private largestNumber: number
    private smallestNumber: number
    private averageNumber: number
    private count = 0

    constructor(number: number) {
        this.count ++
        this.largestNumber = number
        this.smallestNumber = number
        this.averageNumber = number
    }

    public setNumber (n: number) {
        const number = Number(n)
        if (number || number === 0) {
        if (this.largestNumber < number) {
            this.largestNumber = number
        }
        if (this.smallestNumber > number) {
            this.smallestNumber = number
        }
        this.averageNumber = (this.averageNumber*this.count + number)/(this.count+1)
        this.count ++
        }
    }

    public getLargestNumber (): number {
        return this.largestNumber
    }

    public  getSmallestNumber (): number {
        return this.smallestNumber
    }

    public getAverageNumber (): number {
        return this.averageNumber
    }
}

export default NumberWorker
