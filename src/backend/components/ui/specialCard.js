import Classes from './specialCard.module.css'

function Card(props)
{
    return <div className={Classes.card}>
        {props.children}
    </div>
}

export default Card;