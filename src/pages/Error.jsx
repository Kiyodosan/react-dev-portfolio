import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>An error has occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Error