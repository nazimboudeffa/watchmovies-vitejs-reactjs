import React, { useEffect } from "react";
import ReactPlayer from 'react-player'

import { useSingleVideoData, useHistoryData } from "../../hook/";
import { useToast } from "../../contexts";

import { historyVideo } from "../../utils";
const VideoPlayer = () => {
  const { watchId, movieDetail } = useSingleVideoData();

  const { historyDispatch } = useHistoryData();
  const { notifySuccess, notifyError } = useToast();

  const addVideoToHistory = async (movieDetail) => {
    const data = await historyVideo(movieDetail);
    if (data.status === 201) {
      notifySuccess("Video added to history");
      historyDispatch({ type: "ADD_TO_HISTORY", payload: movieDetail });
    }
  };

  useEffect(() => {
    console.log("movieDetail", movieDetail.videourl);
    if (movieDetail._id) {
      addVideoToHistory(movieDetail);
    }
  }, [addVideoToHistory]);

  return (
    <ReactPlayer 
      url={`${movieDetail.videourl}`} 
      controls={true}
      width="100%"
      height="100%"
    />
  );
};

export { VideoPlayer };
