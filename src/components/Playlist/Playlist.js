import Card from '../Card/Card';
import { pics } from '../Card/CardConstants';
import './Playlist.scss';

function Playlist({ title }) {
    return (
        <div className="Playlist">
            <h1 className="Playlist__title">{title}</h1>
            <div className="Playlist__card-container">
                {pics.map(element => {
                    return (
                        <Card
                            source={element.source}
                            title={element.title}
                            description={element.description}
                            id={element.id}
                            key={element.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Playlist;
