import Classes from './section.module.css'

function Section(props)
{
    return <section className={Classes.section} >
        {props.children}
    </section>
}

export default Section;