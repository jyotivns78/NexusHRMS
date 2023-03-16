const validate = orgData => {
    const errors = {}
    if (!orgData.organizationName) {
        errors.organizationName = "Please Enter Organization Name.";
    }
    
    if (!orgData.organizationEmail) {
        errors.organizationEmail = "Please Enter Organization Email";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(orgData.organizationEmail)) {
        errors.organizationEmail = "Invalid Email Address";
    }

    if (!orgData.organizationNumber) {
        errors.organizationNumber = "Please Enter Organization Number";
    }
    else if (!/^\+?[1-9][0-9]{7,14}$/i.test(orgData.organizationNumber)) {
        errors.organizationNumber = "Invalid Number";
    }

    if (!orgData.organizationAddress ) {
        errors.organizationAddress = "Please Enter Organization Address";
    }

// second page

    if (!orgData.pan) {
        errors.pan = "Please Enter Organization PAN";
    }

    else if(!/^([A-Z]){3}(C|P|H|F|A|T|B|L|J|G){1}([A-Z]){1}([0-9]){4}([A-Z]){1}?$/i.test(orgData.pan)) {
        errors.pan = "Invalid PAN";
    }

    if (!orgData.TINNumber) {
        errors.TINNumber = "Please Enter Organization TIN Number";
    }

    else if(!/^(?![-])(?!.*[-]$)(?!.*[-]{2})[0-9-]+$/i.test(orgData.TINNumber)) {
        errors.TINNumber = "Invalid TIN Number";
    }

    if (!orgData.TANNumber) {
        errors.TANNumber = "Please Enter Organization TAN Number";
    }

    else if(!/(?:(?=(^[a-zA-Z]{5}\d{4}[a-zA-Z]{1}$))|(?=(^[a-zA-Z]{4}[0-9]{5}[a-zA-Z]{1}?$)))/i.test(orgData.TANNumber)) {
        errors.TANNumber = "Invalid TAN Number";
    }

    if (!orgData.GSTNumber) {
        errors.GSTNumber = "Please Enter GST Number";
    }

    else if(!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i.test(orgData.GSTNumber)) {
        errors.GSTNumber = "Invalid GST Number";
    }

    if (!orgData.CINNumber) {
        errors.CINNumber = "Please Enter Organization CIN Number";
    }

    else if(!/^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/i.test(orgData.CINNumber)) {
        errors.CINNumber = "Invalid CIN Number";
    }


    if (!orgData.factoryLicenceNo) {
        errors.factoryLicenceNo = "Please Enter Factory Licence Number";
    }

   
    
    if (!orgData.moa) {
        errors.moa = "Please Enter MOA/AOA Number";
    }

    else if(!/^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/i.test(orgData.moa)) {
        errors.moa = "Invalid CIN Number";
    }

    if (!orgData.pollutionConsent) {
        errors.pollutionConsent = "Please Enter Pollution Consent";
    }

     
    if (!orgData.certificateNo) {
        errors.certificateNo = "Please Enter Certificate Number";
    }


    if (!orgData.PFCode) {
        errors.PFCode = "Please Enter PF Code";
    }


    else if(!/^[A-Z]{2}[\s\/]?[A-Z]{3}[\s\/]?[0-9]{7}[\s\/]?[0-9]{3}[\s\/]?[0-9]{7}$/i.test(orgData.PFCode)) {
        errors.PFCode = "Invalid PF Code";
    }

    if (!orgData.ESICCode) {
        errors.ESICCode = "Please Enter ESIC Code";
    }

    else if(!/^[0-9]{2}\p{Pd}[0-9]{2}\p{Pd}[0-9]{6}\p{Pd}[0-9]{3}\p{Pd}[0-9]{4}$/i.test(orgData.ESICCode)) {
        errors.ESICCode = "Invalid ESIC Code";
    }

    if (!orgData.professionalTaxCode) {
        errors.professionalTaxCode = "Please Enter Professional Tax Code";
    }


    // Third Page

    if (!orgData.CLRARegistration) {
        errors.CLRARegistration = "Please Enter CLRA Registration Number";
    }

    if (!orgData.ISMWRegistration) {
        errors.ISMWRegistration = "Please Enter ISMW Registration Number";
    }

    if (!orgData.labourWelfare) {
        errors.labourWelfare = "Please Enter Labour Welfare";
    }

    if (!orgData.businessUnit) {
        errors.businessUnit = "Please Enter Business Unit";
    }

    if (!orgData.grades) {
        errors.grades = "Please Choose Grades";
    }

    if (!orgData.salaryGrade) {
        errors.salaryGrade = "Please Choose Salary Grades";
    }

    if (!orgData.departmentName) {
        errors.departmentName = "Please Enter Department Name";
    }

    if (!orgData.department) {
        errors.department = "Please Select Department";
    }


    
    if (!orgData.subDepartment) {
        errors.subDepartment = "Please Select Sub Department";
    }

    if (!orgData.employeeCategory) {
        errors.employeeCategory = "Please Select Employee Category";
    }


    if (!orgData.workLocation) {
        errors.workLocation = "Please Enter Work Location";
    }



return errors;





 
}

export default validate;