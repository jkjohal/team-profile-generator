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
        <h2>Employee name: ${data.employeeName}</h2>
        <h3>Employee id: ${data.employeeID}</h3>
        <h3>Employee email: ${data.email} </h3>
        <h3>Employee type: ${data.employeeType}</h3>
        <h3>Github: ${data.github}</h3>
        <h3>School: ${data.school}</h3>
        <h3>Office #: ${data.office}</h3>
    </div>
    <div>
        <h2>Employee name: ${data.employeeName}</h2>
        <h3>Employee id: ${data.employeeID}</h3>
        <h3>Employee email: ${data.email} </h3>
        <h3>Employee type: ${data.employeeType}</h3>
        <h3>Github: ${data.github}</h3>
        <h3>School: ${data.school}</h3>
        <h3>Office #: ${data.office}</h3>
    </div>
    <div>
        <h2>Employee name: ${data.employeeName}</h2>
        <h3>Employee id: ${data.employeeID}</h3>
        <h3>Employee email: ${data.email} </h3>
        <h3>Employee type: ${data.employeeType}</h3>
        <h3>Github: ${data.github}</h3>
        <h3>School: ${data.school}</h3>
        <h3>Office #: ${data.office}</h3>
    </div>
</body>
</html>
    `
}

module.exports = generatePage;
