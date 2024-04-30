import Image from "next/image"

const IntroProfile = () => {
  return (
    <article className="w-full grid gap-4 sm:grid-cols-profile items-center">
      <Image
        className="rounded-md"
        src="/images/home_img.jpg"
        alt="profile"
        loading="lazy"
        width={100}
        height={0}
        sizes="100vw"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <div className="flex flex-col gap-2 pt-2">
        <h3 className="text-2xl text-light-gray900 dark:text-light-gray200 font-semibold">YeON</h3>
        <div className="w-full grid flex-1">
          <h6 className="text-ml text-light-gray600 dark:text-light-gray400 font-normal">
            Front-end developer since 2020
          </h6>
          <p className="text-sm text-light-gray600 dark:text-light-gray600 text-center leading-loose mt-3">
            아무 일에든지 다툼이나 허영으로 하지 말고 오직 겸손한 마음으로 각각 자기보다 남을 낫게 여기고
          </p>
          <p className="text-sm text-light-gray600 dark:text-light-gray600 text-right leading-none mt-1">
            빌립보서 2 : 3
          </p>
          <p className="text-sm text-light-gray600 dark:text-light-gray400 leading-normal mt-2">
            라는 말을 항상 새기며 남을 대하고 일하려 노력합니다. <br />
            재미있고 신기한 일, 특히 관심이 가는 분야와 일을 좋아합니다.
          </p>
        </div>
      </div>
    </article>
  )
}
export default IntroProfile