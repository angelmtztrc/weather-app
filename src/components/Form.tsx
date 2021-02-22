import { useState } from 'react';

export type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const Form = ({ setCity }: FormProps) => {
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  // handle input data
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setLocation(e.currentTarget.value);
  };

  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // check if the location is empty
    if (location.trim() === '' || location.trim() === null) {
      setError('Please enter a valid town or city');
      return;
    }

    // clear the previous error
    setError(null);

    // send values to the parent component
    setCity(location);
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <div className="flex items-center w-full space-x-2">
        <div className="w-full">
          <input
            className={`${
              error && 'border-red-500'
            } block pr-16 px-4 py-2 w-full text-gray-900 bg-transparent border-b-2 border-gray-400 focus:border-gray-900 focus:outline-none appearance-none transition-colors duration-300 ease-in`}
            type="text"
            placeholder="Enter a town or city..."
            name="location"
            value={location}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
        <button
          type="submit"
          className="mt-0.5 p-2 text-white bg-gray-900 rounded"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;
