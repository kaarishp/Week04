
# Express.js Lab and In-Class Exercise Repository

This repository contains a comprehensive Express.js application showcasing various features of the framework through a set of lab exercises and in-class examples. It demonstrates handling different types of HTTP requests, including GET and POST, along with examples of working with path parameters, query parameters, and request bodies.

## Key Features:

- **Basic Routing:** Demonstrates responding to different routes with plain text, JSON, and setting custom headers.
- **Parameter Handling:** Includes examples of extracting path parameters and query parameters to dynamically respond to requests.
- **Body Parsing:** Shows how to parse JSON and URL-encoded request bodies for POST requests.
- **Content-Type Management:** An example of setting the `Content-Type` header manually.
- **Custom Response Statuses:** Illustrates sending responses with custom HTTP status codes.

## Endpoints Overview:

- `/` (GET): Sends a plain text welcome message.
- `/hello` (GET): Responds with a simple "Hello Express JS" message.
- `/user` (GET/POST): Demonstrates user creation and retrieval using query parameters and URL parameters.
- `/student` (GET/POST): Showcases handling different methods for the same route, including parsing headers in POST requests.
- `/faculty` (GET): Returns a simple greeting message.
- `/employee` (GET/POST): Includes examples of path and query parameter handling, along with a validation for query parameters.
- `/hotels` (POST): Accepts and echoes back JSON body content.

Designed to serve as an educational tool, this project is perfect for students and developers looking to deepen their understanding of Express.js and its capabilities in building RESTful APIs and web applications.
