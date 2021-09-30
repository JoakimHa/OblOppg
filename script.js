var contentDiv = document.getElementById('content');
    
        // model
        let numbers = [7, 3, 1, 5, 8];
        let chosenBar = 'ingen'; 
        let inputValue =''; 
        let buttongone = '';
        let ButtonNoVal ='';
        let barArrayNR = '';
        
        // view
        show();
        function show() {
            let svgInnerHtml = '';
            for (let i = 0; i < numbers.length; i++) {
                svgInnerHtml += createBar(numbers[i], i + 1);
            }
            contentDiv.innerHTML = `
                <svg id="chart" width="500" viewBox="0 -45 100 105">
                    ${svgInnerHtml}
                </svg><br/>
                Valgt stolpe: ${chosenBar}
                <br />
                Verdi:
                <input type="number" min="1" max="10" oninput="inputValue = this.value" />
                <button onclick="addBar()">Legg til stolpe</button>
                <button ${buttongone} ${ButtonNoVal} onclick="change()">Endre valgt stolpe</button><br />
                <button ${buttongone} onclick="deleteBar()">Fjerne valgt stolpe</button>
                `;
        }
    
        function createBar(number, barNo) {
            let selected;
            const width = 8;
            const spacing = 2;
            let x = (barNo - 1) * (width + spacing);
            let height = number * 10;
            let y = 60 - height;
            let color = calcColor(1, 10, barNo);
            if (chosenBar == barNo){
                selected = 'Black';
            }
            if (chosenBar == 'ingen') {
                buttongone = 'disabled';
            } else {
                buttongone = '';
            }
            return `<rect stroke="${selected}" width="${width}" height="${height}"
                                x="${x}" y="${y}" fill="${color}" onclick="select(${barNo})"></rect>`;
                                
        }
    
        function calcColor(min, max, val) {
            var minHue = 240, maxHue = 0;
            var curPercent = (val - min) / (max - min);
            var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
            return colString;
        }
       