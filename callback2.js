// Função que simula um delay
function tarefaComDelay(callback) {
    console.log('Iniciando tarefa...');
    
    setTimeout(function() {
      console.log('Tarefa concluída!');
      callback();  // Chamando o callback após o delay
    }, 2000);  // Atraso de 2 segundos
  }
  
  // Função de callback que será chamada após a tarefa ser concluída
  function tarefaFinalizada() {
    console.log('A tarefa foi finalizada com sucesso!');
  }
  
  // Chamando a função com um callback
  tarefaComDelay(tarefaFinalizada);
  