# Book Search App

Book Search App is a simple [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) application that allows users to search for books using keywords. The app uses the Google Books API to fetch information about the books and displays them on the screen.

## See Live : [Here]()

## Features

- Search for books by entering keywords in the input field
- View up to 20 search results
- Click on the "Details" icon to view more information about the book, such as page count, description, and publication year
- If the user tries to submit the form without entering any keywords, they will be alerted
- If the book title is more than 30 characters long, an ellipsis will be displayed

## Technologies Used

The Book Search App has been built using the following technologies:

- [React.js](https://reactjs.org/) and [Next.js](https://nextjs.org/) for state management using Context API
- [Axios](https://axios-http.com/) for making HTTP requests to the API
- [Google Books API](https://developers.google.com/books/docs/overview) to fetch information about books
- [Tailwind CSS](https://tailwindcss.com/) for UI design
- [React Icons](https://react-icons.github.io/react-icons/) for icons

## Usage

To run the Book Search App, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using the npm install command.

   ```bash
   npm install
   ```

3. Start the development server using the npm run dev command.

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to http://localhost:3000.

## Screenshots

![book home page](/public/screenshot1.png)
![book detail](/public/screenshot2.png)
