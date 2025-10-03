# 🧮 Calculadora de IMC (Índice de Massa Corporal)

Uma calculadora simples e responsiva para determinar o Índice de Massa Corporal (IMC) de uma pessoa, fornecendo a classificação de saúde correspondente.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as três tecnologias base do desenvolvimento web:

* **HTML5:** Estrutura e marcação do conteúdo.
* **CSS3:** Estilização moderna e responsiva, utilizando a fonte 'Poppins'.
* **JavaScript:** Lógica para o cálculo e validação do IMC.

## ✨ Funcionalidades

* **Cálculo Preciso:** Calcula o IMC utilizando a fórmula padrão: $\text{IMC} = \frac{\text{Peso (kg)}}{\text{Altura (m)}^2}$.
* **Validação de Entrada:** Verifica se os campos de peso e altura foram preenchidos com valores numéricos válidos e positivos.
* **Classificação de Saúde:** Classifica o resultado do IMC nas seguintes categorias, conforme o script `script.js`:
    * Abaixo de 18.5: Abaixo do peso
    * Entre 18.5 e 24.9: Peso normal
    * Entre 25 e 29.9: Sobrepeso
    * 30 ou mais: Obesidade
* **Interface Amigável:** Design limpo e intuitivo, facilitando a entrada de dados e a visualização do resultado.

## 🛠️ Como Utilizar

1.  **Clone o Repositório** (ou baixe os arquivos `index.html`, `style.css` e `script.js`).
2.  Abra o arquivo `index.html` em qualquer navegador web (Google Chrome, Firefox, etc.).
3.  Digite seu **Peso** em quilogramas (kg).
4.  Digite sua **Altura** em centímetros (cm).
5.  Clique no botão **"Calcular IMC"**.
6.  O resultado será exibido imediatamente abaixo do botão.

## 🎯 Estrutura do Projeto

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Contém a estrutura da página, os campos de entrada e o botão. |
| `style.css` | Define o visual da calculadora, incluindo cores e layout. |
| `script.js` | Implementa a função `calcularImc()` para processar os dados, calcular o IMC e exibir a classificação. |

## 💡 Próximos Passos / Melhorias Sugeridas

* Adicionar validação visual (indicadores de erro nos campos).
* Implementar a opção de unidades imperiais (libras e pés/polegadas).
* Melhorar a estilização de acordo com a classificação do IMC (ex: cor vermelha para Obesidade).

