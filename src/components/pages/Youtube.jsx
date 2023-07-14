import React, {useEffect, useState} from 'react'
import Contents from '../layout/Contents.jsx'
import ContTitle from '../layout/ContTitle.jsx'
import YoutubeSlider from '../youtube/YoutubeSlider.jsx'
import YoutubeSearch from '../youtube/YoutubeSearch.jsx'
import YoutubeTag from '../youtube/YoutubeTag.jsx'
import YoutubeCont from '../youtube/YoutubeCont.jsx'

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=%EC%9A%94%EA%B0%80&type=video&key=AIzaSyC7IuUdR0GtIu-4xhJlbkT86HaUTd6_Cgc'
    ).then((response) => response.json())
    .then((result) => setYoutubes(result.items))
    .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle />
        <YoutubeSlider />
        <YoutubeSearch />
        <YoutubeTag />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  )
}

export default Youtube
