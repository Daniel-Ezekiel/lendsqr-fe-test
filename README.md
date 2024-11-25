# Lendsqr Frontend Engineer Assessment

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Challenges & Solutions](#challenges--solutions)
10. [Future Improvements](#future-improvements)
11. [Author](#author)

---

## Project Overview

This project is a frontend application developed as part of the **Lendsqr Frontend Engineer Assessment**. The application:

- Implements a login page.
- Displays a dashboard with a list of users fetched from a mock API.
- Includes a detailed user information page.
- Supports caching using Tanstack Query for faster data retrieval and offline access.
- Is responsive and accessible across devices and browsers.

---

## Features

1. **Login Page**:
   - Simple authentication using Firebase authentication with mock functionality.
2. **Dashboard**:
   - Lists 500 users fetched from the API.
   - Pagination for seamless browsing.
3. **User Details Page**:
   - Displays detailed information about a selected user.
   - Caches user details using Tanstack query garbage collection and stale times instead of localStorage/IndexedDB.
4. **Error Handling**:
   - Handles API errors and provides user-friendly error messages.
5. **Responsive Design**:
   - Ensures usability on both desktop and mobile devices.

---

## Tech Stack

- **Frontend Framework**: Next (a React framework) with TypeScript
- **Styling**: SCSS
- **Data Fetching**: Tanstack Query
- **State Management**: Context API if used
- **Testing**: No unit tests are present currently.
- **Build Tool**: Nextjs Compiler

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/daniel-ezekiel/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```
2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Build the application for production**:
   ```bash
   npm run build
   ```

---

## Usage

```markdown
## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Log in using mock credentials (username: test@example.com, password: lendsqr).
3. Navigate to the dashboard to view the list of users.
4. Click on a user to view detailed information.
5. Use the pagination controls to navigate through the user list.
```

---

## API Endpoints

The application uses the following mock API endpoints:

- **Get All Users**: `https://api.npoint.io/f665a31c4b7bcf6c36cf/users/`
- **Get User Details by ID**: `https://api.npoint.io/f665a31c4b7bcf6c36cf/users/:id`

---

## Testing

At the moment, this project does not include any unit tests.

---

## Deployment

The application is deployed on Vercel.  
Visit the live application at: [https://daniel-ezekiel-lendsqr-fe-test.vercel.app](https://daniel-ezekiel-lendsqr-fe-test.vercel.app).

---

## Challenges & Solutions

1. **Handling Large Datasets**:
   - Implemented pagination for the dashboard to efficiently manage 500 users.
2. **Error Handling**:
   - Added fallback UI and retry mechanisms for API failures.
3. **Responsive Design**:
   - Used SCSS media queries through mixin functions for seamless adaptation to different screen sizes.

---

## Future Improvements

- **Authentication**: Make authentication even more robust with more features of the firebase authentication system.
- **Search and Filter**: Enhance the table with search and filter features as it was not implemented in this assessment.
- **Optimizations and Testing**: Add more unit tests and optimize the application for better performance to catch user experience issues.

---

## Author

- **Name**: Daniel Ezekiel
- **GitHub**: [https://github.com/daniel-ezekiel](https://github.com/daniel-ezekiel)

