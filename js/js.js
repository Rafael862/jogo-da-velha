var divElement = document.querySelector('div'),
    tableElement = document.querySelector('table');

    var Game = {
        start(){
            this.field = [
                ['','',''],
                ['','',''],
                ['','','']
            ];
            this.currentPlayer = 'X';
            this.isFinished = false;
            this.round = 0;
            this.render();
        },
        render(){
            var template = '';
            this.field.forEach((line, lineIndex)=>{
                    template += '<tr>';
                    line.forEach((column, columnIndex)=>{
                        template += `<td onclick="Game.setField(${lineIndex}, ${columnIndex})>${column}</td>`;
                    })
                    template += '</tr>'
            })
            tableElement.innerHTML = template;
        }
    }
    
    Game.start();
    /*setField(line, column){
        if(!this.isFinished && this.field[line][column] === ''){
            this.field[line][column] = this.currentPlayer;
        }
    }*/