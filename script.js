let btnStart = document.getElementById('start')
let interval;
let progress = 0

function addProgress() {
    progress++
    document.getElementById('progressBar').style.width = progress + '%'

    if(progress >= 100) {
        clearInterval(interval)
        console.log('Progresso Concluido')
    }
}

function startProgress() {
    console.log('Começou Progresso')
    if (!interval) {
        // Inicializa o progresso
        progress = 0;
        document.getElementById('progressBar').style.width = '0%';

        // Inicia o intervalo que atualiza a barra de progresso a cada 100ms
        interval = setInterval(addProgress, 100);
    }
}


btnStart.addEventListener('click' , startProgress)