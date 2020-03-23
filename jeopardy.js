title =['SCI-FI-STUFF','TV SHOWS BY COUPLE','MOTHER GOOSE'];
values ={
    'SCI-FI-STUFF':[200,400,600],
    'TV SHOWS BY COUPLE':[200,400,600],
    'MOTHER GOOSE':[200,400,600]
}
questions={
    'SCI-FI-STUFF':['what is your favourite food','what is your hobby','what is your favourite furit'],
    'TV SHOWS BY COUPLE':['what is your favourite place','what is your name','what is your favourite song'],
    'MOTHER GOOSE':['what is your favourite movie','what is your mother name','what is your favourite color'],
}
clues={
    'SCI-FI-STUFF':['Pizza','Cricket','Nango'],
    'TV SHOWS BY COUPLE':['United States','Steve','Baby Baby'],
    'MOTHER GOOSE':['Joker','Amy','Red'],
}
div = document.getElementsByClassName("category");

for(i=0; i<div.length; i++){
    nodes = div[i].children;
    for(j=0; j<nodes.length; j++){
        
        if(nodes[j].className == 'title'){
            nodes[j].innerHTML = title[j];
        }
        else{
            t = title[i]
            nodes[j].innerHTML = values[t][j-1];
            nodes[j].dataset.clue = clues[t][j-1];
            nodes[j].dataset.answer = questions[t][j-1];
            nodes[j].addEventListener('click',function(){
            document.getElementById('clue').innerHTML = this.dataset.clue 
            document.getElementById('answer').innerHTML = this.dataset.answer
            document.getElementById('overlay').classList.add('show');

            })
        }
    }

}

document.getElementById('close').addEventListener('click',function(){
   isfirst =  document.getElementById('close').dataset.check;
   isfirst = parseInt(isfirst);
   if(!isfirst){
    document.getElementById('answer').classList.add('show');
    document.getElementById('close').dataset.check = 1;
    document.getElementById('close').innerHTML = 'Close';
   }
   else{
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('answer').classList.remove('show');
    document.getElementById('close').innerHTML = 'Show Answer';
    document.getElementById('close').dataset.check = 0;
   }
})
