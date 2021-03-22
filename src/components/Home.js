import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  /* States */
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://api.imcas.com/v1/feedbacks`);

      //  console.log(response.data.data[0].translations[0].content);
      setData(response.data.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  /*Check isLoading */
  return isLoading ? (
    <div>Chargement...</div>
  ) : (
    <div>
      {/* Map feedback */}
      {data &&
        data.map((data, index) => {
          return (
            <div className="main" key={data.id}>
              {/* Link with param ID */}
              <Link to={`/feedback/${data.id}`}>
                {/* Start Card */}
                <div className="feed-card">
                  <img
                    alt="profil"
                    src={data.user.picture_url}
                    className="feed-img"
                  />
                  <div className="feed-profil">
                    <h3>
                      {data.user.fullname}
                      <small>
                        {" "}
                        - {data.user.specialty.translations[0].name},{" "}
                        {data.user.country.translations[0].name}
                      </small>
                    </h3>
                    <div className="feed-content">
                      "{data.translations[0].content}"
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
