import Card from './Card'


const CardList = ({users}) => {

    return (
        <>
            {
                users.map((user, index) => {
                    return (
                        <Card key={index}
                              _id={user._id}
                              name={user.name}
                              task={user.task}
                              done={user.done}
                        />
                    )
                })
            }
        </>
    )
}

export default CardList
