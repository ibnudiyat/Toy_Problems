function calculateNetSalary() {
    var basicPay = parseFloat(document.getElementById("basicPay").value);
    var houseAllowance = parseFloat(document.getElementById("houseAllowance").value);
    var benefits = parseFloat(document.getElementById("benefits").value);
    var otherEarnings = parseFloat(document.getElementById("otherEarnings").value);
    var absenteeism = parseFloat(document.getElementById("absenteeism").value);

    // Formulas
    var grossPay = basicPay + houseAllowance + benefits - absenteeism;
    var deductibleReliefs = calculateDeductibleReliefs(grossPay);
    var taxableIncome = grossPay - deductibleReliefs;
    var paye = calculatePAYE(taxableIncome);
    var grossTaxPayable = taxableIncome - paye;
    var netSalary = taxableIncome - paye - calculateNHIF(grossPay);

    // Display results
    document.getElementById("grossPayResult").innerText = grossPay.toFixed(2);
    document.getElementById("taxableIncomeResult").innerText = taxableIncome.toFixed(2);
    document.getElementById("payeResult").innerText = paye.toFixed(2);
    document.getElementById("grossTaxPayableResult").innerText = grossTaxPayable.toFixed(2);
    document.getElementById("netSalaryResult").innerText = netSalary.toFixed(2);

    // Display calculations
    document.getElementById("grossPayCalculation").innerText = "Gross Pay Calculation: " + basicPay.toFixed(2) + " + " + houseAllowance.toFixed(2) + " + " + benefits.toFixed(2) + " - " + absenteeism.toFixed(2);
    document.getElementById("taxableIncomeCalculation").innerText = "Taxable Income Calculation: " + taxableIncome.toFixed(2) + " = " + grossPay.toFixed(2) + " - " + deductibleReliefs.toFixed(2);
    document.getElementById("payeCalculation").innerText = "PAYE Calculation: " + paye.toFixed(2) + " = " + taxableIncome.toFixed(2) + " * Appropriate Tax Rate";
    document.getElementById("grossTaxPayableCalculation").innerText = "Gross Tax Payable Calculation: " + grossTaxPayable.toFixed(2) + " = " + taxableIncome.toFixed(2) + " - " + paye.toFixed(2);
    document.getElementById("netSalaryCalculation").innerText = "Net Salary Calculation: " + netSalary.toFixed(2) + " = " + taxableIncome.toFixed(2) + " - " + paye.toFixed(2) + " - " + calculateNHIF(grossPay).toFixed(2);
}

function calculateDeductibleReliefs(grossPay) {
    const NSSF_RATE = 0.06;
    const HOSP_RATE = 0.015;
    const HOSP_MAX = 1500;

    // Calculate NSSF contribution
    var nssfContribution = Math.min(grossPay * NSSF_RATE, 18000);

    // Calculate HOSP contribution
    var hospContribution = grossPay * HOSP_RATE;
    hospContribution = Math.min(hospContribution, HOSP_MAX);

    return nssfContribution + hospContribution;
}

function calculatePAYE(taxableIncome) {
    const TAX_RATES = [
        [24000, 0.1],
        [32333, 0.25],
        [Infinity, 0.3]
    ];

    var paye = 0;
    for (let i = 0; i < TAX_RATES.length; i++) {
        if (taxableIncome <= TAX_RATES[i][0]) {
            paye = taxableIncome * TAX_RATES[i][1];
            break;
        }
    }

    return paye;
}

function calculateNHIF(grossPay) {
    const NHIF_RATES = [
        [5999, 150],
        [7999, 300],
        [11999, 400],
        [14999, 500],
        [19999, 600],
        [24999, 750],
        [29999, 850],
        [34999, 900],
        [39999, 950],
        [44999, 1000],
        [49999, 1100],
        [59999, 1200],
        [69999, 1300],
        [79999, 1400],
        [89999, 1500],
        [99999, 1600],
        [Infinity, 1700]
    ];

    var nhifDeduction = 0;
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (grossPay <= NHIF_RATES[i][0]) {
            nhifDeduction = NHIF_RATES[i][1];
            break;
        }
    }

    return nhifDeduction;
}
