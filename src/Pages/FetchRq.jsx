import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
function FetchRq() {
  // const [posts, setPosts] = useState([]);
  // const getPostsData = async () => {
  //   try {
  //     const res = await fetchPosts();
  //     // console.log(res);
  //     res.status === 200 ? setPosts(res.data) : [];
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], //usestate
    queryFn: fetchPosts, //useEffect
    // staleTime: 10000,

    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error:{error.message || "something went wrong"}</p>;

  return (
    <div>
      {
        <ul className="section-accordion">
          {data?.map((currElem) => {
            const { id, title, body } = currElem;
            return (
              <li key={id}>
                <p>{title}</p>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default FetchRq;
