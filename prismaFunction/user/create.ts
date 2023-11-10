import prisma from '../../util/dataSource'



async function createUser (user: createUserInterface) {
    await prisma.user12.create({
        data: {
            name: user.name
        }
    })
    //exception 처리 해서 분기 할 것
}

export {
    createUser,
}