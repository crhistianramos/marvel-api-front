# marvel-api-front

Angular project integrating Angular Material components, interacting with a local microservice providing Marvel character information. The microservice has two endpoints: one for fetching Marvel characters, displayed in the character catalog, and another for querying an individual character. The app also features an authentication module using JWT, storing the token until the page is refreshed. Once logged in, users can view a logbook of queries, including service name, date, and time. Optionally, the character ID is displayed if the query was made by clicking on a character card in the catalog.

**Note**: Credentials are as follows:
- Username: marvelAdmin
- Password: secreto

## Description

Aplicacion angular para consumir backend local de marvel-api

## Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Contribution](#contribution)
5. [License](#license)
6. [Contact](#contact)

## Installation

Details on how to install the project. Include dependencies, specific steps, etc.

npm install


## Usage
Describe how to use the project.

- ng serve

- abrir el navegador en localhost:4200

## Features

Marvel character catalog.
Individual character query endpoint.
JWT-based authentication.
Logbook of queries with service name, date, and time.
Optional display of character ID in the logbook.

## Contribution

Contributions to the project are welcome. Please follow these general guidelines:

Fork the repository.
Create a new branch for your feature/bugfix: git checkout -b feature-name.
Make your changes and commit them: git commit -m 'Description of changes'.
Push the changes to your branch: git push origin feature-name.
Open a pull request with a detailed description of your changes.
 
## Contact
For any inquiries or feedback, please contact [Crhistian Ramos Lopez] at [crhistianramos91@gmail.com].


## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.