# RecoMusic

A full-stack music recommendation application built with Ionic/Angular frontend and Node.js backend.

## Project Structure

The project is divided into two main parts:

### Frontend (Ionic/Angular)

The frontend is built using Ionic Framework with Angular, providing a mobile-first user interface.

- `frontend/`: Contains the Ionic/Angular application
  - `src/app/`: Main application code
    - `home/`: Home page component
    - `songs/`: Songs page component
    - `services/`: Angular services
    - `models/`: Data models
  - `src/assets/`: Static assets
  - `src/environments/`: Environment configurations

### Backend (Node.js)

The backend provides a RESTful API built with Node.js.

- `backend/`: Contains the Node.js server application
  - `config/`: Configuration files
  - `controllers/`: Request handlers
  - `models/`: Database models
  - `routes/`: API route definitions

## Prerequisites

- Node.js and npm
- Ionic CLI
- Angular CLI

## Setup and Installation

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
ionic serve
```

The application will be available at `http://localhost:8100`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy the `.env.example` file to a new file named `.env`
   - Update the values in `.env` with your database configuration:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file with your specific database configuration

4. Start the server:
```bash
npm start
```

The API will be available at `http://localhost:8080` (or your configured port)

## Features

- Browse and search for songs
- View song details
- Music recommendations
- Responsive mobile-first design

## Technologies Used

### Frontend
- Ionic Framework
- Angular
- TypeScript
- SCSS
- Capacitor (for mobile deployment)

### Backend
- Node.js
- Express.js
- MySQL (with Sequelize ORM)
- dotenv for environment configuration

## Testing

### Frontend Tests
```bash
cd frontend
ng test
```

### Backend Tests
```bash
cd backend
npm test
```

## Postman documentation

If you are interested into knowing how the API works, check the following link to the postman documentation https://documenter.getpostman.com/view/48535775/2sB3QGtB9w

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Angelo - aangelo21

Project Link: [https://github.com/aangelo21/recomusic](https://github.com/aangelo21/recomusic)