A responsive unit converter web application that allows users to convert values between different measurement categories such as Length, Weight, Temperature

## Tech Stack

React, Typescript, Vite

## My Approach

### 1) Project Initilaisation

I initialised the project using Vite with React and TypeScript because Vite provides Fast development server, Optimized builds and Better developer experience.

### 2) Component Structure

The Project is divided into reusable components:

src/

   ├── components/

    │    ├── Converter/

    │    └── ui/

    ├── utils/

    ├── constants/

Here the page is being displayed via App.tsx where I am importing Converter.tsx using Routes from react-router-dom so to maintain its scalability for future in multiple pages are required to be added. The Converter.tsx where the ui logic is written along with maintaining its type safety and css file. Also a Select component is created to reduce the redundancy as it can be used in multiple files.
Separated the utility functions and the common constants that includes proper enum, reusable arrays file that are being used to maintain its readability.

### 3) Hooks

Used hooks like useState to manage form state.

useMemo to optimise recalculations so that the functions only recalculates when its dependency changes.

 useCallback to prevent unnecessary function recreation.

 useEffect for the debouncing input.

### 4) Debounce

Here debounce is used for the input using setTimeout and useEffect. The reason is to prevent conversion logic runs on every keystroke. This ensures better performance and user experience.

## How to Run

```bash
npm install 
npm run dev
```
