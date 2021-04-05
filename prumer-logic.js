window.onload = () => {
    let button = document.getElementById("adder")
    let input = document.createElement("input")
    let numTab = document.getElementById("numTab")
    let count = 0
    let average = 0


    document.getElementById('adder').addEventListener('click', addButton)
    document.getElementById('calculate').addEventListener('click', failed)


    function addText() {
        let dummyCount = '<span><strong>Grade: </strong><input type="text" id="counterG"><small></small></span>\r\n'
        numTab.innerHTML += dummyCount
        let a = document.getElementById("counterG")
        a.id = a.id + count


        let dummyWeight = '<span><strong>Weight: </strong><input type="text" id="counterW"><small></small></span>\r\n'
        numTab.innerHTML += dummyWeight

        let b = document.getElementById("counterW")
        b.id = b.id + count

    }

    function addButton() {
        count++
        addText()
    }

    function averageSum() {
        let sum = 0
        let weightSum = 0


        for (let i = 1; i <= count; i++) {

            let grade = document.getElementById("counterG" + i)
            let weight = document.getElementById("counterW" + i)

            let parsedG = parseInt(grade.value)
            let parsedW = parseInt(weight.value)

            sum += (parsedG * parsedW)
            weightSum += parsedW
        }
        average = sum / weightSum
        return average
    }

    function failed() {

        let a = document.getElementById('fail')
        let b = document.getElementById('yourAvg')
        let failed

        let returner = averageSum()
        let roundedNumber = Math.round(returner)


        if (roundedNumber <= 40 && !isNaN(roundedNumber)) {
            failed = '<strong> You are failing your class! </strong>'
            a.innerHTML += failed
            let averageNum = '<strong>Average: ' + roundedNumber + '%</strong>'
            b.innerHTML += averageNum
        }
        if (roundedNumber > 40 && !isNaN(roundedNumber)) {
            failed = '<strong> You are not failing your class! </strong>'
            a.innerHTML += failed
            let averageNum = '<strong>Average: ' + roundedNumber + '%</strong>'
            b.innerHTML += averageNum
        }
        if (isNaN(roundedNumber)) {
            let incorrect = document.getElementById('error')
            let zprava = '<strong> Weight cannot be zero, minimal weight is 10!</strong>'
            incorrect.innerHTML += zprava
        }

    }


}

