// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/license-MIT-brightgreen',
    'Apache 2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue',
    // Add more licenses as needed
  };

  // Check if a valid license is provided
  if (license && licenseBadges.hasOwnProperty(license)) {
    // Return the corresponding badge URL
    return `![${license} License](${licenseBadges[license]})`;
  } else {
    // If no license or an invalid license is provided, return an empty string
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  // Map license names to their corresponding license URLs
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    // Add more licenses as needed
  };

  // Check if a valid license is provided
  if (license && licenseLinks.hasOwnProperty(license)) {
    // Return the corresponding license URL
    return `[${license} License](${licenseLinks[license]})`;
  } else {
    // If no license or an invalid license is provided, return an empty string
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Map license names to their corresponding license section content
  const licenseSections = {
    'MIT': `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`,
    'Apache 2.0': `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
`,
    // Add more licenses as needed
  };

  // Check if a valid license is provided
  if (license && licenseSections.hasOwnProperty(license)) {
    // Return the corresponding license section content
    return licenseSections[license];
  } else {
    // If no license or an invalid license is provided, return an empty string
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${data.license}
`;
}

module.exports = generateMarkdown;




