import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import './PopularCard.css'

const PopularCard = () => {
  return (
    <Card className='w-full h-[330px] bg-transparent'>
        <CardHeader className="h-90 p-0 m-0" shadow={false} floated={false}>
            <img src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image" className='w-full h-full object-cover'  />
        </CardHeader>
        <CardBody>
            <Typography variant='h6' className='text-wrap text-center text-gray-500'>Geme of Thrones</Typography>
        </CardBody>
    </Card>
  )
}

export default PopularCard
