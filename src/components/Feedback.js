import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Feedback = () => {
  /* States */
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Use Params to check ID */
  const params = useParams();
  // console.log(params.id);
  const { id } = params;

  /* Fetch Data ID with axios + async/await */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://api.imcas.com/v1/feedbacks/${id}`
      );
      //  console.log(response.data.user.fullname);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  /*Check isLoading */
  return isLoading ? (
    <div>Chargement...</div>
  ) : (
    /* Card */
    <div className="feed-card">
      <img alt="profil" src={data.user.picture_url} className="feed-img" />
      <div className="feed-profil">
        <h3>
          {data.user.fullname}
          <small>
            {" "}
            - {data.user.specialty.translations[0].name},{" "}
            {data.user.country.translations[0].name}
          </small>
        </h3>
        <div className="feed-content">"{data.translations[0].content}"</div>
      </div>
    </div>
  );
};

export default Feedback;
