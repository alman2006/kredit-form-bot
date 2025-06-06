document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const amountValueSpan = document.getElementById('amountValue');
    const termInput = document.getElementById('term');
    const termValueSpan = document.getElementById('termValue');
    const monthlyPaymentSpan = document.getElementById('monthlyPayment');
    const applyButton = document.querySelector('.apply-button');

    // Kredit məbləği sliderinin dəyərini yeniləmək
    amountInput.addEventListener('input', function() {
        amountValueSpan.textContent = this.value + ' AZN';
        calculateMonthlyPayment();
    });

    // Kredit müddəti sliderinin dəyərini yeniləmək
    termInput.addEventListener('input', function() {
        termValueSpan.textContent = this.value + ' Ay';
        calculateMonthlyPayment();
    });

    // Aylıq ödənişi hesablama funksiyası (Realistikləşdirilmiş nümunə)
    function calculateMonthlyPayment() {
        const amount = parseFloat(amountInput.value);
        const term = parseFloat(termInput.value);

        const annualInterestRate = 0.20; // İllik 20%
        const monthlyInterestRate = annualInterestRate / 12; // Aylıq faiz dərəcəsi

        if (term <= 0 || monthlyInterestRate === 0) {
            monthlyPaymentSpan.textContent = "Hesablanmır";
            return;
        }

        const numerator = amount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), term);
        const denominator = Math.pow((1 + monthlyInterestRate), term) - 1;

        if (denominator === 0) {
            monthlyPaymentSpan.textContent = "Hesablanmır";
            return;
        }

        const monthlyPayment = numerator / denominator;

        if (isNaN(monthlyPayment)) {
            monthlyPaymentSpan.textContent = "Hesablanmır";
        } else {
            monthlyPaymentSpan.textContent = monthlyPayment.toFixed(2) + ' AZN';
        }
    }

    // "Kreditə Müraciət Et" düyməsi
    applyButton.addEventListener('click', function() {
        const selectedAmount = amountInput.value;
        const selectedTerm = termInput.value;
        const monthlyPayment = monthlyPaymentSpan.textContent;

        // Seçilmiş məbləğ və müddəti URL parametri kimi yeni səhifəyə göndəririk
        window.location.href = `application.html?amount=${selectedAmount}&term=${selectedTerm}&payment=${monthlyPayment}`;
    });

    // Səhifə yüklənəndə ilkin hesablamanı aparmaq
    calculateMonthlyPayment();
});
