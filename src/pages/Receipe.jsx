import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { useEffect, useState } from 'react';

function Receipe() {
    const { id } = useParams();
    const [receipe, setReceipe] = useState({});
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setReceipe(data.meals[0]));
    });
    return (
        <>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
        </>
    );
}

export { Receipe };
