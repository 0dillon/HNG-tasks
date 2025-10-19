# Stage 0 - HNG Profile API

This is a simple Flask API that returns basic profile information along with a random cat fact fetched from an external API.

## Endpoint

`GET /me`

### Example Response

```json
{
  "status": "success",
  "user": {
    "email": "dillonofili667@gmail.com",
    "name": "Dillon Ofili",
    "stack": "Python/Flask"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
