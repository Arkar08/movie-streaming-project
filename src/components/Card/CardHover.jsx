import { Card,CardHeader,CardBody,Typography } from "@material-tailwind/react"
import './Card.css'

const CardHover = ({secData}) => {
  const backgroundUrl = `https://image.tmdb.org/t/p/original${secData?.poster_path}`
  const background = backgroundUrl? backgroundUrl : ""
  return (
        <Card className="relative h-[250px] w-full rounded-md shadow-sm">
            <CardHeader  floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none"
              style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
            </CardHeader>
            <CardBody className="absolute m-0 h-20 w-full bottom-0 bg-blue-gray-600 backdrop-blur-sm bg-opacity-40 rounded-b-md">
              <Typography
                variant="h6"
                className="font-medium leading-[1] text-wrap text-white text-center"
              >
                {secData?.title || ""}
              </Typography>
            </CardBody>
        </Card>
  )
}

export default CardHover
