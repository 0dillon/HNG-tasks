# Stage 1: Multi-Page Application Expansion

This project builds on Stage 0 by integrating two new, fully responsive and accessible pages: **Contact Us** and **About Me**.

## 1. Contact Us Page (Form Validation)

Implement a contact form with mandatory client-side validation.

### Required data-testid Attributes & Validation Rules

| Element | Validation | `data-testid` | 
| ----- | ----- | ----- | 
| Full Name | Required | `test-contact-name` | 
| Email | Required, Valid Email Format | `test-contact-email` | 
| Subject | Required | `test-contact-subject` | 
| Message | Required, Min. 10 Chars | `test-contact-message` | 
| Submit Button | \- | `test-contact-submit` | 
| Error Message | (Per field) | `test-contact-error-<field>` | 
| Success Message | On valid submission | `test-contact-success` | 

### Accessibility

* Inputs must use `<label>`s (via `for` attribute).
* Error messages must be linked using `aria-describedby`.

## 2. About Me Page (Reflective Content)

A semantic page for personal reflections.

### Structural data-testid & Semantic Elements

| Content Section | Semantic Element | `data-testid` | 
| ----- | ----- | ----- | 
| Page Container | `<main>` | `test-about-page` | 
| Bio | `<section>` | `test-about-bio` | 
| Goals | `<section>` | `test-about-goals` | 
| Low Confidence Areas | `<section>` | `test-about-confidence` | 
| Note to Future Self | `<section>` | `test-about-future-note` | 
| Extra Thoughts | `<section>` | `test-about-extra` | 

### Criteria Focus

* Use correct HTML structure (`<main>`, `<section>`, `<h2>`/`<h3>`).
* Maintain full responsiveness and keyboard navigation.