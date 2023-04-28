import { useRouteError } from "react-router-dom";
import "./index.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
      <h1 className='warning'>Oops!</h1>
      <p>Parece que o que você está procurando ainda não foi criado. 🤭</p>
    </div>
  );
}
