import Card from './Card'


const CardList = ({users}) => {

    return (
        <>
            {
                users.map((user, index) => {
                    return (
                        <Card key={index}
                                  id={user.id}
                                  name={user.name}
                                  task={user.task}
                        />
                    )
                })
            }
        </>
    )
}

export default CardList
