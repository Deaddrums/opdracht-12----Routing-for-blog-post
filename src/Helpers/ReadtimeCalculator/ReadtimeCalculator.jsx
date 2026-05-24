import './ReadtimeCalculator.css'

function ReadtimeCalculator(letters) {
const length = letters.length
const rtCalc = (length * 0.003)
const ReadtimeCalculated = (parseInt(rtCalc) + "minuten")

    return ReadtimeCalculated
}

export default ReadtimeCalculator