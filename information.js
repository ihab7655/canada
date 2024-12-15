function validateForm() {
    // جلب القيم من الحقول
    const status = document.getElementById('status').value;
    const applicationNumber = document.getElementById('applicationNumber').value;
    const countryOfBirth = document.getElementById('countryOfBirth').value;
    const passportNumber = document.getElementById('passportNumber').value;
    const issueMonth = document.getElementById('issueMonth').value;
    const issueDay = document.getElementById('issueDay').value;
    const issueYear = document.getElementById('issueYear').value;
    const expiryMonth = document.getElementById('expiryMonth').value;
    const expiryDay = document.getElementById('expiryDay').value;
    const expiryYear = document.getElementById('expiryYear').value;
    const nationality = document.getElementById('nationality').value; // جلب قيمة الجنسية

    // التحقق من أن جميع الحقول ليست فارغة
    if (!status || !applicationNumber || !countryOfBirth || !passportNumber || !issueMonth || !issueDay || !issueYear || !expiryMonth || !expiryDay || !expiryYear || !nationality) {
        alert("يرجى ملء جميع الحقول.");
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    // التحقق من أن جميع الحقول متطابقة
    if (status !== applicationNumber || status !== countryOfBirth || status !== passportNumber || status !== issueMonth || status !== issueDay || status !== issueYear || status !== expiryMonth || status !== expiryDay || status !== expiryYear) {
        alert("يجب أن تكون جميع الحقول متطابقة.");
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    // التحقق من أن تاريخ الإصدار يجب أن يكون 19/04/2024
    const issueDate = new Date(issueYear, issueMonth - 1, issueDay);
    const requiredIssueDate = new Date(2024, 3, 19); // الأشهر تبدأ من 0 في JavaScript
    if (issueDate.getTime() !== requiredIssueDate.getTime()) {
        alert("التحقق من تاريخ إصدار جواز السفر فشل. يرجى المحاولة مرة أخرى.");
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    // التحقق من أن تاريخ الانتهاء يجب أن يكون 18/10/2026
    const expiryDate = new Date(expiryYear, expiryMonth - 1, expiryDay);
    const requiredExpiryDate = new Date(2026, 9, 18); // الأشهر تبدأ من 0 في JavaScript
    if (expiryDate.getTime() !== requiredExpiryDate.getTime()) {
        alert("التحقق من تاريخ انتهاء جواز السفر فشل. يرجى المحاولة مرة أخرى.");
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    // التحقق من أن تاريخ الانتهاء يجب أن يكون بعد تاريخ الإصدار
    if (expiryDate <= issueDate) {
        alert("تاريخ الانتهاء يجب أن يكون بعد تاريخ الإصدار.");
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    // التحقق من رقم جواز السفر
    if (passportNumber !== "N01133502") {
        alert("التحقق من رقم جواز السفر فشل. يرجى المحاولة مرة أخرى.");
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    // التحقق من الجنسية
    if (nationality !== "سوريا") {
        alert("التحقق من الجنسية فشل. يجب أن تكون الجنسية سوريا.");
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    // تحقق من رقم الطلب
    if (applicationNumber === "g305505") {
        window.location.href = "https://ihab7655.github.io/canada";
        return false; // لمنع الإرسال الفعلي للنموذج
    }

    alert("التحقق من رقم الطلب فشل. يرجى المحاولة مرة أخرى.");
    return false; // لمنع الإرسال الفعلي للنموذج في حال عدم التحقق
}
