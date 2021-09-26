
                // controller 
        function select(barNo){
          
      //     if (chosenBar == barNo) {
               chosenBar = 'ingen';
         //  } else {
        }
        function testselect() {
          //  chosenBar = barNo;
            console.log(chosenBar);
            barArrayNR = barNo -1;
            console.log(barArrayNR);
        //   }
            // let list = [];
             //list.
        }
        function change(){
           // if (inputValue < 0.1) {
           //     alert('Error, Value has to be higher than "1"')
          //  }else if (inputValue > 10) {
          //  alert ('error, value too high correct value is 1-10')
           // } 
           // else {
                numbers.splice(barArrayNR, 1, inputValue);
            }
       // }
        function addBar() {
            if (inputValue > 10) {
             //   alert('error, value too high correct value is 1-10')
            }else if (inputValue >= 0.1) {
                numbers.push(inputValue);
            } else {
             //   alert ('Error, Value must be higher than "1"');
            }
        }
        function deleteBar(){
           numbers.splice(barArrayNR, 1)
        }