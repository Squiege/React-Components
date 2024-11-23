import PropTypes from 'prop-types';

// Setting up component for the onClick for each thumbnail
const CharacterDetail = ({ selectedCharacter }) => {
    if (!selectedCharacter) return <p>Select a character to see details.</p>;

    return (
        // Creating the border and details area. Putting all the details inside of it.
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h2>{selectedCharacter.name}</h2>
            <img
                src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
                alt={selectedCharacter.name}
                style={{ width: '300px', height: '300px', borderRadius: '10px' }}
            />
            <p>{selectedCharacter.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {selectedCharacter.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
