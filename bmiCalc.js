function bmiCalculator(weight, height) {
    let bmi = Math.round(weight / (height * height))
    return bmi
}

bmiCalculator(65, 1.8)