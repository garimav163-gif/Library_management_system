    function calculateFine() {
      const days = parseInt(document.getElementById('daysLate').value);
      const finePerDay = 10; 
      const resultElement = document.getElementById('result');

      if (isNaN(days) || days < 0) {
        resultElement.textContent = "Please enter a valid number of days.";
        return;
      }

      const totalFine = days * finePerDay;
      resultElement.textContent = `Total fine: Rs ${totalFine}`;
    }