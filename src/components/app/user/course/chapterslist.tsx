import React from 'react'


interface Chapter {
    title : string
    description : string
    videoUrl : string
    imageurl : string

}

interface ChapterListProps{
    chapters : Chapter[]
}
const ChaptersList:React.FC <ChapterListProps>= ({chapters}) => {
    console.log(chapters)
  return (
    <div className='flex flex-col space-y-4 mt-3'>
        {chapters?.map((c,i)=>
        (
        <ChapterItems key={i} title={c.title} description={c.description} imageurl={c.description} videoUrl={c.videoUrl}/>
        ))}
    </div>
  )
}


const ChapterItems :React.FC<Chapter> = ({title,description}) =>{
    return (
        <section className='bg-purple-50 shadow-sm border border-purple-600 p-3 rounded-md'>
          <div>{title}</div>
          <h1 className="text-muted-foreground text-xs">
            {description}
          </h1>
        </section>
    )

}
export default ChaptersList