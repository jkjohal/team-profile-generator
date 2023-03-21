function generatePage(data){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    <h1>Team Profile</h1>
    <div>
        <h2>Employee name: ${data.employeeName1}</h2>
        <h3>Employee id: ${data.employeeID1}</h3>
        <h3>Employee email: ${data.email1} </h3>
        <h3>Employee type: ${data.employeeType1}</h3>
        <h3>Github: ${data.github1}</h3>
        <h3>School: ${data.school1}</h3>
        <h3>Office #: ${data.office1}</h3>
    </div>
    <div>
        <h2>Employee name: ${data.employeeName2}</h2>
        <h3>Employee id: ${data.employeeID2}</h3>
        <h3>Employee email: ${data.email2} </h3>
        <h3>Employee type: ${data.employeeType2}</h3>
        <h3>Github: ${data.github2}</h3>
        <h3>School: ${data.school2}</h3>
        <h3>Office #: ${data.office2}</h3>
    </div>
    <div>
        <h2>Employee name: ${data.employeeName3}</h2>
        <h3>Employee id: ${data.employeeID3}</h3>
        <h3>Employee email: ${data.email3} </h3>
        <h3>Employee type: ${data.employeeType3}</h3>
        <h3>Github: ${data.github3}</h3>
        <h3>School: ${data.school3}</h3>
        <h3>Office #: ${data.office3}</h3>
    </div>
</body>
</html>
    `
}

module.exports = generatePage;
