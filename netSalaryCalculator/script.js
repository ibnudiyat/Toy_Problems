function calculateNetSalary() {
    var basicSalary = parseFloat(document.getElementById("basicSalary").value);
    var benefits = parseFloat(document.getElementById("benefits").value);

    // KRA PAYE Rates
    const KRA_RATES = [
        [0, 0.16],
        [9440, 0.17],
        [16440, 0.18],
        [21440, 0.19],
        [24440, 0.20],
        [Infinity, 0.21],
    ];

    // Constants
    const NHIF_RATE = 0.04;
    const NSSF_RATE = 0.08;

    // Total Income
    let totalIncome = basicSalary + benefits;

    // Calculate PAYE
    let payee = 0;
    for (let i = 0; i < KRA_RATES.length; i++) {
        if (totalIncome <= KRA_RATES[i][0]) {
            payee = totalIncome * KRA_RATES[i][1];
            break;
        }
    }

    // Calculate NHIF and NSSF Deductions
    let NHIFDeductions = totalIncome * NHIF_RATE;
    let NSSFDeductions = totalIncome * NSSF_RATE;

    // Calculate Gross and Net Salary
    let grossSalary = totalIncome - payee - NHIFDeductions - NSSFDeductions;
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

    // Display the results
    document.getElementById("payeeResult").innerText = payee.toFixed(2);
    document.getElementById("nhifResult").innerText = NHIFDeductions.toFixed(2);
    document.getElementById("nssfResult").innerText = NSSFDeductions.toFixed(2);
    document.getElementById("grossSalaryResult").innerText = grossSalary.toFixed(2);
    document.getElementById("netSalaryResult").innerText = netSalary.toFixed(2);
}
