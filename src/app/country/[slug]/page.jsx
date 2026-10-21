import countries from '@/data/50Countries.json'
import React from 'react'
import { notFound } from 'next/navigation'


import Hero from '@/components/country/Hero'
import About from '@/components/country/About'
import Tourism from '@/components/country/Tourism'
import Food from '@/components/country/Food'
import FoodInfo from '@/components/country/FoodInfo'
import Wheather from '@/components/country/Wheather'

async function page({ params }) {
  const {slug} = await params
  // console.log(slug);
  
  const country = countries.find(
    (item) => item.slug === slug
  );

  console.log(country);

    if (!country) {
    notFound();
  }
  

  
const page = country.page
const japanData = country.page.hero

// console.log(page);


//  const about = page.sections.find(
//     (item) => item.id === "about_japan"
//   );

  const about = page.sections.find(
    (item) => item.id.startsWith("about_")
  );
  

  //  const tourism = page.sections.find(
  //   (item) => item.id === "tourism_famous_places_japan"
  // );

  const tourism = page.sections.find(
    (item) => item.id.startsWith("tourism_famous_places_")
  );
  
 

  // const food = page.sections.find(
  //   (item) => item.id === "food_cuisine_japan"
  // );

  const food = page.sections.find(
    (item) => item.id.startsWith("food_cuisine_")
  );

  
  // const wheather = page.sections.find(
  //   (item) => item.id === "weather_best_time_to_visit_japan"
  // );

  const wheather = page.sections.find(
    (item) => item.id.startsWith("weather_best_time_to_visit_")
  );


  console.log(wheather);

  return (
    <>
        {japanData && <Hero data={japanData}/>}

        {about && <About data={about}/>}

        {tourism && <Tourism data={tourism}/>}

        {food && <Food data={food}/>}

        {food && <FoodInfo data={food}/>}

        {wheather &&  < Wheather data={wheather}/>}
    </>
  )
}

export default page