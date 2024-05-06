import Slider from "@/components/slider";
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
      <span className=" w-[30%] h-full bg-primary-200 absolute right-0 top-0 -z-20" />
      <section className="md:w-[70%]  w-screen md:h-[calc(100vh-12rem)] mt-16 ">
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

      <section className=" mt-28 relative ">
        <div className="w-[30%] h-[40rem] bg-slate-100 absolute -top-52  -z-10 " />
        <div className="flex  justify-evenly  ">
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
        <div className="flex justify-center items-centers  my-32 ">
          <div className="w-[60%] grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1  place-items-center place-content-center ">
            <div className="w-96 flex flex-col items-center md:gap-10 px-10  ">
              <h1 className="md:text-4xl text-3xl  font-bold  ">
                My first project with HTML & CSS
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
                mollis sed. elit. Gravida pellentesque in eu, luctus mollis sed,
                ipsum dolor sit amet consectetur adipiscing elit. Gravida mollis
                sed. elit. Gravida pellentesque in eu, luctus mollis sed, ipsum
                dolor sit amet consectetur adipiscing elit. Gravida mollis sed.
                elit. Gravida pellentesque in eu, luctus mollis sed, ipsum dolor
                sit amet
              </p>
              <div>hello</div>
            </div>
            <video
              className=" w-96  "
              width="570"
              height="699"
              controls={false}
              autoPlay
            >
              <source src="/mosh-new.mp4" type="video/mp4" />
              Error Message
            </video>
          </div>
        </div>
      </section>
      <section className="relative px-10 flex flex-col gap-10 ">
        <span className=" w-[30%] h-[38rem] bg-primary-200 absolute right-0 top-0 -z-20" />
        <div>
          <h3 className="text-3xl text-secondary-200 font-bold ">Project</h3>
          <h1 className="text-5xl font-bold ">My latest graphics</h1>
        </div>
        <Slider />
      </section>
    </main>
  );
}
