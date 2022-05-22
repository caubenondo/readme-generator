// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'Apache 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break;
      case 'Boost':
          return  '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        break;
      case 'CCO':
          return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
        break;
      case 'Elipse':
          return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        break;
      case 'GNU':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        break;
      case 'ISC':
          return  '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        break;
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
          break;
      case 'Unlicense':
          return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
          break;
      default:
          return '';
        break;
    }

}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseString = '';
  switch (license) {
    case 'Apache 2.0':
      licenseString =  'The project is under [Apache](https://opensource.org/licenses/Apache-2.0) license.'
      break;
    case 'Boost':
      licenseString =   'The project is under[Boost](https://www.boost.org/LICENSE_1_0.txt) license.'
      break;
    case 'CCO':
      licenseString =  'The project is under [Creative Common](http://creativecommons.org/publicdomain/zero/1.0/) license.'
      break;
    case 'Elipse':
      licenseString = 'The project is under [Elipse](https://opensource.org/licenses/EPL-1.0) license.'
      break;
    case 'GNU':
      licenseString =  'The project is under [GNU](https://www.gnu.org/licenses/gpl-3.0) license.'
      break;
    case 'ISC':
      licenseString =   'The project is under [ISC](https://opensource.org/licenses/ISC) license.'
      break;
    case 'MIT':
      licenseString =  'The project is under [MIT](https://opensource.org/licenses/MIT) license.'
        break;
    case 'Unlicense':
      licenseString =  'The project is under [Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) license.'
        break;
    default:
      licenseString = 'The project has no license retriction.';
      break;
  }
  return licenseString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const finalMD = `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation <a name='Installation'></a>
  To install necessary dependencies, run the following command:
  \`\`\`
    ${data.install}
  \`\`\`
  
  ## Usage <a name='Usage'></a>
  ${data.usage}
  
  ## License <a name='License'></a>
  ${renderLicenseSection(data.license)}

  ## Contributing <a name='Contributing'></a>
  ${data.contributing}

  ## Tests <a name='Tests'></a>
  To run tests, run the following command:
  \`\`\`
    ${data.tests}
  \`\`\`

  ## Questions <a name='Questions'></a>
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
  You can find more of my work at [${data.github}](https://github.com/${data.github})
`;
  return finalMD;
}

module.exports = generateMarkdown;
