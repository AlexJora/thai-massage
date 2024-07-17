# Massage and Beauty Treatments Next.js App

## Project Description

This project is a Next.js-based front-end application (App Router) developed for Ruan Thai, a massage and beauty treatment center. The application consists of 12 pages, providing users with information about the services offered, contact details, and more.

## Technologies Used

### Frontend
- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods that can be used at the top level of a web app.
- **TailwindCSS:** A utility-first CSS framework for custom styling and responsive design.
- **React Icons**: A library of popular icons for React applications.
- **React Slick**: A carousel component built with React.
- **Slick Carousel**: A popular carousel library.
- **EmailJS**: A library for sending emails directly from JavaScript.

  
## Features

- **Homepage**: Featuring a hero image and an introduction to the Ruan Thai massage experience, performed by experienced Thai therapists.
- **About Page**: Information about Ruan Thai and its mission to provide the best Thai massage experience in Cape Town.
      <p>Massages Services</p>
      <p>Dropdown Menu</p>
  - **Overview Massage Page**: General information about massage services offered
  - **Traditional Thai Massage**: Details about traditional Thai massage
  - **Thai Oil Mix Massage**: Information about Thai oil mix massage
  - **Thai Hot Oil Massage**: Description of Thai hot oil massage
  - **Foot Reflexology**: Information about foot reflexology services
  - **Couple Massage**: Details about the couple massage experience 
- **Beauty Treatments**: Information on beauty services like facials and body scrubs.
- **Spa Packages**: Various spa packages available for a complete indulgent experience.
- **Price List**: Comprehensive list of prices for all services.
- **Contact Page**: A form powered by EmailJS for users to send inquiries directly via email.
  - **Responsive Design**: Ensuring the app looks great on both desktop and mobile devices.

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AlexJora/thai-massage.git
  
<p>cd thai-massage</p>
   
2. **Install dependencies:**
   ```sh
   npm install

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure
 ```sh
ruan-thai/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── app/
│   │   ├── about.jsx
│   │   ├── beauty-treatments.jsx
│   │   ├── contact.jsx
│   │   ├── page.jsx
│   │   ├── layout.jsx
│   │   ├── couple-massage.jsx
│   │   ├── foot-reflexology.jsx  
│   │   ├── massage-overview.jsx  
│   │   ├── thai-hot-oil-massage.jsx   
│   │   ├── thai-oil-mix-massage.jsx   
│   │   ├── traditional-thai.jsx   
│   │   ├── price-list.jsx
│   │   ├── spa-packages.jsx
│   ├── utils/
│   ├── ...
└── package.json


```

## Status
The project is deployed on Vercel. 

## Contact
For any questions or support, please contact jora.catalinaa@gmail.com


