import { Carousel,Button } from '@material-tailwind/react'
import './CarouselImage.css'

const CarouselImage = () => {
  return (
        <Carousel className="rounded-xl h-full w-full">
          <div className='mainImages'>
            <div className='carouselText'>
                <h1 className="text-3xl font-bold text-white text-nowrap">Welcome to our website</h1>
                <p className="text-white text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum bibendum.hello world is missing.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum bibendum.hello world is missing
                </p>
                <Button color='purple' className='mt-20'>Watch Now</Button>
            </div>
            <div className='cardImageContainer'>
                <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="" className='cardImage'/>
            </div>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="images"
            />
          </div>
          <div className='mainImages'>
            <div className='carouselText'>
                <h1 className="text-3xl font-bold text-white text-nowrap">Welcome to our website</h1>
                <p className="text-white text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum bibendum.hello world is missing.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum bibendum.hello world is missing
                </p>
                <Button color='purple' className='mt-20'>Watch Now</Button>
            </div>
            <div className='cardImageContainer'>
                <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="" className='cardImage'/>
            </div>
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="images"
            />
          </div>
          <div className='mainImages'>
            <div className='carouselText'>
                <h1 className="text-3xl font-bold text-white text-nowrap">Welcome to our website</h1>
                <p className="text-white text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum bibendum.hello world is missing.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum bibendum.hello world is missing
                </p>
                <Button color='purple' className='mt-20'>Watch Now</Button>
            </div>
            <div className='cardImageContainer'>
                <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="" className='cardImage'/>
            </div>
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="images"
            />
        </div>
        </Carousel>

  )
}

export default CarouselImage
