import Image from 'next/image'
import style from './hero.module.css'

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image
          src='/images/max.png'
          alt='Image of Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, im Max</h1>
      <p>
        Full stack web developer, with react, next, postgreSs, mongo, node,
        express
      </p>
    </section>
  )
}

export default Hero
