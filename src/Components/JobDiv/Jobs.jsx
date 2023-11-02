import React from "react";
import clock from "../../assets/relogio.png"
import logo0 from "../../assets/bebo.png"
import logo1 from "../../assets/bing.png"
import logo2 from "../../assets/facebook.png"
import logo3 from "../../assets/logo-triangular.png"
import logo4 from "../../assets/logotipo-do-metro-de-haia.png"
import logo5 from "../../assets/arquivo-de-log.png"
import logo6 from "../../assets/conexao.png"
import logo7 from "../../assets/ember-esbocado-do-logotipo-social.png"

const Data = [
  {
    id:1,
    image: logo0,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'Bebo co.'
  },
  {
    id:2,
    image: logo1,
    title: 'Software Engineer',
    time: '24h',
    location: 'Germany',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'Bing co.'
  },
  {
    id:3,
    image: logo2,
    title: 'UI Developer',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'Facebook co.'
  },
  {
    id:4,
    image: logo3,
    title: 'UX Engineer',
    time: '5h',
    location: 'Washington',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'Tryd co.'
  },
  {
    id:5,
    image: logo4,
    title: 'DB Specialist',
    time: '1 week',
    location: 'Massachussets',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'Center co.'
  },
  {
    id:6,
    image: logo5,
    title: 'FullStack Developer',
    time: '15h',
    location: 'Detroit',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'UpLoad co.'
  },
  {
    id:7,
    image: logo6,
    title: 'Web Designer',
    time: '12h',
    location: 'France',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'Connection co.'
  },
  {
    id:8,
    image: logo7,
    title: 'DBA',
    time: '2 days',
    location: 'Utah',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quo velit illo, fuga culpa sit natus libero labore aliquid sed ratione.',
    company: 'Flame co.'
  },
]


const Jobs = () => {

  return(
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

      {
        Data.map(({id,image,title,time,location,desc,company}) =>{
          return(

            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
              <span className="flex items-center text-[#ccc] gap-1  ">
                <img src={clock} alt="clock" /> {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{desc}</p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company logo" className="w-[15px]"/>
                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor">
                Apply now
              </button>

          </div>
          )
          }       
        )
      }

      </div>
    </div>
  )
}

export default Jobs