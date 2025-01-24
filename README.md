# ClaimCracker

ClaimCracker is a web application that helps users analyze and verify claims using machine learning and natural language processing. The application combines claim checking and validation capabilities.

## Features

- Claim validation using ClaimBuster API
- Deep learning models to classify real and fake claims
- RESTful API endpoints
- React frontend with Django backend

## Tech Stack

- **Backend**: Django 4.2.6
- **Frontend**: React
- **Database**: SQLite (default) / PostgreSQL (in production)
- **Deployment**: Render.com
- **Additional Tools**:
  - Django REST Framework
  - WhiteNoise for static files
  - CORS headers
  - python-dotenv for environment management

## Setup

1. Clone the repository:

```bash
git clone https://github.com/haris-musa/ClaimCracker.git
cd ClaimCracker
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the backend directory with the following variables:

```
DEBUG=False
CLAIMBUSTER_API_KEY=your_claimbuster_api_key
```

5. Run migrations:

```bash
python manage.py migrate
```

6. Start the development server:

```bash
python manage.py runserver
```

## API Endpoints

- `/api/classifier/predict/` - Classification endpoint
- `/api/check_claim/` - ClaimBuster integration
- `/health/` - Health check endpoint

## Deployment

The application is configured for deployment on Render.com with the following features:

- SSL enabled
- Static files served through WhiteNoise
- PostgreSQL database integration (automatically configured by Render)
- Automatic builds and deployments
