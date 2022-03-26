import quotes from "../../utils/quotes.json";
import {
  GoToPage,
  filtering,
  sorting,
  searching,
  numbering,
} from "../../utils/func";

export default function handler(req, res) {
  var lists = null;
  const num = req.query.num || 15;
  const { sort_popularity } = req.query;

  const {
    humor,
    life,
    success,
    inspirational,
    religion,
    love,
    philosophy,
    books,
    death,
    hope,
    wisdom,
    art,
    txt,
  } = req.query;

  if (
    humor ||
    life ||
    success ||
    inspirational ||
    religion ||
    love ||
    philosophy ||
    books ||
    death ||
    hope ||
    wisdom ||
    art
  ) {
    lists = filtering(quotes, {
      humor: humor,
      life: life,
      success: success,
      inspirational: inspirational,
      religion: religion,
      love: love,
      philosophy: philosophy,
      books: books,
      death: death,
      hope: hope,
      wisdom: wisdom,
      art: art,
    });
    lists = lists.slice(0, 10);
  }

  if (sort_popularity) {
    lists = sorting(lists, {
      key: sort_popularity,
      type: "desc",
    });
    lists = lists.slice(0, 10);
  }

  if (txt) {
    lists = searching(quotes, {
      Quote: txt,
    });
    if (sort_popularity) {
      lists = sorting(lists, {
        key: sort_popularity,
        type: "desc",
      });
    }

    lists = lists.slice(0, 10);
  }

  if (txt && req.query.page) {
    lists = searching(quotes, {
      Quote: txt,
    });
    if (sort_popularity) {
      lists = sorting(lists, {
        key: sort_popularity,
        type: "desc",
      });
    }

    lists = GoToPage(lists, req.query.page, num);
  }

  lists = lists.map((o, i) => {
    return {
      ...o,
      id: i,
    };
  });
  res.status(200).json(lists);
}
