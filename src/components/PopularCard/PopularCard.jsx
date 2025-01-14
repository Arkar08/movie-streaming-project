/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import './PopularCard.css'

const PopularCard = ({secData}) => {

  const images = secData?.poster_path === '' ? `https://image.tmdb.org/t/p/original${secData.backdrop_path}` : `https://image.tmdb.org/t/p/original${secData?.poster_path}`
  return (
    <Card className='w-full h-[350px] bg-transparent cursor-pointer'>
        <CardHeader className="h-90 p-0 m-0" shadow={false} floated={false}>
            <img src={images} alt="image" className='w-full h-full'  />
        </CardHeader>
        <CardBody>
            <Typography variant='h6' className='text-wrap text-center text-gray-500'>{secData?.title || secData?.name || ''}</Typography>
        </CardBody>
    </Card>
  )
}

export default PopularCard
