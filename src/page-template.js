const generateRoster = teamRoster => {
    return `
    <div class="card">
    <img src="https://img.icons8.com/doodle/48/000000/name.png" style="width: 8%;"/>
     <h3 class="name">${name}</h3>
     <p class="email">${email}</p>
     <p class="officeNumber">Phone: ${officeNumber}</p>
     <p class="id">Employee ID</p>
</div> 
`;
};

module.exports = templateData => {
    const { name, email, officeNumber } = templateData;
};