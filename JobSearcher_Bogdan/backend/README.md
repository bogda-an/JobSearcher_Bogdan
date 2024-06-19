## API Endpoints

### Jobs

- **GET /api/jobs**
  - Retrieves all job postings.

- **POST /api/jobs**
  - Adds a new job posting.
  - **Protected**: Requires JWT token.

- **PUT /api/jobs/:id**
  - Updates an existing job posting.
  - **Protected**: Requires JWT token.

- **DELETE /api/jobs/:id**
  - Deletes a job posting.
  - **Protected**: Requires JWT token.

### Users

- **POST /api/users/register**
  - Registers a new user.

- **POST /api/users/login**
  - Logs in a user and returns a JWT token.

- **GET /api/users/me**
  - Retrieves the logged-in user's profile.
  - **Protected**: Requires JWT token.
 
