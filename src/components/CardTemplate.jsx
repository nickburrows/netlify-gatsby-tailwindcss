import React from "react"

const CardTemplate = props => {
  const { title, description, link } = props
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 group">
        <a
          href={link}
          className="inline-flex items-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 underline dark:text-blue-400 group-hover:text-white group-hover:no-underline"
        >
          {title}
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-gray-200">
          {description}
        </p>
      </div>
    </>
  )
}

export default CardTemplate
