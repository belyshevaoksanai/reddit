import axios, { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IPost } from "../shared/CardsList";
import { tokenSelector } from "../store/token";

export interface IComment {
  body: string;
  author: string;
  replies: {
    data: {
      children: {
        data: IComment;
      };
    }[];
  };
}

interface ICommentResponse {
  data: {
    data: {
      children: IComment[];
    }
  }[];
}

export function useCommentData(id: string) {
    const token = useSelector(tokenSelector);
    const [data, setData] = useState<IComment[]>([]);
    const [card, setCard] = useState<IPost>();

    const fetchComments = (id: string) => {
      axios.get(`https://oauth.reddit.com/comments/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(({data}: AxiosResponse<any>) => {
                const comments = data[1].data.children;
                setData(comments);

                const card = data[0].data.children[0].data;
                setCard({
                  bannerImg: card.preview?.images?.[0]?.source?.url,
                  title: card.title,
                  author: card.author,
                  selftext: card.selftext,
                  icon_img: card.sr_detail?.icon_img,
                  id: card.id,
                  created: card.created,
                  ups: card.ups,
                })
            })
            .catch(console.log)
    }

    useEffect(() => {
      if (token) {
        fetchComments(id);
      }
    }, [token]);

    return [data, card] as [IComment[], IPost];
}