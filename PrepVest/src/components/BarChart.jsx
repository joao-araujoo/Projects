import { useEffect, useRef } from 'react';
import Chart from "chart.js/auto"

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Certifique-se de que o gráfico só seja criado quando o componente for montado
    if (chartRef.current) {
      // Destrói o gráfico existente antes de criar um novo
      chartRef.current.destroy();
    }

    // Cria um novo gráfico
    const data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [
        {
          label: 'Vendas Mensais',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: [65, 59, 80, 81, 56],
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Renderiza o novo gráfico
    chartRef.current = new Chart(document.getElementById('myChart'), {
      type: 'bar',
      data,
      options,
    });

    // Limpa o gráfico ao desmontar o componente
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // O array vazio assegura que este efeito só seja executado uma vez (equivalente a componentDidMount)

  return <canvas id="myChart" style={{ maxWidth: "50%" }}/>;
};

export default BarChart;