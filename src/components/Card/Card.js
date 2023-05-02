import { useNavigate } from 'react-router-dom';
import './Card.scss';

function Card({ source, title, description, id }) {
    const paginate = useNavigate();

    const handleClick = id => {
        paginate(`/playlist/${id}`);
    };
    return (
        <div className="Card">
            <button
                onClick={() => handleClick(id)}
                className="Card__playlistCard"
            >
                <div className="Card__infoCard">
                    <div className="Card__faceCard">
                        <img
                            src={source}
                            alt="capa01"
                            className="Card__picCard"
                        />
                    </div>
                    <div className="Card__info">
                        <h3 className="Card__tittle"> {title}</h3>

                        <div className="Card__icons">
                            <p className="Card__autor">{description}</p>
                            <img
                                src="https://i.pinimg.com/564x/c8/c7/ae/c8c7ae54be452a0c46b9c8a52cd12a4a.jpg"
                                alt="icon"
                                className="Card__playIcon"
                            />
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}
export default Card;
