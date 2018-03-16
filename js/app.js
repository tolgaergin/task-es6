const axios = require('axios');

// Load Employees Json file
function getEmployees() {
  return axios.get('employees.json');
}

// Load Ages Json file
function getAges() {
  return axios.get('ages.json');
}

// Load All Json files
axios.all([getEmployees(), getAges()])
  .then(axios.spread(function (getEmployees, getAges) {

      // Defining variables
      const employees = getEmployees.data;
      const ages = getAges.data;

      let html = '';

      // Merge two json objects if they have same id
      let filtered = employees.filter(function (person) {

        return Object.assign(person, ages.find(age => {
          if (person.id === age.id) {
            return age;
          }
        }));

      }).filter(person => {

        // if the person is younger than 30
        // prepare HTML
        if (person.age < 30) {
          html += `
              <div>
                <img src='${person.picture}'/>
                <div>
                  ${person.firstName} ${person.lastName}
                  <p>${person.phone}</p>
                </div>
              </div>`;
          return person;
        }
      });

      // Insert html to the page
      document.getElementById('list').innerHTML = html;

    }));
