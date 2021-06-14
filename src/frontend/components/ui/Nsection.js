import Classes from './section.module.css'

function Nsection(props)
{
    return <section className={Classes.nsection}>
        {props.children}
    </section>
}

export default Nsection;