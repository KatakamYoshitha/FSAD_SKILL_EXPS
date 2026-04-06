# FSAD-Skill13: Full-Stack Application Deployment


## 📁 Project Structure

```
skill-13-fullstack-app/
│
├── frontend/                          # React Application
│   ├── src/
│   │   ├── App.js                    # Main React component
│   │   ├── App.css                   # Component styling
│   │   └── index.js                  # React entry point
│   ├── public/
│   │   └── index.html                # HTML template
│   ├── package.json                  # NPM dependencies
│   ├── package-lock.json             # Locked dependency versions
│   ├── .env                          # Environment variables
│   └── .gitignore
│
├── backend/                          # Spring Boot Application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/fullstack/
│   │   │   │   ├── FullStackApplication.java    # Main Spring Boot app
│   │   │   │   └── ApiController.java           # REST API endpoints
│   │   │   └── resources/
│   │   │       ├── static/                      # React build (deployed here)
│   │   │       └── application.properties       # Spring Boot config
│   │   └── test/
│   │       └── java/com/example/fullstack/
│   │           └── ApiControllerTest.java       # Unit tests
│   ├── pom.xml                       # Maven configuration
│   └── .gitignore
│
├── .vscode/                          # VS Code settings
├── README.md                         # Project documentation
└── .gitignore                        # Git ignore rules



### Installation & Build

#### 1. Clone the Repository
```bash
git clone https://github.com/sivamanikantavasu/FSAD-Skill13.git
cd FSAD-Skill13
```

#### 2. Frontend Setup
```bash
cd frontend
npm install
npm run build
cd ..
```

#### 3. Copy Build to Backend
```bash
# Copy React build to backend static resources
cp -r frontend/build/* backend/src/main/resources/static/
```

#### 4. Backend Build
```bash
cd backend
mvn clean package -DskipTests
cd ..
```

#### 5. Run the Application
```bash
cd backend
java -jar target/fullstack-app-1.0.0.jar
```

#### 6. Access the Application
Open your browser and navigate to:
```
http://localhost:8080
```

## 🔧 Frontend Development

### Available Scripts

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (one-way operation)
npm eject
```
## 🔧 Backend Development

### Available Maven Commands

```bash
# Clean and build the project
mvn clean package

# Build without running tests
mvn clean package -DskipTests

# Run unit tests
mvn test

# Run the application locally
mvn spring-boot:run
```

