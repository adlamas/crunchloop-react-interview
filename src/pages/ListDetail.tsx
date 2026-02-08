import { useParams } from 'react-router-dom';

const ListDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  return(
    <div> Hola ID es: {id} </div>
  )
}

export default ListDetail;
