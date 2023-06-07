let ant = 0;
let ant2 = 1;
let inicial = 0;
let limite = 10;

console.log(ant)

while (inicial <= limite){
    act = ant2 + ant;
    ant = ant2;
    ant2 = act;
    inicial++;
    console.log(ant)
}