// Setting up component for the thumbnails and the ability to click on them
const MarvelApp = ({ characters, onThumbnailClick }) => {
    return (
        // Setting up grid style and thumbnails
        <div className="character-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {characters.map((character) => (
                <img
                    key={character.id}
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                    onClick={() => onThumbnailClick(character)}
                    style={{
                        cursor: 'pointer',
                        width: '150px',
                        height: '150px',
                        borderRadius: '10px',
                        border: '2px solid red',
                    }}
                />
            ))}
        </div>
    );
};

export default MarvelApp;
