import Classes from './Card.module.css'

function Card(props)
{
    return <div title="carte" className={Classes.card}>
        {props.children}
    </div>
}

export default Card;