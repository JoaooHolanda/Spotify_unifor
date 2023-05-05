import { React } from 'react'
import { pics } from '../Card/CardConstants';


import { useParams } from 'react-router-dom';


function List(props) {
    const { id } = useParams();

    const playlistAtual = pics.find(playlist => playlist.id == id)

    const details = playlistAtual.musicas?.filter(pic => {
        if (props.input === '') {
            return pic
        }
        //return the item which contains the user input
        else {
            return pic.title.toLowerCase().includes(props.input)
             
    
        }
    });
    //create a new array by filtering the original array
   
    return (
        <ul className="ListaMusicas">
        {details.map(item => {
            return (
                <li
                    key={item.id}
                    className="musica"
                >
                    <p className="music-title">
                        {item.title}
                    </p>
                    <audio controls="controls">
                        <source
                         id='musicshow'
                            src={item.file}
                            type="audio/mpeg"
                        />
                        <source
                            id='musicshow'
                            src={item.file}
                            type="audio/ogg"
                        />
                    </audio>
                </li>
            );
        })}
    </ul>
    )
}

export default List
