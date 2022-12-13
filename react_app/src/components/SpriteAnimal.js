function SpriteAnimal(props) {
    return (
        <img src={require(`../Sprites/Personajes/${props.animal}.png`)} alt=""/>
    );
}

export default SpriteAnimal;