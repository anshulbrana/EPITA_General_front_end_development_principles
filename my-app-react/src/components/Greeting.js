const Greeting = ({firstName, lastName}) => {
    console.log({firstName, lastName})
    return <h2>Hello {firstName} {lastName} !</h2>
}

export default Greeting