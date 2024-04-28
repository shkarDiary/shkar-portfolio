import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    {
      name: "react",
      img: "/image/React.png",
      h: 2300,
      w: 2000,
    },
    {
      name: "next",
      img: "/image/nextjs.png",
      h: 1234,
      w: 2048,
    },
    {
      name: "springBoot",
      img: "/image/spring-boot-logo.png",
      h: 315,
      w: 600,
    },
    {
      name: "python",
      img: "/image/Python-logo-notext.png",
      h: 2048,
      w: 1869,
    },
    {
      name: "js",
      img: "/image/js.png",
      h: 1080,
      w: 1080,
    },
  ];
  const iconName = [
    {
      name: "facebook",
      img: "/image/Facebook.png",
      link: "https://www.facebook.com/shkar.deary",
    },
    {
      name: "instagram",
      img: "/image/Instagram.png",
      link: "https://www.instagram.com/d4ro_diary/",
    },
    {
      name: "mailLine",
      img: "/image/mailLine.png",
      link: "mailto:shkardeary4@gmail.com",
    },
  ];
  return (
    <main className="  ">
      <span className=" w-[30%] h-full bg-primary-200 absolute right-0 top-0 -z-20"></span>
      <section className="md:h-[calc(100%-8rem)]  md:w-[70%] w-screen h-full mt-16 ">
        <div className=" flex flex-col  justify-center items-center md:gap-4 gap-10 ">
          <div>
            <h3 className=" text-secondary-300 md:text-2xl text-lg ">
              Shkar Diary
            </h3>
            <h1 className=" text-blue-950 md:text-6xl text-4xl md:leading-[4rem] leading-[3rem]  ">
              <span>Graphic Designer</span> <br />
              &Web Developer
            </h1>
          </div>

          <div className=" md:w-[30rem] w-[18rem]  bg-gray-50 rounded-sm shadow-xl md:p-3 pb-5 px-3 text-center md:text-left ">
            <div className=" flex justify-center items-center font-bold  w-10 h-10 rounded-full md:shadow-[0_0px_75px_5px_rgb(0,0,0,0.3)] shadow-[0_0px_75px_1px_rgb(0,0,0,0.3)] bg-white relative top-[-22px] left-[-22px]  ">
              <span className=" text-3xl overflow-hidden leading-none relative top-[0.4rem]  ">
                &quot;
              </span>
            </div>
            <p className="text-xl text-gray-600  ">
              Web Developer & Graphic Designer Blending code and creativity to
              build engaging digital experiences. Responsive websites,
              user-centric interfaces, and visual storytelling. Transforming
              ideas into interactive and aesthetic realities. ✨
            </p>
          </div>
        </div>
        <div className=" flex md:gap-3 md:flex-col md:px-28 md:m-0 mt-12 justify-evenly md:relative md:bottom-24 ">
          {iconName.map((icon) => (
            <Link
              href={icon.link}
              key={icon.name}
              title={icon.name}
              target="_blank"
            >
              <Image
                src={icon.img}
                width={24}
                height={24}
                alt={`this is ${icon.name} icon`}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 pt-8 bg-white h-screen ">
        <div className="flex  justify-evenly ">
          {skills.map((skills) => (
            <Image
              className="w-14 h-10 md:w-32 md:h-auto object-contain"
              key={skills.name}
              src={skills.img}
              width={skills.w}
              height={skills.h}
              alt={`this is ${skills.name} image`}
            />
          ))}
        </div>
        <div className=" flex flex-col justify-center items-center mt-8  ">
          <h2 className=" text-3xl mb-5 text-gray-800 ">
            My first website with html and css
          </h2>
          <video width="700" height="240" controls={false} autoPlay>
            <source src="/mosh.mp4" type="video/mp4" />
            Error Message
          </video>
        </div>
      </section>
    </main>
  );
}
