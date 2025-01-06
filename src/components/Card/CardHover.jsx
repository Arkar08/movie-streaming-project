import { Card,CardHeader,CardBody,Typography } from "@material-tailwind/react"
import './Card.css'

const CardHover = () => {
  return (
        <Card className="relative h-[200px] w-full rounded-md shadow-sm">
            <CardHeader  floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
            </CardHeader>
            <CardBody className="absolute m-0 h-20 w-full bottom-0 bg-blue-gray-600 backdrop-blur-sm bg-opacity-40 rounded-b-md">
              <Typography
                variant="h6"
                className="font-medium leading-[1] text-wrap text-white text-center p-2"
              >
                GODZILLA X KONG THE NEW EMPIRE
              </Typography>
            </CardBody>
        </Card>
  )
}

export default CardHover
